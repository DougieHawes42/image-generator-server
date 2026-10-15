const generateWithFlux = async (prompt) => {
  const response = await fetch("https://api.bfl.ai/v1/flux-3-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-key": process.env.BFL_API_KEY,
    },
    body: JSON.stringify({
      prompt,
      width: 1024,
      height: 1024,
      safety_tolerance: 5,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "FLUX generation failed");
  }

  const pollingUrl = data.polling_url;

  if (!pollingUrl) {
    throw new Error("FLUX did not return a polling URL");
  }

  for (let attempt = 0; attempt < 60; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const pollResponse = await fetch(pollingUrl, {
      headers: {
        "x-key": process.env.BFL_API_KEY,
      },
    });

    if (!pollResponse.ok) {
      throw new Error("Unable to check FLUX generation status");
    }

    const status = await pollResponse.json();

    if (status.status === "Ready") {
      const imageUrl = status.result?.sample;

      if (!imageUrl) {
        throw new Error("FLUX returned no image");
      }

      const imageResponse = await fetch(imageUrl);

      if (!imageResponse.ok) {
        throw new Error("Unable to download FLUX image");
      }

      const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

      return imageBuffer.toString("base64");
    }

    if (
      ["Error", "Failed", "Content Moderated", "Request Moderated"].includes(
        status.status,
      )
    ) {
      throw new Error(`FLUX generation failed: ${status.status}`);
    }
  }

  throw new Error("FLUX generation timed out");
};

module.exports = generateWithFlux;
