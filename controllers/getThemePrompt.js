const themePrompts = [
  { name: "NONE", prompt: "" },
  {
    name: "GTA",
    prompt: `VISUAL THEME: GRAND THEFT AUTO PROMOTIONAL ARTWORK

    Transform the requested image or scene into the distinctive
    illustrated aesthetic of Grand Theft Auto V and Grand Theft
    Auto VI promotional artwork, loading screens, and character
    illustrations.

    ARTISTIC STYLE:
    Use highly polished, semi-realistic digital illustration
    with bold, confident outlines, smooth colour gradients,
    carefully defined shadows, and detailed textures.
    Characters and objects should have realistic proportions
    but a distinctly illustrated appearance rather than
    photographic realism.

    Apply vibrant, saturated colours, cinematic contrast,
    dramatic yet natural-looking lighting, and the polished
    finish associated with official Grand Theft Auto
    promotional illustrations.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the identity,
    recognisable facial features, hairstyle, expression,
    clothing, and defining characteristics of the original
    subject unless the user's instructions explicitly request
    changes.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    COMPOSITION AND ENVIRONMENT:
    Preserve the subject, actions, setting, and important
    compositional details specified by the user.

    Adapt the environment to the same illustrated aesthetic,
    using cinematic depth, atmospheric lighting, and richly
    detailed backgrounds.

    Where appropriate, incorporate the visual atmosphere of
    modern Grand Theft Auto promotional artwork, including
    warm sunshine, urban environments, coastal colours,
    neon lighting, or dramatic cityscapes.

    However, do not introduce these elements if they conflict
    with the user's requested scene.

    FINAL PRESENTATION:
    The finished image should resemble a professionally
    illustrated character or scene from an official Grand
    Theft Auto loading screen or promotional poster.

    Avoid photorealistic rendering, crude cartoon aesthetics,
    exaggerated caricatures, pixel art, and generic 3D
    video game screenshots.

    Do not add Grand Theft Auto logos, titles, text, borders,
    or promotional typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears in
    the image. These theme instructions determine HOW it
    should look. Preserve the user's creative intentions
    while consistently applying the Grand Theft Auto
    illustration aesthetic.`,
  },
  {
    name: "MINECRAFT",
    prompt: `
    VISUAL THEME: MINECRAFT

    Transform the requested image or scene into the distinctive
    visual aesthetic of the Minecraft video game universe.

    ARTISTIC STYLE:
    Render the entire scene using authentic Minecraft-inspired
    voxel graphics, with block-based geometry, cubic structures,
    sharp square edges, and deliberately pixelated textures.

    All objects, characters, animals, vegetation, buildings,
    and environmental elements should be constructed from
    geometric blocks and simple polygonal shapes.

    Use the recognisable Minecraft colour palette, including
    earthy greens, rich browns, stone greys, bright blue skies,
    and vibrant environmental colours where appropriate.

    Apply pixelated surface textures resembling those found
    in Minecraft, with simple shading, clearly defined edges,
    and consistent block-based construction.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, transform the original
    subject into a Minecraft-style character or object while
    preserving its most recognisable characteristics.

    For human subjects, use classic Minecraft character
    proportions: a large cubic head, rectangular torso,
    block-shaped arms and legs, and a simplified pixel-art face.

    Recreate recognisable hairstyles, facial hair, clothing,
    accessories, and distinctive colours using pixelated
    textures and block-based shapes.

    Do not preserve realistic human anatomy or photographic
    facial features at the expense of the Minecraft aesthetic.

    If no reference image is provided, construct the subject
    entirely from the user's written description.

    COMPOSITION AND ENVIRONMENT:
    Preserve the original subject, actions, setting, and
    important compositional details requested by the user.

    Reinterpret the surrounding environment using Minecraft
    blocks, voxel terrain, cubic trees, pixelated vegetation,
    and recognisable block-based architecture.

    Where appropriate, incorporate Minecraft-inspired
    environmental details such as grass blocks, dirt blocks,
    stone, wooden structures, mountains, rivers, or forests.

    However, do not introduce unrelated game elements or
    change the user's requested setting unnecessarily.

    LIGHTING AND ATMOSPHERE:
    Use lighting consistent with Minecraft's visual world,
    including bright daylight, warm sunsets, atmospheric
    shadows, and simple ambient illumination.

    Subtle cinematic lighting and depth may be introduced
    to improve the overall composition, but the result must
    remain unmistakably block-based and game-like.

    FINAL PRESENTATION:
    The finished image should resemble a polished scene or
    character screenshot from Minecraft, with authentic
    voxel geometry and pixelated textures throughout.

    Avoid photorealistic rendering, smooth organic surfaces,
    realistic human proportions, conventional cartoon
    illustration, and generic low-poly 3D artwork.

    Do not add Minecraft logos, titles, text, borders,
    user-interface elements, or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears in
    the image. These theme instructions determine HOW it
    should look.

    Preserve the user's creative intentions while consistently
    translating the entire scene into the Minecraft visual
    universe.
  `,
  },
  {
    name: "CYBERPUNK",
    prompt: `
    VISUAL THEME: CYBERPUNK 2077

    Transform the requested image or scene into the distinctive
    futuristic, dystopian visual aesthetic of Cyberpunk 2077,
    inspired by the richly detailed world of Night City.

    ARTISTIC STYLE:
    Render the scene with highly detailed, cinematic realism,
    combining believable human anatomy, realistic materials,
    sophisticated lighting, and advanced futuristic technology.

    Emphasise the striking visual contrast between high-tech
    sophistication and urban decay, creating an atmosphere
    of a technologically advanced but socially fractured world.

    Use a distinctive cyberpunk colour palette featuring
    electric blues, neon pinks, vibrant purples, saturated
    yellows, deep reds, and dramatic areas of shadow.

    Incorporate reflective surfaces, metallic textures,
    illuminated displays, holographic projections, and
    atmospheric effects such as smoke, mist, and rain
    where appropriate.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the Cyberpunk 2077 aesthetic where appropriate,
    without unnecessarily replacing the subject's
    recognisable appearance.

    Human characters may feature futuristic streetwear,
    technical fabrics, illuminated accessories, cybernetic
    implants, or subtle technological enhancements.

    Cybernetic enhancements should appear believable,
    integrated into the character's anatomy, and consistent
    with the visual world of Cyberpunk 2077.

    Do not automatically replace human features with
    mechanical components or introduce extensive bodily
    modifications unless requested or clearly appropriate.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    ENVIRONMENT AND WORLD DESIGN:
    Preserve the user's requested subject, actions, and
    important compositional details.

    Where appropriate, reinterpret the environment using
    the architectural and technological language of Night City.

    Potential environmental details include towering
    skyscrapers, densely populated urban streets,
    futuristic vehicles, illuminated advertisements,
    holographic billboards, industrial structures,
    elevated roadways, and sprawling megacorporate buildings.

    Blend advanced technology with signs of urban wear,
    including weathered concrete, exposed machinery,
    graffiti, electrical cables, and ageing infrastructure.

    Environments should feel lived-in, atmospheric,
    technologically sophisticated, and visually complex.

    However, do not replace the user's explicitly requested
    location with a futuristic city if doing so would
    fundamentally contradict their original instructions.

    LIGHTING AND ATMOSPHERE:
    Use cinematic lighting inspired by Cyberpunk 2077,
    with strong contrasts between vivid artificial
    illumination and deep atmospheric shadows.

    Where appropriate, introduce neon reflections across
    wet pavement, glass, polished metal, and other
    reflective surfaces.

    Use volumetric lighting, atmospheric haze, dramatic
    backlighting, and carefully controlled highlights
    to create depth and visual intensity.

    The atmosphere may be mysterious, energetic, luxurious,
    dangerous, melancholic, or rebellious depending on
    the subject and the user's intended mood.

    Avoid making every scene unnecessarily dark or
    threatening. Daylight scenes should retain the
    distinctive Cyberpunk 2077 aesthetic through
    architecture, technology, fashion, and environmental
    design rather than relying exclusively on neon lighting.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the subject using polished, cinematic
    composition reminiscent of Cyberpunk 2077
    promotional imagery and in-game cinematics.

    Use realistic proportions, convincing perspective,
    detailed environments, and carefully balanced
    foreground and background elements.

    Introduce cinematic depth of field and dramatic
    camera angles where appropriate, without compromising
    the visibility of the primary subject.

    FINAL PRESENTATION:
    The finished image should resemble a high-quality
    cinematic scene or promotional image from the
    Cyberpunk 2077 universe.

    Prioritise realistic textures, futuristic worldbuilding,
    sophisticated lighting, strong visual storytelling,
    and a distinctly high-tech, dystopian atmosphere.

    Avoid conventional cartoon aesthetics, generic
    science-fiction imagery, excessive fantasy elements,
    crude robotic designs, and simplistic neon filters.

    Do not add Cyberpunk 2077 logos, titles, text,
    borders, or promotional typography unless
    explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive visual
    language of Cyberpunk 2077.
  `,
  },
  {
    name: "RED_DEAD",
    prompt: `
    VISUAL THEME: RED DEAD REDEMPTION

    Transform the requested image or scene into the distinctive
    cinematic Western aesthetic of Red Dead Redemption 2,
    inspired by the rugged American frontier during the
    final years of the 19th century.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism,
    naturalistic textures, historically inspired details,
    and the atmospheric visual quality associated with
    Red Dead Redemption 2.

    Emphasise the authenticity of the American frontier,
    combining beautiful natural landscapes with the
    rough, weathered appearance of life in the Old West.

    Use an earthy, cinematic colour palette featuring
    dusty browns, warm amber, faded reds, muted greens,
    weathered greys, and golden sunlight.

    Incorporate realistic materials such as worn leather,
    aged timber, dusty fabric, tarnished metal, rough stone,
    and weather-beaten surfaces.

    Avoid exaggerated cartoon aesthetics or overly
    stylised Western illustrations. The finished image
    should resemble a cinematic scene from the game
    rather than a conventional cartoon or painting.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, and defining characteristics.

    Where appropriate, adapt clothing and accessories
    to the late-19th-century American frontier.

    Suitable clothing may include weathered leather jackets,
    waistcoats, cotton shirts, long coats, neckerchiefs,
    cowboy hats, riding boots, and period-appropriate dresses.

    Clothing should appear authentic, practical, and
    naturally worn rather than resembling an exaggerated
    fancy-dress costume.

    Preserve distinctive hairstyles, facial hair,
    accessories, and other recognisable characteristics
    wherever possible.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    HISTORICAL SETTING AND ENVIRONMENT:
    Where appropriate, reinterpret the requested environment
    as a location within the American frontier around 1899.

    Potential settings include dusty frontier towns,
    wooden saloons, railway stations, cattle ranches,
    mountain settlements, forests, open prairies,
    desert landscapes, rivers, and remote homesteads.

    Incorporate historically appropriate environmental
    details such as wooden buildings, horse-drawn wagons,
    hitching posts, oil lanterns, telegraph poles,
    steam locomotives, and unpaved streets.

    Natural environments should feature the expansive,
    richly detailed landscapes associated with
    Red Dead Redemption 2.

    Include realistic vegetation, rugged mountains,
    winding rivers, dramatic skies, and atmospheric
    weather conditions where appropriate.

    Do not introduce unrelated Western objects or
    unnecessarily alter the user's requested activity.

    LIGHTING AND ATMOSPHERE:
    Use naturalistic cinematic lighting inspired by
    Red Dead Redemption 2.

    Favour warm golden-hour sunlight, dramatic sunsets,
    soft morning mist, atmospheric cloud formations,
    and carefully balanced natural shadows.

    Where appropriate, incorporate airborne dust,
    subtle smoke, weather effects, and atmospheric
    depth to create a believable frontier environment.

    Interior scenes may feature warm illumination
    from oil lamps, fireplaces, candles, and
    sunlight entering through wooden windows.

    The atmosphere should feel immersive, grounded,
    rugged, and historically convincing.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the cinematic visual
    language of Red Dead Redemption 2.

    Use realistic proportions, detailed facial features,
    convincing materials, and carefully composed
    environments.

    Where appropriate, incorporate dramatic wide shots,
    character-focused portraits, low camera angles,
    and expansive landscape compositions.

    Emphasise visual storytelling through authentic
    environmental details, natural character poses,
    and atmospheric lighting.

    Avoid excessively dramatic action poses unless
    they are appropriate to the user's instructions.

    HISTORICAL CONSISTENCY:
    When adapting a modern subject to the Red Dead
    Redemption universe, reinterpret modern clothing,
    vehicles, technology, and architecture using
    historically appropriate alternatives where possible.

    However, preserve explicitly requested objects
    or activities when removing them would contradict
    the user's creative intentions.

    Do not automatically introduce firearms, violence,
    outlaws, or criminal activity simply because the
    theme is associated with the Wild West.

    FINAL PRESENTATION:
    The finished image should resemble a beautifully
    rendered cinematic scene or character portrait
    from Red Dead Redemption 2.

    Prioritise historical atmosphere, naturalistic
    lighting, rugged textures, authentic frontier
    environments, and immersive visual storytelling.

    Avoid modern urban aesthetics, futuristic technology,
    exaggerated cartoon proportions, generic Western
    caricatures, and overly artificial lighting.

    Do not add Red Dead Redemption logos, titles,
    text, borders, or promotional typography unless
    explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    aesthetic of Red Dead Redemption 2.
  `,
  },
  {
    name: "FALLOUT",
    prompt: `
    VISUAL THEME: FALLOUT FRANCHISE

    Transform the requested image or scene into the distinctive
    retrofuturistic, post-apocalyptic visual aesthetic of the
    Fallout video game franchise, drawing inspiration from
    Fallout 3, Fallout: New Vegas, Fallout 4, Fallout 76,
    and the cinematic visual presentation of the Fallout
    television adaptation.

    ARTISTIC STYLE:
    Render the scene with highly detailed cinematic realism,
    combining believable human characters, realistic materials,
    atmospheric environments, and the unmistakable
    retrofuturistic design language of the Fallout universe.

    Establish a world where 1950s American culture, atomic-age
    optimism, futuristic technology, and nuclear devastation
    coexist in a visually distinctive alternative history.

    Use a colour palette featuring weathered browns, faded
    yellows, dusty oranges, olive greens, rusted reds,
    industrial greys, and occasional vibrant retro colours.

    Balance the bleak appearance of the wasteland with
    the cheerful, colourful design language of pre-war
    American advertising and consumer culture.

    Avoid generic post-apocalyptic imagery that lacks
    Fallout's recognisable retrofuturistic identity.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the Fallout universe where appropriate.

    Possible clothing styles include weathered wasteland
    outfits, retro-American fashion, rugged leather jackets,
    scavenged protective equipment, military surplus,
    and distinctive blue-and-yellow Vault-Tec jumpsuits.

    Characters may feature retrofuturistic accessories,
    wrist-mounted Pip-Boy computers, improvised equipment,
    or other recognisable Fallout-inspired technology.

    However, do not automatically dress every character
    in a Vault-Tec jumpsuit or introduce unnecessary
    weapons, armour, or survival equipment.

    If no reference image is provided, construct the
    subject entirely from the user's written description.

    RETROFUTURISTIC DESIGN:
    Incorporate Fallout's distinctive vision of an
    alternative atomic-age future.

    Technology should combine bulky analogue machinery,
    vacuum tubes, oversized control panels, mechanical
    switches, monochrome computer terminals, industrial
    robotics, and futuristic nuclear-powered equipment.

    Vehicles and architecture may feature rounded
    1950s-inspired designs, chrome detailing, sweeping
    curves, and optimistic atomic-age styling.

    Where appropriate, introduce recognisable elements
    such as Vault-Tec technology, Pip-Boy devices,
    RobCo-inspired robots, Nuka-Cola vending machines,
    and retrofuturistic household appliances.

    These details should enhance the scene naturally
    rather than overwhelming the user's requested subject.

    ENVIRONMENT AND WORLD DESIGN:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    as part of the Fallout universe.

    Potential settings include ruined American suburbs,
    abandoned diners, derelict petrol stations,
    devastated city streets, underground vaults,
    irradiated deserts, improvised settlements,
    military installations, and decaying industrial sites.

    Buildings should feature convincing signs of age,
    including cracked concrete, rusted metal,
    peeling paint, broken windows, weathered signage,
    and vegetation reclaiming abandoned structures.

    Introduce environmental storytelling through
    discarded belongings, retro advertisements,
    damaged machinery, and remnants of pre-war life.

    However, not every scene must depict destruction.

    A requested domestic, peaceful, or cheerful scene
    may instead take place within a pristine pre-war
    American home, a functioning underground vault,
    or a colourful retrofuturistic settlement.

    CREATURES AND FACTIONS:
    The Fallout universe includes distinctive creatures,
    robots, settlements, and factions.

    Where explicitly requested or contextually appropriate,
    incorporate elements such as power armour,
    Protectron-style robots, Mr. Handy-inspired machines,
    Brotherhood of Steel equipment, super mutants,
    or irradiated wasteland creatures.

    Such elements should be visually consistent with
    the Fallout universe.

    Do not automatically introduce monsters, weapons,
    combat, or threatening characters into otherwise
    peaceful scenes.

    LIGHTING AND ATMOSPHERE:
    Use cinematic lighting appropriate to the
    requested location and atmosphere.

    Wasteland environments may feature dusty sunlight,
    atmospheric haze, muted skies, dramatic shadows,
    and warm light filtering through ruined buildings.

    Underground vaults may feature fluorescent lighting,
    industrial fixtures, polished metal surfaces,
    and distinctive blue-and-yellow colour accents.

    Pre-war environments may feature cheerful sunshine,
    saturated colours, polished chrome, and the
    idealised appearance of 1950s American advertising.

    Balance atmospheric realism with the franchise's
    distinctive mixture of nostalgia, dark humour,
    and post-apocalyptic melancholy.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the subject using polished cinematic
    composition inspired by Fallout promotional imagery,
    in-game cinematics, and the television adaptation.

    Use realistic proportions, convincing textures,
    environmental depth, and carefully controlled lighting.

    Character portraits should retain recognisable
    facial features while integrating naturally
    into the retrofuturistic environment.

    Wider compositions should emphasise the contrast
    between futuristic technology, vintage Americana,
    and the remnants of a devastated civilisation.

    FINAL PRESENTATION:
    The finished image should resemble a professionally
    rendered cinematic scene from the Fallout universe.

    Prioritise authentic retrofuturistic worldbuilding,
    atomic-age American design, realistic materials,
    atmospheric environments, and distinctive
    Fallout-inspired visual storytelling.

    Avoid generic science-fiction aesthetics,
    conventional cyberpunk neon environments,
    medieval fantasy elements, simplistic cartoons,
    and unrelated futuristic technology.

    Do not add Fallout logos, titles, text, borders,
    or promotional typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the unmistakable
    retrofuturistic aesthetic of the Fallout franchise.
  `,
  },
  {
    name: "STAR_WARS",
    prompt: `
    VISUAL THEME: STAR WARS

    Transform the requested image or scene into the distinctive
    cinematic science-fiction aesthetic of the Star Wars universe,
    drawing inspiration from the original trilogy, prequel trilogy,
    modern Star Wars films, and live-action television productions.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism, believable
    materials, richly detailed environments, and the grand visual
    storytelling associated with Star Wars.

    Establish the atmosphere of a vast, ancient galaxy populated
    by diverse civilisations, extraordinary alien species,
    sophisticated technology, and contrasting planetary cultures.

    Combine futuristic science-fiction design with historical,
    mythological, and practical influences.

    Prioritise authentic Star Wars production design rather than
    generic science-fiction imagery.

    Use realistic textures, convincing physical materials,
    atmospheric depth, and carefully composed cinematic lighting.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure, hairstyle,
    expression, and defining characteristics.

    Adapt clothing, accessories, and surrounding details to the
    Star Wars universe where appropriate.

    Characters may wear practical galactic clothing, layered robes,
    utility belts, rugged travelling garments, military uniforms,
    pilot equipment, ceremonial attire, or futuristic civilian fashion.

    Clothing should feel naturally integrated into the Star Wars
    universe rather than resembling an exaggerated costume.

    Where appropriate, incorporate distinctive materials such as
    weathered leather, heavy woven fabrics, polished armour,
    metallic accessories, and technologically advanced equipment.

    Do not automatically transform every character into a Jedi,
    Sith, stormtrooper, bounty hunter, or other established archetype.

    Preserve the subject's original personality, expression,
    pose, and defining appearance wherever possible.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    GALACTIC ENVIRONMENTS:
    Preserve the user's requested subject, actions, composition,
    and important environmental details.

    Where appropriate, reinterpret the environment as a location
    within the Star Wars galaxy.

    Potential settings include sprawling desert settlements,
    densely populated galactic cities, remote forest planets,
    icy wildernesses, tropical islands, volcanic landscapes,
    futuristic spaceports, ancient temples, and orbital stations.

    Draw inspiration from the environmental diversity of
    planets such as Tatooine, Coruscant, Naboo, Endor,
    Hoth, and Mustafar.

    Architectural design may feature weathered desert structures,
    monumental futuristic buildings, industrial hangars,
    ancient stone ruins, sophisticated royal residences,
    and heavily engineered spacecraft interiors.

    Environments should feel expansive, believable,
    culturally distinctive, and rich in visual storytelling.

    Do not automatically replace the user's requested setting
    with a desert planet or spacecraft interior.

    TECHNOLOGY AND WORLD DESIGN:
    Incorporate the distinctive technological language
    of the Star Wars universe.

    Technology should combine advanced capabilities with
    practical, mechanical, and frequently weathered construction.

    Where appropriate, introduce holographic displays,
    illuminated control panels, mechanical switches,
    exposed wiring, robotic machinery, repulsorlift vehicles,
    and sophisticated galactic communication equipment.

    Spaceships and vehicles may feature detailed hull plating,
    visible mechanical components, industrial weathering,
    and recognisable Star Wars-inspired silhouettes.

    Droids may appear where appropriate, featuring
    distinctive mechanical personalities, practical designs,
    and believable integration into everyday galactic life.

    Avoid excessively sleek, sterile, or generic futuristic
    designs that lack the tactile, lived-in character
    associated with Star Wars.

    THE FORCE AND FANTASY ELEMENTS:
    The Star Wars universe combines science fiction
    with mythology, spirituality, and fantasy.

    Where explicitly requested or contextually appropriate,
    incorporate elements associated with Jedi, Sith,
    lightsabers, ancient temples, and the Force.

    Lightsabers should feature convincing illuminated blades,
    realistic light spill, and detailed mechanical hilts.

    Force-related effects may include subtle atmospheric
    distortion, floating objects, or cinematic energy effects.

    However, do not introduce lightsabers, supernatural powers,
    combat, or dramatic confrontations into scenes where
    they are not requested or appropriate.

    ALIEN SPECIES AND CREATURES:
    Where appropriate, populate environments with distinctive
    alien species, unusual wildlife, and diverse galactic cultures.

    Alien characters should feature convincing anatomy,
    realistic skin textures, detailed costumes, and
    believable integration into their surroundings.

    Creatures may range from small companion animals
    to enormous exotic wildlife.

    Do not unnecessarily transform human subjects into aliens
    or introduce unrelated creatures that distract from
    the user's requested composition.

    LIGHTING AND ATMOSPHERE:
    Use cinematic lighting inspired by Star Wars films.

    Desert environments may feature intense sunlight,
    warm golden tones, atmospheric dust, and dramatic sunsets.

    Galactic cities may feature sophisticated artificial lighting,
    illuminated architecture, atmospheric haze, and
    contrasting areas of shadow.

    Spacecraft interiors may feature practical industrial
    illumination, coloured instrument panels, and
    subtle reflections across metallic surfaces.

    Forests, oceans, mountains, and other natural environments
    should retain believable lighting appropriate
    to their planetary setting.

    Use dramatic lighting when appropriate, but avoid
    making every scene unnecessarily dark or threatening.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the cinematic visual language
    associated with Star Wars.

    Draw inspiration from expansive establishing shots,
    carefully composed character portraits, dramatic
    silhouettes, and visually striking planetary landscapes.

    Use convincing perspective, realistic proportions,
    sophisticated depth of field, and atmospheric scale.

    Where appropriate, incorporate wide cinematic framing,
    dramatic backlighting, and the visual grandeur
    associated with epic space opera.

    Preserve the visibility and importance of the user's
    primary subject rather than allowing background
    spectacle to dominate the composition.

    MOOD AND STORYTELLING:
    Star Wars encompasses adventure, mystery, humour,
    romance, political intrigue, exploration, and everyday life.

    Match the emotional atmosphere to the user's
    original request.

    Peaceful scenes should remain peaceful, humorous scenes
    should retain their humour, and dramatic scenes
    may incorporate more intense cinematic presentation.

    Do not automatically introduce galactic warfare,
    villains, weapons, or dangerous situations.

    FINAL PRESENTATION:
    The finished image should resemble a professionally
    produced cinematic scene, character portrait,
    or promotional still from the Star Wars universe.

    Prioritise authentic galactic worldbuilding,
    richly detailed environments, practical futuristic
    technology, cinematic realism, and immersive
    visual storytelling.

    Avoid conventional cartoon aesthetics, generic
    cyberpunk imagery, excessive neon lighting,
    simplistic science-fiction environments,
    and unrelated fantasy designs.

    Do not add Star Wars logos, titles, text,
    borders, or promotional typography unless
    explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    aesthetic of the Star Wars universe.
  `,
  },
  {
    name: "HARRY_POTTER",
    prompt: `
    VISUAL THEME: HARRY POTTER WIZARDING WORLD

    Transform the requested image or scene into the distinctive
    cinematic magical-fantasy aesthetic of the Harry Potter
    film franchise, drawing inspiration from the eight original
    films and the richly detailed Wizarding World.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism,
    richly detailed environments, believable materials,
    atmospheric lighting, and the enchanting visual quality
    associated with the Harry Potter films.

    Combine the familiarity of everyday British life with
    extraordinary magical elements, ancient traditions,
    mysterious architecture, and whimsical fantasy details.

    Establish a world where magic feels naturally integrated
    into ordinary life rather than appearing as an unrelated
    collection of fantasy effects.

    Use a sophisticated colour palette featuring warm amber,
    deep burgundy, forest green, midnight blue, aged gold,
    weathered brown, and atmospheric stone grey.

    Allow the colour palette to vary naturally according
    to the scene, balancing warmth and wonder with mystery,
    elegance, and occasional gothic darkness.

    Avoid generic medieval fantasy imagery that lacks the
    distinctive British magical character of Harry Potter.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, age, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the Wizarding World where appropriate.

    Characters may wear traditional wizarding robes,
    tailored waistcoats, long coats, scarves, eccentric
    hats, period-inspired garments, or contemporary
    British clothing with subtle magical details.

    Clothing should feature believable fabrics,
    intricate stitching, layered textures, and
    naturally worn materials.

    Preserve recognisable hairstyles, facial features,
    clothing details, and accessories wherever possible.

    Do not automatically dress every character in a
    Hogwarts school uniform or assign them to a
    particular Hogwarts house.

    Do not automatically introduce wands, broomsticks,
    or magical creatures unless they are requested
    or appropriate to the scene.

    If no reference image is provided, create the
    subject entirely from the user's written description.

    MAGICAL ARCHITECTURE AND ENVIRONMENTS:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    using the architectural language and atmosphere
    of the Harry Potter Wizarding World.

    Potential settings include ancient magical castles,
    candlelit libraries, grand stone halls, winding
    staircases, enchanted classrooms, traditional
    British villages, mysterious forests, magical
    shopping streets, and hidden wizarding residences.

    Draw inspiration from iconic environments such
    as Hogwarts Castle, Diagon Alley, Hogsmeade,
    the Great Hall, and the Forbidden Forest.

    Architectural details may include Gothic arches,
    ancient stonework, towering bookshelves,
    stained-glass windows, carved wooden furniture,
    elaborate fireplaces, and intricately decorated
    ceilings.

    Environments should feel historic, inhabited,
    magical, and rich in visual storytelling.

    However, do not automatically replace the user's
    requested location with Hogwarts or another
    recognisable setting.

    MAGICAL OBJECTS AND EVERYDAY DETAILS:
    Incorporate the distinctive magical craftsmanship
    and eccentricity associated with the Wizarding World.

    Where appropriate, introduce enchanted books,
    floating candles, ornate potion bottles,
    magical instruments, antique clocks,
    moving portraits, parchment, quills,
    and curious handcrafted objects.

    Magical technology should feel traditional,
    mysterious, and artisanal rather than electronic,
    industrial, or futuristic.

    Ordinary objects may possess subtle magical
    properties, such as levitating, moving independently,
    glowing softly, or behaving in unexpected ways.

    These elements should complement the user's
    requested scene rather than overwhelm it.

    MAGIC AND SUPERNATURAL EFFECTS:
    Where explicitly requested or contextually appropriate,
    incorporate magical effects inspired by the
    Harry Potter films.

    Magic may appear as subtle illuminated particles,
    glowing wand movements, floating objects,
    atmospheric energy, shimmering transformations,
    or delicate supernatural illumination.

    Magical effects should feel physically integrated
    into the environment, interacting convincingly
    with surrounding surfaces, light, and atmosphere.

    Avoid excessive explosions of colourful energy,
    generic superhero-style powers, or overwhelming
    fantasy effects unless the user's prompt
    specifically requests them.

    Not every scene requires visible spellcasting.
    The Wizarding World should remain recognisable
    through its architecture, clothing, objects,
    and atmosphere even when no magic is occurring.

    CREATURES AND WILDLIFE:
    Where appropriate, incorporate magical creatures
    and animals associated with the Wizarding World.

    Potential creatures include owls, hippogriffs,
    house-elves, dragons, thestrals, and other
    fantastical animals.

    Creatures should feature convincing anatomy,
    detailed textures, and believable integration
    into their surroundings.

    Do not introduce unrelated creatures into
    otherwise ordinary or peaceful scenes.

    LIGHTING AND ATMOSPHERE:
    Use cinematic lighting inspired by the
    Harry Potter film franchise.

    Interior environments may feature warm candlelight,
    glowing fireplaces, soft window illumination,
    and atmospheric shadows across ancient stone
    and polished wooden surfaces.

    Exterior scenes may feature misty British mornings,
    dramatic cloud formations, golden autumn sunlight,
    moonlit courtyards, gentle snowfall, or
    mysterious woodland lighting.

    Use subtle volumetric lighting, atmospheric haze,
    and natural shadow transitions to establish
    depth and magical ambience.

    The mood should reflect the user's original
    intentions rather than automatically making
    every scene dark or mysterious.

    Cheerful scenes should retain warmth, humour,
    and whimsy, while dramatic scenes may feature
    stronger contrasts and gothic atmosphere.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the cinematic visual
    language of the Harry Potter films.

    Use realistic human proportions, convincing
    materials, carefully composed environments,
    and sophisticated depth of field.

    Character portraits should emphasise natural
    expressions, recognisable facial features,
    detailed costumes, and atmospheric surroundings.

    Wider scenes should highlight the grandeur
    of magical architecture and the extraordinary
    details hidden within seemingly ordinary places.

    Maintain a balance between the primary subject
    and the surrounding magical environment.

    BRITISH WIZARDING WORLD IDENTITY:
    Preserve the distinctive British cultural
    atmosphere associated with Harry Potter.

    Where appropriate, incorporate traditional
    British architecture, cobbled streets,
    historic railway stations, countryside villages,
    old-fashioned shopfronts, and eccentric
    magical institutions.

    Blend these familiar elements with imaginative
    magical details to create a believable
    alternative world existing alongside ordinary life.

    Avoid generic American high-school aesthetics,
    futuristic technology, and unrelated fantasy
    architecture unless specifically requested.

    FINAL PRESENTATION:
    The finished image should resemble a beautifully
    produced cinematic scene, character portrait,
    or promotional still from the Harry Potter films.

    Prioritise atmospheric magical realism,
    richly detailed British architecture,
    enchanting environmental storytelling,
    authentic wizarding-world design,
    and sophisticated cinematic lighting.

    Avoid conventional cartoon aesthetics,
    generic medieval fantasy illustrations,
    excessive magical effects, futuristic
    science-fiction imagery, and exaggerated
    character proportions.

    Do not add Harry Potter logos, titles,
    text, borders, Hogwarts house crests,
    or promotional typography unless
    explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    aesthetic of the Harry Potter Wizarding World.
  `,
  },
  {
    name: "LOTR",
    prompt: `
    VISUAL THEME: THE LORD OF THE RINGS

    Transform the requested image or scene into the distinctive
    cinematic high-fantasy aesthetic of The Lord of the Rings,
    drawing primary inspiration from Peter Jackson's original
    film trilogy and the richly detailed world of Middle-earth.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism,
    naturalistic textures, elaborate environmental detail,
    historically inspired craftsmanship, and the sweeping
    visual grandeur associated with The Lord of the Rings.

    Establish the atmosphere of an ancient, mythological world
    shaped by centuries of history, legendary civilisations,
    natural beauty, and the coexistence of ordinary life
    with extraordinary fantasy.

    Combine grounded realism with subtle mythological wonder,
    ensuring that magical and fantastical elements feel
    naturally integrated into a believable physical world.

    Use a rich, organic colour palette featuring forest greens,
    earthy browns, warm golds, weathered greys, deep blues,
    muted silvers, and natural stone colours.

    Allow the palette to vary according to the setting,
    from the warm pastoral beauty of the Shire to the
    ethereal elegance of Rivendell and the dramatic
    mountain landscapes of Middle-earth.

    Avoid generic fantasy illustrations that lack the
    distinctive historical depth, craftsmanship, and
    naturalistic atmosphere of The Lord of the Rings.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, age, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the world of Middle-earth where appropriate.

    Characters may wear finely woven cloaks, embroidered
    tunics, practical travelling garments, leather belts,
    rustic dresses, elegant robes, handcrafted jewellery,
    or historically inspired armour.

    Clothing should feature believable natural fabrics,
    intricate craftsmanship, authentic stitching,
    weathered leather, and carefully considered details.

    Preserve recognisable hairstyles, facial hair,
    expressions, and distinctive accessories wherever possible.

    Do not automatically transform human subjects into
    elves, dwarves, hobbits, or other fantasy races.

    If the user specifically requests a fantasy race,
    apply its appropriate physical characteristics,
    proportions, clothing, and cultural design.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    MIDDLE-EARTH ENVIRONMENTS:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    using the geography, architecture, and natural
    atmosphere of Middle-earth.

    Potential settings include peaceful rural villages,
    rolling green hills, ancient forests, mist-covered
    mountains, magnificent stone cities, secluded valleys,
    medieval settlements, and forgotten ruins.

    Draw inspiration from the distinctive environments
    of the Shire, Rivendell, Lothlórien, Rohan,
    Gondor, and the Misty Mountains.

    The Shire may inspire warm, inviting rural environments
    featuring grassy hills, winding paths, charming
    cottages, wooden fences, gardens, and soft sunlight.

    Elven environments may feature graceful architecture,
    elegant stonework, intricate carvings, flowing water,
    ancient trees, and harmonious integration with nature.

    Human kingdoms may feature monumental stone fortresses,
    medieval halls, towering walls, grand staircases,
    banners, and weathered historical architecture.

    Dwarven environments may feature enormous underground
    halls, monumental pillars, elaborate stone carvings,
    intricate metalwork, and impressive craftsmanship.

    However, do not automatically replace the user's
    requested location with an iconic Middle-earth setting.

    ARCHITECTURE AND CRAFTSMANSHIP:
    Emphasise the distinctive material culture and
    historical depth of Tolkien's world.

    Buildings, clothing, tools, furniture, and weapons
    should appear handcrafted using believable
    traditional materials.

    Incorporate detailed woodwork, carved stone,
    woven fabrics, aged metals, decorative patterns,
    and culturally distinctive ornamentation.

    Architecture should reflect the identity of
    its inhabitants rather than relying on
    generic medieval fantasy designs.

    Environments should feel inhabited, historically
    layered, and shaped by generations of craftsmanship.

    Avoid futuristic technology, modern industrial
    materials, and contemporary architecture unless
    explicitly requested by the user.

    FANTASY RACES AND CREATURES:
    Where explicitly requested or contextually appropriate,
    incorporate the distinctive peoples and creatures
    associated with Middle-earth.

    Elves may feature elegant facial characteristics,
    refined clothing, graceful movement, and
    sophisticated craftsmanship.

    Dwarves may feature sturdy proportions,
    elaborate facial hair, heavy traditional garments,
    and intricately crafted equipment.

    Hobbits may feature smaller proportions,
    rustic clothing, expressive faces,
    and a warm connection to rural life.

    Fantasy creatures may include great eagles,
    ancient tree-like beings, horses, trolls,
    or other mythological inhabitants of Middle-earth.

    Creatures should feature convincing anatomy,
    realistic textures, and believable integration
    into their surroundings.

    Do not introduce monsters, armies, or threatening
    creatures into peaceful scenes unless requested.

    MAGIC AND MYTHOLOGICAL ELEMENTS:
    Magic within The Lord of the Rings should feel
    ancient, mysterious, subtle, and deeply connected
    to the natural and spiritual world.

    Where appropriate, incorporate gentle supernatural
    illumination, ethereal atmospheres, enchanted
    objects, ancient symbols, or mysterious environmental
    effects.

    Avoid excessive glowing energy, brightly coloured
    magical explosions, and generic fantasy spell effects.

    The sense of magic should often emerge through
    atmosphere, architecture, natural beauty,
    and the presence of extraordinary beings.

    Not every scene requires visible magic.

    LIGHTING AND ATMOSPHERE:
    Use the rich, naturalistic cinematic lighting
    associated with The Lord of the Rings films.

    Rural environments may feature warm golden-hour
    sunlight, soft morning mist, gentle shadows,
    and inviting pastoral colours.

    Forest environments may feature sunlight filtering
    through ancient trees, atmospheric haze,
    rich vegetation, and subtle ethereal illumination.

    Mountain landscapes may feature dramatic cloud
    formations, cold natural light, distant mist,
    and impressive atmospheric depth.

    Interior scenes may feature warm fireplaces,
    candlelight, lanterns, and sunlight entering
    through handcrafted windows.

    Match the atmosphere to the user's intended mood,
    whether peaceful, adventurous, romantic,
    mysterious, humorous, or dramatic.

    Do not automatically make every scene dark,
    dangerous, or dominated by warfare.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the sweeping cinematic
    visual language of The Lord of the Rings trilogy.

    Draw inspiration from expansive landscape shots,
    carefully composed character portraits,
    dramatic natural environments, and
    visually striking architectural compositions.

    Use realistic proportions, convincing textures,
    atmospheric perspective, and carefully balanced
    foreground and background elements.

    Where appropriate, emphasise the scale of
    monumental landscapes, ancient structures,
    and vast natural environments.

    Character-focused scenes should retain
    recognisable facial features, natural expressions,
    and detailed costume design.

    Preserve the importance of the primary subject
    rather than allowing elaborate fantasy scenery
    to overwhelm the composition.

    MOOD AND STORYTELLING:
    The world of Middle-earth encompasses peaceful
    domestic life, friendship, adventure, ancient
    history, mythology, and epic conflict.

    Match the emotional tone to the user's
    original creative intentions.

    Peaceful scenes should emphasise warmth,
    natural beauty, and everyday life.

    Adventurous scenes may feature dramatic landscapes,
    travelling companions, and a sense of exploration.

    Epic scenes may incorporate monumental architecture,
    sweeping environments, and powerful cinematic scale.

    Do not automatically introduce swords, battles,
    armies, or threatening creatures simply because
    the theme belongs to an epic fantasy franchise.

    FINAL PRESENTATION:
    The finished image should resemble a beautifully
    produced cinematic scene, character portrait,
    or promotional still from Peter Jackson's
    The Lord of the Rings trilogy.

    Prioritise naturalistic fantasy realism,
    intricate historical craftsmanship,
    breathtaking landscapes, ancient architecture,
    atmospheric lighting, and immersive
    environmental storytelling.

    Avoid conventional cartoon aesthetics,
    generic video-game fantasy artwork,
    exaggerated character proportions,
    futuristic technology, and excessively
    artificial magical effects.

    Do not add The Lord of the Rings logos,
    titles, text, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    high-fantasy aesthetic of The Lord of the Rings.
  `,
  },
  {
    name: "MATRIX",
    prompt: `
    VISUAL THEME: THE MATRIX

    Transform the requested image or scene into the distinctive
    cinematic science-fiction aesthetic of The Matrix film
    franchise, drawing primary inspiration from the original
    1999 film and its subsequent sequels.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism,
    sophisticated lighting, believable materials, and the
    sleek, mysterious visual atmosphere associated with
    The Matrix.

    Establish the unsettling feeling of a seemingly ordinary
    world concealing a vast artificial digital reality.

    Combine familiar modern environments with subtle
    technological surrealism, minimalist futuristic design,
    and carefully controlled cinematic composition.

    Use a distinctive colour palette dominated by muted
    greens, deep blacks, charcoal greys, desaturated blues,
    cold whites, and subtle metallic highlights.

    Apply the recognisable green-tinted colour grading
    associated with scenes taking place inside the Matrix.

    Preserve realistic skin tones and important subject
    details while maintaining the overall cinematic palette.

    Avoid excessive neon colours, vibrant cyberpunk
    advertising, and generic futuristic science-fiction
    aesthetics that would undermine the distinctive
    visual identity of The Matrix.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, age, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the visual world of The Matrix where appropriate.

    Characters may wear tailored black suits, long leather
    coats, minimalist dark clothing, polished boots,
    understated formalwear, or sleek contemporary garments.

    Where appropriate, incorporate narrow reflective
    sunglasses, discreet technological accessories,
    and sophisticated monochromatic fashion.

    Clothing should feature realistic materials,
    convincing folds, subtle reflections, and
    carefully defined silhouettes.

    Do not automatically dress every character as Neo,
    Trinity, Morpheus, or an Agent.

    Preserve recognisable hairstyles, expressions,
    accessories, and other defining characteristics
    wherever possible.

    If no reference image is provided, create the subject
    entirely from the user's written description.

    SIMULATED REALITY AND ENVIRONMENTS:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    using the architectural and atmospheric language
    of The Matrix.

    Potential settings include rain-soaked city streets,
    deserted office buildings, underground railway
    stations, industrial rooftops, dimly lit corridors,
    abandoned warehouses, and imposing urban skyscrapers.

    Draw inspiration from the recognisable environments
    of the original Matrix films, including anonymous
    corporate interiors, stark white training spaces,
    mysterious urban alleyways, and vast mechanical
    structures existing outside the simulation.

    Architecture should feel believable, contemporary,
    imposing, and occasionally unsettling.

    Incorporate reflective glass, polished stone,
    weathered concrete, metallic surfaces,
    fluorescent lighting, and minimalist interiors.

    Environments should suggest an ordinary world
    hiding an extraordinary technological secret.

    However, do not automatically replace the user's
    requested location with a dark city street
    or futuristic industrial environment.

    DIGITAL REALITY AND VISUAL EFFECTS:
    Incorporate the distinctive digital visual
    language associated with The Matrix where
    appropriate to the user's requested scene.

    Potential effects include cascading green
    computer code, subtle digital distortions,
    simulated environmental glitches, and
    geometric patterns suggesting an artificial reality.

    Digital rain may appear on computer screens,
    reflected surfaces, or within the environment
    when contextually appropriate.

    If digital code is included, use narrow,
    vertically cascading luminous green symbols
    against dark backgrounds.

    These effects should feel naturally integrated
    into the cinematic environment rather than
    resembling decorative graphics placed over
    the finished image.

    Do not automatically cover every scene with
    green code or digital effects.

    The Matrix aesthetic should remain recognisable
    through its lighting, fashion, architecture,
    and cinematography even when no code is visible.

    BULLET TIME AND CINEMATIC ACTION:
    Where explicitly requested or contextually appropriate,
    incorporate the distinctive visual language of
    Matrix-style slow-motion cinematography.

    Action scenes may feature dramatic suspended motion,
    dynamic camera perspectives, flowing clothing,
    frozen environmental particles, and striking
    physical movement.

    Characters may appear captured at a precise
    moment within an extraordinary sequence of motion.

    Use realistic anatomy, convincing body positioning,
    and carefully controlled perspective.

    However, do not automatically introduce weapons,
    martial arts, gunfights, or dangerous situations
    into peaceful or everyday scenes.

    Bullet-time effects should only appear when
    appropriate to the user's intended action.

    TECHNOLOGY AND THE REAL WORLD:
    The Matrix franchise contrasts the simulated
    modern world with a devastated technological
    reality controlled by intelligent machines.

    Where appropriate, introduce mechanical structures,
    industrial machinery, exposed cables,
    sophisticated computer interfaces, and
    cold technological environments.

    Scenes outside the simulation may feature
    distressed industrial surfaces, worn equipment,
    harsh artificial lighting, and an atmosphere
    of technological oppression.

    However, do not automatically introduce robots,
    machines, or post-apocalyptic environments
    unless the user's prompt calls for them.

    LIGHTING AND ATMOSPHERE:
    Use dramatic, controlled cinematic lighting
    inspired by The Matrix films.

    Interior environments may feature fluorescent
    overhead lighting, green-tinted illumination,
    sharp directional highlights, and deep shadows.

    Exterior urban scenes may feature overcast skies,
    rain, wet reflective pavement, atmospheric mist,
    and subdued natural light.

    Use reflections across sunglasses, polished
    surfaces, glass windows, and dark clothing
    to enhance the sophisticated cinematic appearance.

    Emphasise contrast, symmetry, atmospheric depth,
    and the subtle visual tension of a world
    that may not be entirely real.

    Not every scene must be dark or threatening.
    Daylight and peaceful environments should retain
    the distinctive Matrix aesthetic through
    restrained colour grading, composition,
    clothing, and environmental design.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the precise cinematic
    visual language associated with The Matrix.

    Draw inspiration from symmetrical compositions,
    dramatic low-angle shots, carefully framed
    character portraits, reflective surfaces,
    and controlled camera perspectives.

    Use realistic proportions, convincing textures,
    sophisticated depth of field, and
    carefully balanced visual contrast.

    Character portraits should emphasise confident
    silhouettes, natural facial details,
    expressive body language, and
    carefully controlled lighting.

    Wider compositions may highlight imposing
    architecture, geometric environments,
    and the isolation of individuals within
    an apparently ordinary simulated world.

    Maintain the prominence of the user's
    requested subject rather than allowing
    technological effects to overwhelm the image.

    MOOD AND STORYTELLING:
    The Matrix combines philosophical mystery,
    technological paranoia, action, rebellion,
    and questions about the nature of reality.

    Match the emotional atmosphere to the
    user's original creative intentions.

    Peaceful scenes may retain a subtle sense
    of mystery and artificial perfection.

    Dramatic scenes may feature stronger shadows,
    atmospheric tension, and dynamic cinematography.

    Humorous or everyday scenes should preserve
    their original tone while adopting the
    distinctive visual presentation of The Matrix.

    Do not automatically introduce violence,
    danger, or threatening characters.

    FINAL PRESENTATION:
    The finished image should resemble a
    professionally produced cinematic scene,
    character portrait, or promotional still
    from The Matrix film franchise.

    Prioritise cinematic realism, restrained
    green colour grading, sophisticated
    monochromatic fashion, precise composition,
    believable urban environments, and subtle
    technological surrealism.

    Avoid conventional cartoon aesthetics,
    generic neon cyberpunk imagery,
    excessive science-fiction machinery,
    brightly coloured futuristic environments,
    and unnecessary digital overlays.

    Do not add The Matrix logos, titles,
    text, borders, or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    aesthetic of The Matrix universe.
  `,
  },
  {
    name: "GAME_OF_THRONES",
    prompt: `
    VISUAL THEME: GAME OF THRONES

    Transform the requested image or scene into the distinctive
    cinematic medieval-fantasy aesthetic of HBO's Game of Thrones
    and House of the Dragon television series.

    Draw inspiration from the richly detailed world of Westeros
    and Essos, including its ancient noble houses, imposing
    castles, historically inspired clothing, political intrigue,
    and grounded approach to fantasy.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic photorealism,
    believable human anatomy, realistic materials, sophisticated
    lighting, and the prestigious production quality associated
    with Game of Thrones.

    Establish the atmosphere of a complex medieval world shaped
    by powerful dynasties, ancient traditions, regional cultures,
    political ambition, and centuries of history.

    Combine historical realism with subtle elements of dark
    fantasy, ensuring that extraordinary features remain
    physically convincing and naturally integrated.

    Use a sophisticated colour palette featuring weathered
    stone greys, muted blues, deep burgundy, forest greens,
    aged gold, earthy browns, charcoal blacks, and rich
    natural fabric colours.

    Adapt the palette to the setting, from the cold northern
    landscapes of Winterfell to the warmer, more elaborate
    environments of King's Landing and the exotic cities
    across the Narrow Sea.

    Avoid overly saturated fantasy artwork, exaggerated
    magical effects, and generic medieval illustrations.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, age, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the world of Game of Thrones where appropriate.

    Characters may wear richly embroidered noble garments,
    tailored medieval dresses, fur-lined cloaks, elaborate
    leather outfits, traditional tunics, ceremonial robes,
    practical travelling clothing, or historically
    inspired armour.

    Clothing should feature realistic textiles, intricate
    stitching, handcrafted fastenings, layered fabrics,
    and culturally appropriate ornamentation.

    Noble characters may wear elaborate jewellery,
    decorative belts, distinctive hairstyles,
    and carefully crafted accessories.

    Common people may wear simpler woollen garments,
    linen shirts, leather boots, and practical
    clothing appropriate to their surroundings.

    Preserve the subject's recognisable hairstyle,
    facial hair, expression, and distinctive
    appearance wherever possible.

    Do not automatically transform every character
    into a king, queen, knight, warrior, or
    member of a particular noble house.

    Do not automatically add crowns, swords,
    armour, or royal insignia unless appropriate
    to the user's requested subject.

    If no reference image is provided, construct
    the subject entirely from the user's
    written description.

    WESTEROSI ENVIRONMENTS:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    using the architecture, geography, and
    atmosphere of Westeros and Essos.

    Potential settings include monumental medieval
    castles, ancient stone fortresses, royal courts,
    fortified cities, northern villages, windswept
    coastlines, mist-covered forests, grand banquet
    halls, and sprawling medieval marketplaces.

    Draw inspiration from the distinctive environments
    of Winterfell, King's Landing, Dragonstone,
    the Eyrie, Highgarden, and the cities of Essos.

    Northern environments may feature weathered
    stone architecture, timber structures,
    fur-lined clothing, cold atmospheric lighting,
    snow-covered landscapes, and rugged terrain.

    Southern environments may feature elaborate
    medieval architecture, warm natural lighting,
    decorative stonework, ornate courtyards,
    and sophisticated royal interiors.

    Coastal and island environments may feature
    imposing fortresses, dramatic cliffs,
    turbulent seas, and ancient stone structures.

    However, do not automatically replace the user's
    requested environment with a castle, throne room,
    or battlefield.

    ARCHITECTURE AND HISTORICAL DETAIL:
    Emphasise the convincing historical craftsmanship
    and regional architectural diversity of
    the Game of Thrones universe.

    Buildings may feature massive stone walls,
    Gothic arches, carved wooden beams,
    fortified towers, iron gates, elaborate
    fireplaces, and medieval furnishings.

    Interiors may feature tapestries, banners,
    ornate candleholders, carved furniture,
    decorative shields, and historically
    inspired household objects.

    Materials should appear physically convincing,
    featuring natural weathering, realistic wear,
    and detailed surface textures.

    Environments should feel inhabited, historically
    layered, and appropriate to their social
    and geographical context.

    NOBLE HOUSES AND DYNASTIC SYMBOLISM:
    Where explicitly requested or contextually
    appropriate, incorporate the distinctive
    visual identity of the noble houses
    associated with Game of Thrones.

    House Stark-inspired environments may feature
    northern stone architecture, muted colours,
    fur garments, and wolf symbolism.

    House Lannister-inspired environments may feature
    rich crimson fabrics, elaborate gold detailing,
    sophisticated courtly clothing, and lion symbolism.

    House Targaryen-inspired environments may feature
    dark ceremonial clothing, dragon motifs,
    dramatic architecture, and distinctive
    dynastic ornamentation.

    Other houses may feature culturally appropriate
    colours, banners, heraldic symbols, and
    architectural details.

    Do not automatically assign the user's subject
    to a particular house or add unrelated
    heraldic symbols.

    FANTASY CREATURES AND DRAGONS:
    The Game of Thrones universe contains
    extraordinary creatures and supernatural elements.

    Where explicitly requested or contextually
    appropriate, incorporate dragons, direwolves,
    and other creatures associated with
    the world of Westeros.

    Dragons should appear as enormous,
    anatomically convincing living creatures
    with detailed scales, muscular bodies,
    powerful wings, and realistic interactions
    with their environments.

    Direwolves and other animals should feature
    believable anatomy, realistic fur,
    and naturalistic movement.

    Creature designs should reflect the grounded
    cinematic realism of the television series.

    Do not automatically introduce dragons,
    monsters, or supernatural creatures
    into otherwise ordinary scenes.

    MAGIC AND SUPERNATURAL ELEMENTS:
    Magic within Game of Thrones should feel
    ancient, mysterious, unsettling, and rare.

    Where appropriate, incorporate subtle
    supernatural atmospheres, mysterious
    illumination, ancient rituals, or
    restrained fantasy effects.

    Avoid excessive glowing energy,
    colourful spellcasting, or generic
    high-fantasy magical explosions.

    The presence of magic should enhance
    the atmosphere without overwhelming
    the user's requested composition.

    Not every scene requires visible magic.

    LIGHTING AND ATMOSPHERE:
    Use cinematic lighting inspired by
    Game of Thrones and House of the Dragon.

    Interior environments may feature
    warm candlelight, roaring fireplaces,
    soft daylight entering through
    narrow windows, and deep natural shadows.

    Northern environments may feature
    overcast skies, cold blue-grey light,
    drifting snow, atmospheric mist,
    and subdued winter colours.

    Southern environments may feature
    warm sunlight, rich golden highlights,
    dramatic architectural shadows,
    and atmospheric Mediterranean-inspired
    landscapes.

    Royal interiors may feature carefully
    controlled pools of light, rich fabric
    textures, and sophisticated contrast.

    Maintain realistic lighting and
    convincing atmospheric depth.

    Do not automatically make every scene
    excessively dark, gloomy, or threatening.

    Peaceful scenes should retain their
    warmth, humour, and natural beauty
    while remaining visually consistent
    with the Game of Thrones universe.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the cinematic
    visual language of Game of Thrones.

    Draw inspiration from carefully composed
    character portraits, imposing architectural
    environments, dramatic natural landscapes,
    and richly detailed medieval interiors.

    Use realistic human proportions,
    convincing materials, atmospheric perspective,
    and sophisticated depth of field.

    Character portraits should emphasise
    natural expressions, recognisable facial
    features, detailed costumes, and
    believable environmental context.

    Wider compositions may emphasise the
    scale of monumental castles, fortified
    settlements, and dramatic landscapes.

    Use cinematic framing and carefully
    balanced lighting to create a sense
    of historical grandeur and realism.

    Preserve the prominence of the user's
    primary subject rather than allowing
    elaborate scenery to dominate the image.

    MOOD AND STORYTELLING:
    Game of Thrones encompasses political intrigue,
    family loyalty, romance, ambition, everyday life,
    adventure, and epic fantasy.

    Match the emotional atmosphere to
    the user's original creative intentions.

    Peaceful scenes may feature intimate
    medieval interiors, warm social gatherings,
    or beautiful natural landscapes.

    Regal scenes may emphasise elaborate
    clothing, impressive architecture,
    and dignified cinematic presentation.

    Dramatic scenes may feature atmospheric
    tension, powerful expressions,
    and striking visual compositions.

    Do not automatically introduce violence,
    warfare, executions, threatening characters,
    or disturbing imagery.

    The theme should be recognisable through
    its costumes, environments, cinematography,
    and historical detail without requiring
    conflict or danger.

    FINAL PRESENTATION:
    The finished image should resemble a
    professionally produced cinematic scene,
    character portrait, or promotional still
    from HBO's Game of Thrones universe.

    Prioritise grounded medieval realism,
    elaborate historical costume design,
    monumental architecture, naturalistic
    lighting, regional cultural identity,
    and sophisticated cinematic storytelling.

    Avoid conventional cartoon aesthetics,
    generic video-game fantasy illustrations,
    excessively colourful magical effects,
    modern technology, futuristic environments,
    and exaggerated character proportions.

    Do not add Game of Thrones logos,
    titles, text, borders, house crests,
    or promotional typography unless
    explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive cinematic
    medieval-fantasy aesthetic of Game of Thrones.
  `,
  },
  {
    name: "PEAKY_BLINDERS",
    prompt: `
    VISUAL THEME: PEAKY BLINDERS

    Transform the requested image or scene into the distinctive
    cinematic historical-drama aesthetic of the BBC television
    series Peaky Blinders.

    Draw primary inspiration from the series' portrayal of
    post-First World War Birmingham, its sharply dressed
    characters, industrial British environments, and
    atmospheric early-20th-century cinematography.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic photorealism,
    believable human anatomy, realistic materials, detailed
    historical environments, and sophisticated period-drama
    production quality.

    Establish the visual atmosphere of Britain during the
    late 1910s and 1920s, with particular emphasis on
    industrial Birmingham and its surrounding communities.

    Combine historically inspired clothing, weathered
    architecture, industrial landscapes, and dramatic
    character-focused cinematography.

    Use a restrained colour palette featuring charcoal grey,
    muted brown, dark navy, weathered black, sepia undertones,
    dusty beige, faded olive, and subtle amber highlights.

    Apply sophisticated desaturated colour grading with
    strong contrast, atmospheric shadows, and occasional
    warm highlights from natural or practical lighting.

    Avoid generic vintage photography effects that
    lack the distinctive cinematic presentation
    of Peaky Blinders.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, age, and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the Peaky Blinders universe where appropriate.

    Characters may wear sharply tailored three-piece suits,
    high-waisted trousers, waistcoats, long wool overcoats,
    traditional shirts, detachable collars, leather boots,
    and period-appropriate accessories.

    Flat caps, pocket watches, leather gloves, ties,
    braces, and polished dress shoes may be included
    when appropriate to the subject.

    Women's fashion may include elegant 1920s dresses,
    tailored coats, period blouses, cloche hats,
    embroidered garments, elaborate jewellery,
    and historically inspired hairstyles.

    Clothing should feature realistic wool, tweed,
    cotton, silk, leather, and other believable
    period-appropriate materials.

    Preserve the subject's recognisable hairstyle,
    facial hair, expression, and distinctive
    appearance wherever possible.

    Do not automatically transform every male
    subject into Tommy Shelby or every female
    subject into an established character.

    Do not automatically give every subject
    a flat cap, cigarette, or three-piece suit.

    Adapt clothing to the subject's personality,
    requested activity, and social context.

    If no reference image is provided, construct
    the subject entirely from the user's
    written description.

    HISTORICAL SETTING AND ENVIRONMENTS:
    Preserve the user's requested subject, actions,
    composition, and important environmental details.

    Where appropriate, reinterpret the environment
    as part of early-20th-century industrial Britain.

    Potential settings include cobbled Birmingham
    streets, industrial factories, brick warehouses,
    canal-side buildings, traditional public houses,
    bookmakers' offices, railway stations,
    working-class neighbourhoods, and
    elegant period residences.

    Draw inspiration from the distinctive
    environments associated with Small Heath,
    Birmingham's industrial districts,
    and the contrasting wealthier settings
    featured throughout the series.

    Buildings may feature weathered red brick,
    soot-stained stone, iron railings,
    factory chimneys, timber shopfronts,
    and traditional British architecture.

    Streets may feature vintage motorcars,
    horse-drawn vehicles, old-fashioned
    street lamps, period signage,
    and industrial infrastructure.

    Environments should feel historically
    inhabited, physically convincing,
    and rich in atmospheric detail.

    However, do not automatically replace
    the user's requested location with
    a dark Birmingham alleyway or factory.

    INDUSTRIAL BRITISH ATMOSPHERE:
    Capture the distinctive visual identity
    of post-war industrial Birmingham.

    Where appropriate, incorporate factory
    smokestacks, railway infrastructure,
    canals, warehouses, iron bridges,
    cobbled roads, and weathered brickwork.

    Use atmospheric mist, industrial haze,
    damp pavement, and subdued natural light
    to establish a believable period setting.

    Industrial details should enhance
    the scene naturally rather than
    overwhelm the primary subject.

    Not every scene must feature smoke,
    factories, or industrial machinery.

    Wealthier or domestic environments
    may instead feature elegant drawing rooms,
    traditional country houses, ornate
    furnishings, and refined period interiors.

    HISTORICAL COSTUME AND CULTURAL DETAIL:
    Emphasise the authentic tailoring,
    grooming, and social presentation
    associated with the Peaky Blinders era.

    Men's fashion may feature close-fitting
    waistcoats, structured jackets,
    traditional overcoats, polished boots,
    and carefully styled period haircuts.

    Women's fashion may feature elegant
    dresses, tailored silhouettes,
    decorative hats, period jewellery,
    and historically inspired makeup.

    Incorporate believable period accessories
    such as pocket watches, leather briefcases,
    fountain pens, vintage telephones,
    newspapers, and traditional furniture.

    Avoid contemporary fashion, modern
    electronic devices, futuristic technology,
    and historically inconsistent objects
    unless explicitly requested by the user.

    Where the user's prompt requires a
    modern object or activity, preserve
    that intention while applying the
    closest appropriate period styling
    wherever possible.

    LIGHTING AND ATMOSPHERE:
    Use dramatic cinematic lighting inspired
    by the Peaky Blinders television series.

    Exterior scenes may feature overcast
    British skies, atmospheric fog,
    wet cobbled streets, subdued daylight,
    and strong architectural shadows.

    Interior scenes may feature warm
    tungsten-style lighting, fireplaces,
    traditional lamps, soft window light,
    and dramatic pools of illumination.

    Use subtle volumetric lighting,
    atmospheric haze, realistic reflections,
    and carefully controlled contrast.

    Character portraits may feature
    strong side lighting, dramatic
    silhouettes, and richly textured
    dark clothing.

    Preserve realistic facial detail
    and avoid excessively dark lighting
    that obscures the subject's identity.

    Peaceful or cheerful scenes should
    retain their original emotional tone
    while adopting the sophisticated
    period cinematography of the series.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the striking
    visual language of Peaky Blinders.

    Draw inspiration from dramatic
    character portraits, symmetrical
    group compositions, low-angle shots,
    atmospheric street scenes, and
    carefully framed period interiors.

    Use realistic human proportions,
    sophisticated depth of field,
    convincing textures, and
    carefully controlled lighting.

    Character-focused scenes should
    emphasise recognisable facial features,
    confident body language, detailed
    tailoring, and atmospheric surroundings.

    Wider compositions may feature
    imposing industrial architecture,
    period streets, or richly decorated
    early-20th-century interiors.

    Maintain the importance of the
    user's primary subject rather than
    allowing historical scenery
    to dominate the composition.

    MOOD AND STORYTELLING:
    Peaky Blinders combines historical drama,
    family relationships, ambition,
    working-class life, social change,
    political tension, and organised crime.

    Match the emotional atmosphere
    to the user's original creative intentions.

    Formal portraits may emphasise elegance,
    confidence, restraint, and cinematic presence.

    Everyday scenes may feature authentic
    domestic environments, traditional
    workplaces, or period social settings.

    Dramatic scenes may incorporate
    atmospheric tension, powerful expressions,
    and striking visual contrast.

    Do not automatically introduce
    weapons, violence, gang activity,
    smoking, alcohol, or threatening
    characters into otherwise peaceful scenes.

    The Peaky Blinders aesthetic should
    remain recognisable through its
    tailoring, architecture, lighting,
    and historical atmosphere without
    requiring criminal imagery.

    FINAL PRESENTATION:
    The finished image should resemble
    a professionally produced cinematic
    scene, character portrait, or
    promotional still from Peaky Blinders.

    Prioritise authentic 1920s British
    period styling, sophisticated tailoring,
    industrial Birmingham architecture,
    atmospheric cinematography, realistic
    materials, and restrained colour grading.

    Avoid conventional cartoon aesthetics,
    generic sepia photography filters,
    exaggerated vintage effects,
    modern fashion, futuristic environments,
    and historically inconsistent details.

    Do not add Peaky Blinders logos,
    titles, text, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT appears
    in the image. These theme instructions determine
    HOW the subject and environment should be presented.

    Preserve the user's creative intentions while
    consistently applying the distinctive
    cinematic historical-drama aesthetic
    of Peaky Blinders.
  `,
  },
];

const getThemePrompt = (theme) => {
  const themePrompt = themePrompts.find((tp) => tp.name === theme);

  return themePrompt?.prompt || "";
};

module.exports = getThemePrompt;
