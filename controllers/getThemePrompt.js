const themePrompts = [
  { name: "NONE", prompt: "" },
  {
    name: "GTA",
    prompt: `VISUAL THEME: GRAND THEFT AUTO PROMOTIONAL ARTWORK

    Transform the requested image or scene into the distinctive illustrated aesthetic of Grand Theft Auto V and Grand Theft Auto VI promotional artwork, loading screens, and character illustrations.

    ARTISTIC STYLE:
    Use highly polished, semi-realistic digital illustration with bold, confident outlines, smooth colour gradients, carefully defined shadows, and detailed textures. Characters and objects should have realistic proportions but a distinctly illustrated appearance rather than photographic realism.

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

    Transform the requested image or scene into the distinctive cinematic historical-drama aesthetic of the BBC television series Peaky Blinders.

    Draw primary inspiration from the series' portrayal of post-First World War Birmingham, its sharply dressed characters, industrial British environments, and atmospheric early-20th-century cinematography.

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
  {
    name: "GHIBLI",
    prompt: `
    VISUAL THEME: STUDIO GHIBLI

    Transform the requested image or scene into a beautiful
    hand-drawn Japanese animated illustration inspired by
    the distinctive visual aesthetic of Studio Ghibli films.

    Draw inspiration from the artistic atmosphere of
    Spirited Away, My Neighbour Totoro, Howl's Moving Castle,
    Kiki's Delivery Service, Princess Mononoke,
    and other classic Studio Ghibli productions.

    ARTISTIC STYLE:
    Render the entire scene as a polished, traditionally
    animated Japanese film illustration.

    Use delicate hand-drawn outlines, expressive character
    designs, soft cel shading, and richly painted backgrounds.

    Emphasise the warmth, craftsmanship, and visual poetry
    associated with traditional two-dimensional animation.

    The image should resemble an authentic frame from
    a beautifully produced hand-drawn animated feature film.

    Avoid photorealistic rendering, three-dimensional
    computer animation, glossy plastic textures,
    and overly sharp digital illustration.

    Use a harmonious colour palette featuring soft
    pastel tones, natural greens, warm yellows,
    gentle blues, earthy browns, and subtle
    atmospheric highlights.

    Colours should feel vibrant yet organic,
    with the softness and subtle variation
    of traditional painted animation backgrounds.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the
    original subject's recognisable identity,
    hairstyle, facial structure, expression,
    age, and defining characteristics.

    Translate the subject into a charming,
    expressive hand-drawn animated character.

    Simplify facial features using the visual
    language of traditional Japanese animation
    while retaining recognisable characteristics.

    Eyes should be expressive and naturally
    proportioned, with gentle highlights
    and carefully drawn facial details.

    Preserve distinctive hairstyles, facial hair,
    clothing colours, accessories, and
    other important identifying features.

    Adapt realistic facial proportions into
    a cohesive animated character design
    without making the subject unrecognisable.

    Avoid exaggerated anime eyes, extreme
    facial proportions, and overly stylised
    character designs associated with
    unrelated anime genres.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    CHARACTER DESIGN AND CLOTHING:
    Characters should feature soft,
    expressive faces, natural body proportions,
    and carefully considered silhouettes.

    Clothing should be illustrated with
    delicate folds, simple shading,
    and believable fabric movement.

    Outfits may feature charming everyday
    garments, traditional clothing,
    rustic countryside fashion,
    or imaginative fantasy costumes
    where appropriate.

    Preserve the user's requested clothing,
    personality, pose, and overall appearance.

    Do not automatically transform every
    character into a child, magical creature,
    or established Studio Ghibli character.

    Characters should appear original
    while belonging naturally within
    the illustrated world.

    ENVIRONMENTS AND BACKGROUNDS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the environment using
    richly painted, hand-crafted backgrounds
    inspired by Studio Ghibli animation.

    Potential settings include peaceful
    countryside villages, rolling green hills,
    enchanting forests, traditional Japanese
    streets, cosy cottages, bustling towns,
    tranquil gardens, and imaginative
    fantasy landscapes.

    Backgrounds should feature delicate
    brushwork, layered colour, subtle
    texture, and atmospheric depth.

    Natural environments may include
    lush vegetation, detailed trees,
    gently moving grass, wildflowers,
    winding paths, and softly painted skies.

    Urban environments may feature
    charming architecture, colourful
    shopfronts, traditional rooftops,
    overhead wires, bicycles, and
    carefully illustrated everyday objects.

    However, do not automatically replace
    the user's requested setting with
    a Japanese village or magical forest.

    The original environment should remain
    recognisable while adopting the
    distinctive painted animation aesthetic.

    NATURE AND ENVIRONMENTAL DETAIL:
    Emphasise the beauty of ordinary
    natural environments and the subtle
    visual storytelling found in
    Studio Ghibli films.

    Where appropriate, incorporate
    detailed foliage, soft clouds,
    sunlight filtering through leaves,
    gentle breezes, flowing water,
    and atmospheric seasonal details.

    Small environmental elements should
    feel lovingly observed and
    carefully illustrated.

    Ordinary objects may become visually
    charming through thoughtful
    composition and delicate rendering.

    Avoid overwhelming the scene with
    unnecessary decorative elements.

    MAGIC AND WHIMSICAL ELEMENTS:
    Studio Ghibli films frequently combine
    everyday life with gentle fantasy,
    mysterious creatures, and
    imaginative magical environments.

    Where explicitly requested or
    contextually appropriate, incorporate
    whimsical magical details.

    These may include floating objects,
    gentle glowing lights, mysterious
    forest spirits, imaginative creatures,
    or subtly enchanted surroundings.

    Magical elements should feel
    naturally integrated into the
    illustrated world.

    Avoid excessive glowing effects,
    dramatic magical explosions,
    and generic fantasy imagery.

    Not every scene requires magic.

    Everyday domestic scenes, peaceful
    landscapes, and ordinary activities
    should remain charming and visually
    engaging without supernatural additions.

    LIGHTING AND ATMOSPHERE:
    Use soft, painterly lighting
    characteristic of traditional
    hand-drawn Japanese animation.

    Daylight scenes may feature warm
    sunshine, gentle shadows,
    delicate highlights, and
    beautifully painted skies.

    Interior scenes may feature
    warm window light, cosy lamps,
    soft reflections, and
    inviting atmospheric colours.

    Evening scenes may feature
    golden sunsets, pastel skies,
    glowing windows, and
    subtle atmospheric gradients.

    Rainy scenes may feature
    softly painted reflections,
    gentle mist, expressive clouds,
    and a peaceful contemplative mood.

    Lighting should enhance the
    emotional atmosphere while
    retaining the soft illustrated
    appearance of the image.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene as a carefully
    composed frame from a traditional
    animated feature film.

    Use expressive character placement,
    harmonious colour relationships,
    balanced foreground and background
    elements, and atmospheric perspective.

    Character portraits should emphasise
    recognisable facial features,
    natural expressions, and
    delicate hand-drawn details.

    Wider scenes may emphasise
    beautiful landscapes, charming
    architecture, and carefully
    observed environmental details.

    Preserve the prominence of the
    user's requested subject rather
    than allowing elaborate scenery
    to overwhelm the composition.

    Avoid extreme perspective distortion,
    overly dramatic action poses,
    and exaggerated visual effects
    unless explicitly requested.

    EMOTIONAL TONE AND STORYTELLING:
    Studio Ghibli animation often celebrates
    everyday life, friendship, nature,
    imagination, adventure, and
    quiet emotional moments.

    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes should feel warm,
    gentle, and contemplative.

    Adventurous scenes may feature
    imaginative environments,
    expressive movement, and
    a sense of wonder.

    Humorous scenes should retain
    their playful charm.

    Dramatic scenes may incorporate
    stronger atmospheric contrast
    while preserving the delicate
    hand-drawn animation style.

    Do not automatically make every
    scene cheerful, magical, or childish.

    Preserve the original emotional
    tone of the user's request.

    TRADITIONAL ANIMATION FINISH:
    The finished image should feature
    cohesive two-dimensional artwork.

    Characters and environments should
    appear to belong to the same
    traditionally animated production.

    Use clean but organic linework,
    soft cel shading, painted textures,
    and subtle colour variation.

    Backgrounds may feature delicate
    watercolour-like brushwork,
    while characters retain the
    clarity and expressiveness
    of hand-drawn animation.

    Avoid realistic photographic textures,
    glossy CGI rendering,
    hyper-detailed digital painting,
    and inconsistent combinations
    of photographic and illustrated elements.

    FINAL PRESENTATION:
    The finished image should resemble
    a beautifully composed frame from
    a classic Studio Ghibli animated film.

    Prioritise expressive character design,
    traditional hand-drawn animation,
    painterly backgrounds, rich natural
    environments, gentle atmospheric lighting,
    and emotionally engaging visual storytelling.

    Avoid generic modern anime aesthetics,
    exaggerated manga proportions,
    three-dimensional computer animation,
    photorealism, and excessively
    artificial digital effects.

    Do not add Studio Ghibli logos,
    titles, text, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT
    appears in the image. These theme instructions
    determine HOW the subject and environment
    should be illustrated.

    Preserve the user's creative intentions
    while consistently applying the distinctive
    hand-drawn animated aesthetic associated
    with Studio Ghibli.
  `,
  },
  {
    name: "PIXAR",
    prompt: `
    VISUAL THEME: PIXAR ANIMATION

    Transform the requested image or scene into the distinctive
    three-dimensional animated feature-film aesthetic associated
    with Pixar Animation Studios.

    Draw inspiration from the visual craftsmanship, expressive
    character animation, sophisticated lighting, and imaginative
    worldbuilding found in films such as Toy Story, The Incredibles,
    Up, Inside Out, Ratatouille, Coco, and Finding Nemo.

    ARTISTIC STYLE:
    Render the entire scene as a beautifully polished,
    high-quality three-dimensional animated film frame.

    Use stylised but believable character designs,
    sophisticated computer-generated materials,
    expressive facial animation, and richly detailed
    three-dimensional environments.

    Establish the visual quality of a professionally
    produced animated feature film, combining
    appealing character design with exceptional
    technical rendering.

    Use vibrant, harmonious colours, soft atmospheric
    lighting, carefully controlled reflections,
    and convincing material textures.

    Characters should feel warm, expressive,
    and visually appealing without becoming
    excessively cartoonish or childish.

    Avoid photorealistic human rendering,
    flat two-dimensional illustration,
    traditional hand-drawn anime aesthetics,
    and generic low-quality cartoon graphics.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the
    original subject's recognisable identity,
    hairstyle, facial structure, expression,
    age, and defining characteristics.

    Translate the subject into a sophisticated
    three-dimensional animated character.

    Adapt realistic human features into appealing
    stylised proportions while maintaining
    recognisable facial characteristics.

    Eyes may be slightly enlarged and more expressive,
    with realistic reflections, carefully modelled
    eyelids, and natural emotional expression.

    Facial shapes may be gently simplified
    and stylised, but should retain the
    subject's distinctive appearance.

    Preserve recognisable hairstyles,
    facial hair, clothing colours,
    accessories, and defining details.

    Hair should feature carefully sculpted
    three-dimensional strands or stylised
    animated hair geometry appropriate
    to the character design.

    Skin should feature soft, believable
    subsurface scattering and gentle
    material variation.

    Avoid exaggerated facial distortion,
    oversized eyes, extreme proportions,
    or generic character designs that
    make the original subject unrecognisable.

    Do not automatically make adult subjects
    appear younger or transform them into children.

    If no reference image is provided,
    construct the subject entirely from
    the user's written description.

    CHARACTER DESIGN AND PROPORTIONS:
    Use the sophisticated character design
    principles associated with Pixar films.

    Characters should feature appealing
    silhouettes, expressive body language,
    clear facial expressions, and
    carefully considered proportions.

    Stylisation should enhance personality
    rather than replace individual identity.

    Human characters may feature gently
    exaggerated facial proportions,
    expressive eyebrows, rounded features,
    and carefully sculpted anatomy.

    Animals should feature expressive
    character designs while retaining
    recognisable species characteristics.

    Objects may be anthropomorphised only
    when explicitly requested or clearly
    appropriate to the user's prompt.

    Do not automatically give ordinary
    objects faces, eyes, or human personalities.

    Preserve the user's requested subject,
    pose, clothing, and intended activity.

    THREE-DIMENSIONAL MATERIALS AND TEXTURES:
    Emphasise the sophisticated material
    rendering associated with modern
    animated feature films.

    Fabrics should feature believable
    woven textures, natural folds,
    and carefully simulated movement.

    Hair and fur should feature
    convincing volume, soft highlights,
    and detailed stylised strands.

    Metallic objects should feature
    controlled reflections and
    realistic surface properties.

    Wood, stone, glass, plastic,
    and other materials should
    remain visually recognisable
    while adopting a polished
    animated-film appearance.

    Skin should feel soft and
    dimensional rather than
    glossy, plastic, or wax-like.

    Avoid excessive surface shine,
    artificial plastic textures,
    and overly simplified materials.

    ENVIRONMENTS AND WORLDBUILDING:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the entire environment
    as a richly detailed three-dimensional
    animated film setting.

    Potential environments include
    charming suburban neighbourhoods,
    colourful city streets,
    beautifully designed interiors,
    imaginative fantasy locations,
    natural landscapes, and
    extraordinary fictional worlds.

    Backgrounds should feature
    carefully modelled architecture,
    convincing environmental materials,
    sophisticated lighting, and
    harmonious colour design.

    Ordinary environments should feel
    inviting, expressive, and
    rich in visual storytelling.

    Imaginative environments may feature
    heightened colour, stylised shapes,
    and playful architectural details
    where appropriate.

    However, do not automatically replace
    the user's requested location with
    a fantasy world or a recognisable
    setting from an existing Pixar film.

    The original environment should
    remain identifiable while adopting
    the cohesive three-dimensional
    animated aesthetic.

    LIGHTING AND ATMOSPHERE:
    Use sophisticated cinematic lighting
    associated with high-quality
    computer-animated feature films.

    Daylight scenes may feature
    soft global illumination,
    warm sunlight, gentle shadows,
    and subtle atmospheric depth.

    Interior scenes may feature
    carefully balanced practical lighting,
    warm reflections, soft indirect light,
    and believable environmental illumination.

    Evening scenes may feature
    rich sunset colours, beautiful
    atmospheric gradients, and
    expressive cinematic contrast.

    Use realistic light interaction
    with materials, including
    subtle reflections, soft shadows,
    and gentle subsurface scattering.

    Lighting should enhance the
    subject's emotional expression
    and visual appeal.

    Avoid harsh, artificial lighting
    that makes characters appear
    like inexpensive plastic toys.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene as a carefully
    composed frame from a professionally
    produced three-dimensional
    animated feature film.

    Use cinematic camera placement,
    expressive character staging,
    sophisticated depth of field,
    and carefully balanced compositions.

    Character portraits should emphasise
    recognisable facial features,
    expressive eyes, appealing silhouettes,
    and beautifully rendered materials.

    Wider scenes may emphasise
    imaginative environments,
    atmospheric depth, and
    carefully designed visual storytelling.

    Maintain the prominence of the
    user's requested subject rather
    than allowing elaborate backgrounds
    to dominate the composition.

    Use convincing three-dimensional
    perspective and consistent
    lighting throughout the image.

    EMOTION AND STORYTELLING:
    Pixar animation is characterised
    by expressive storytelling,
    emotional authenticity,
    imaginative concepts, and
    visually engaging characters.

    Match the emotional atmosphere
    to the user's original intentions.

    Cheerful scenes may feature
    vibrant colours, warm lighting,
    and playful expressions.

    Emotional scenes may feature
    subtle facial expressions,
    gentle lighting, and
    carefully controlled composition.

    Adventurous scenes may feature
    dynamic camera perspectives,
    imaginative environments,
    and energetic character movement.

    Dramatic scenes may incorporate
    sophisticated contrast and
    atmospheric lighting while
    retaining the polished
    animated-film aesthetic.

    Do not automatically make
    every scene humorous, childish,
    or excessively cheerful.

    Preserve the original emotional
    tone of the user's request.

    ANIMATION CONSISTENCY:
    The entire image should appear
    to belong to one cohesive
    three-dimensional animated production.

    Characters, environments, objects,
    lighting, and materials must share
    the same visual rendering language.

    Avoid placing stylised animated
    characters into photographic
    or otherwise realistic backgrounds.

    Avoid mixing flat hand-drawn
    illustration with three-dimensional
    computer-generated elements.

    Maintain consistent proportions,
    lighting, material properties,
    and environmental detail
    throughout the composition.

    FINAL PRESENTATION:
    The finished image should resemble
    a beautifully rendered frame
    from a premium Pixar-style
    three-dimensional animated film.

    Prioritise expressive character design,
    sophisticated CGI rendering,
    vibrant harmonious colours,
    believable stylised materials,
    cinematic lighting, and
    emotionally engaging storytelling.

    Avoid generic cartoon graphics,
    low-poly models, flat anime artwork,
    exaggerated caricatures,
    photorealistic human rendering,
    and cheap plastic-looking textures.

    Do not add Pixar logos,
    film titles, text, borders,
    or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT
    appears in the image. These theme instructions
    determine HOW the subject and environment
    should be rendered.

    Preserve the user's creative intentions
    while consistently applying the distinctive
    three-dimensional animated feature-film
    aesthetic associated with Pixar.
  `,
  },
  {
    name: "SIMPSONS",
    prompt: `
    VISUAL THEME: THE SIMPSONS

    Transform the requested image or scene into the distinctive
    two-dimensional cartoon animation aesthetic of the
    television series The Simpsons.

    Draw inspiration from the established character designs,
    bold outlines, flat colours, expressive animation,
    and recognisable suburban environments of Springfield.

    ARTISTIC STYLE:
    Render the entire scene as a polished, authentic-looking
    frame from The Simpsons television series.

    Use clean, bold black outlines, simplified geometric
    character shapes, flat cel colours, and minimal shading.

    Characters and environments should feature the
    unmistakable visual language of traditional
    Simpsons-style television animation.

    Use a bright, cheerful colour palette featuring
    vibrant yellows, clear blues, warm oranges,
    rich greens, pinks, purples, and other
    saturated cartoon colours.

    Keep colours predominantly flat and consistent,
    with simple shadow shapes only where appropriate.

    Avoid photorealism, three-dimensional rendering,
    painterly textures, complex gradients,
    and highly detailed realistic surfaces.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the
    original subject's recognisable identity,
    hairstyle, facial hair, expression,
    approximate age, clothing, and defining features.

    Translate the subject into an original character
    that looks as though they naturally belong
    in The Simpsons universe.

    For human characters, use the characteristic
    bright yellow cartoon skin colour associated
    with the show's principal character designs,
    unless the user's request calls for a different
    established character treatment.

    Simplify facial anatomy into the distinctive
    Simpsons animation style.

    Eyes should be large, rounded, and predominantly
    white, with small black pupils and expressive
    positioning.

    Noses should feature simple curved outlines,
    while mouths and facial expressions should
    use clean, economical cartoon linework.

    Preserve distinctive facial hair, glasses,
    hairstyles, accessories, and other
    recognisable characteristics.

    Hairstyles should be translated into
    simplified cartoon shapes while retaining
    their recognisable silhouette, colour,
    volume, and overall arrangement.

    Preserve the subject's approximate body shape
    and distinguishing proportions while adapting
    them to the show's simplified anatomy.

    Do not automatically transform the subject
    into Homer, Marge, Bart, Lisa, or any
    other established Simpsons character.

    The subject should remain recognisably
    themselves, simply reimagined as a
    Springfield-style cartoon character.

    If no reference image is provided,
    construct the subject entirely from
    the user's written description.

    CHARACTER DESIGN AND ANATOMY:
    Use the distinctive simplified anatomy
    associated with The Simpsons.

    Human characters should feature rounded
    facial shapes, prominent cartoon eyes,
    simplified hands, and clean silhouettes.

    Hands should generally feature four digits,
    consistent with the show's traditional
    cartoon character design.

    Facial expressions should be clear,
    exaggerated where appropriate,
    and immediately readable.

    Body proportions may be gently caricatured
    while retaining the subject's identity
    and requested physical characteristics.

    Clothing should feature simplified shapes,
    bold colour blocks, minimal fabric detail,
    and clean cartoon outlines.

    Preserve the user's requested clothing,
    pose, activity, and personality.

    Do not automatically dress characters
    in the outfits of existing Simpsons
    family members.

    SPRINGFIELD ENVIRONMENTS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the environment using
    the distinctive cartoon architecture
    and visual design of Springfield.

    Potential settings include colourful
    suburban streets, family living rooms,
    traditional American diners, schools,
    workplaces, shops, parks, and
    recognisable small-town environments.

    Draw inspiration from locations such
    as Evergreen Terrace, Springfield
    Elementary, Moe's Tavern, the
    Kwik-E-Mart, and the wider town.

    Buildings should feature simplified
    geometry, bold outlines, flat colours,
    and clear architectural silhouettes.

    Interior environments may feature
    brightly coloured walls, simplified
    furniture, cartoon household objects,
    and clean environmental linework.

    Outdoor scenes may feature bright
    blue skies, stylised clouds,
    simple vegetation, colourful houses,
    and distinctive cartoon streets.

    However, do not automatically replace
    the user's requested setting with
    the Simpsons family home or another
    famous location.

    The original environment should
    remain recognisable while adopting
    the show's cartoon aesthetic.

    OBJECTS AND ENVIRONMENTAL DETAILS:
    Translate everyday objects into
    simplified Simpsons-style cartoon forms.

    Furniture, vehicles, electronics,
    food, clothing, and other objects
    should feature bold outlines,
    simplified geometry, and
    predominantly flat colours.

    Preserve the function and recognisable
    appearance of important objects
    specified by the user.

    Avoid excessive realistic detail,
    photographic textures, and
    complicated material rendering.

    Objects should appear consistent
    with the visual design of the
    surrounding cartoon environment.

    COLOUR AND LIGHTING:
    Use the bright, clean colour design
    associated with The Simpsons.

    Daylight scenes may feature clear
    blue skies, vibrant surroundings,
    and simple cartoon shadow shapes.

    Interior scenes may feature warm,
    saturated colours and clear,
    evenly distributed illumination.

    Evening scenes may use darker
    cartoon colour palettes while
    retaining clean outlines and
    readable character designs.

    Lighting should remain illustrative
    rather than physically realistic.

    Avoid cinematic volumetric lighting,
    complex photographic shadows,
    realistic reflections, and
    sophisticated three-dimensional
    illumination.

    COMPOSITION AND ANIMATION FRAMING:
    Present the scene as a carefully
    composed frame from a traditional
    two-dimensional animated sitcom.

    Use clear character placement,
    readable expressions, simple
    perspective, and balanced
    cartoon environments.

    Character portraits should emphasise
    recognisable hairstyles, distinctive
    facial features, clothing colours,
    and expressive cartoon faces.

    Wider scenes should feature
    coherent cartoon architecture,
    simplified environmental detail,
    and consistent line thickness.

    Maintain the prominence of the
    user's primary subject rather
    than allowing elaborate background
    elements to overwhelm the composition.

    HUMOUR AND STORYTELLING:
    The Simpsons combines everyday
    family life, workplace comedy,
    social satire, absurd humour,
    and recognisable suburban situations.

    Where appropriate, incorporate
    the light-hearted visual charm
    and expressive storytelling
    associated with the series.

    Humorous scenes may feature
    exaggerated facial expressions,
    amusing body language, and
    playful environmental details.

    However, do not automatically
    introduce jokes, unrelated
    characters, or comedic situations.

    Preserve the emotional tone
    of the user's original request.

    Serious, peaceful, dramatic,
    and ordinary scenes should
    remain consistent with the
    user's intended subject matter.

    ANIMATION CONSISTENCY:
    The entire image must appear
    to belong to the same
    two-dimensional cartoon production.

    Characters, backgrounds, clothing,
    objects, and environmental details
    must share consistent linework,
    colour treatment, and stylisation.

    Use bold, clean outlines and
    predominantly flat colour fills
    throughout the composition.

    Avoid placing cartoon characters
    into photographic backgrounds.

    Avoid mixing three-dimensional
    CGI objects with traditional
    two-dimensional animation.

    Avoid painterly anime backgrounds,
    realistic human skin textures,
    and glossy animated-film rendering.

    FINAL PRESENTATION:
    The finished image should resemble
    an authentic, professionally
    produced frame from an episode
    of The Simpsons.

    Prioritise recognisable Simpsons
    character anatomy, bright yellow
    cartoon skin, large rounded eyes,
    bold black outlines, flat colours,
    simplified environments, and
    expressive television animation.

    Avoid generic comic-book artwork,
    realistic caricatures, three-dimensional
    animation, Japanese anime aesthetics,
    painterly textures, and photographic
    rendering.

    Do not add The Simpsons logos,
    episode titles, captions, text,
    borders, or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT
    appears in the image. These theme instructions
    determine HOW the subject and environment
    should be illustrated.

    Preserve the user's creative intentions
    while consistently applying the distinctive
    two-dimensional cartoon aesthetic
    of The Simpsons television series.
  `,
  },
  {
    name: "ANIME",
    prompt: `
    VISUAL THEME: JAPANESE ANIME

    Transform the user's requested subject or supplied reference
    image into a beautiful, professionally illustrated Japanese
    anime scene.

    The visual direction is mainstream, family-friendly Japanese
    animation suitable for a general audience.

    ARTISTIC STYLE:
    Use polished two-dimensional anime illustration with
    precise linework, expressive character designs,
    sophisticated cel shading, harmonious colours,
    and beautifully detailed backgrounds.

    Draw inspiration from the craftsmanship of contemporary
    Japanese animated films and television series.

    Emphasise elegant character illustration, cinematic
    composition, atmospheric lighting, and cohesive
    environmental design.

    The finished result should resemble a high-quality
    frame from a professionally produced anime film.

    CHARACTER AND IDENTITY PRESERVATION:
    If a reference image is supplied, preserve the subject's
    recognisable identity, facial structure, hairstyle,
    expression, approximate age, and defining characteristics.

    Translate realistic features into natural, expressive
    anime character designs without changing the subject's
    identity or apparent age.

    Preserve distinctive hairstyles, facial hair, glasses,
    clothing colours, accessories, and other recognisable
    visual characteristics.

    Use balanced, natural anime proportions with expressive
    eyes, carefully drawn faces, and believable anatomy.

    Avoid unnecessary exaggeration of body proportions.

    If no reference image is provided, create the subject
    from the user's written description.

    CHARACTER DESIGN:
    Characters should have appealing silhouettes,
    natural poses, expressive faces, and carefully
    illustrated clothing.

    Depict adults with appropriately mature facial features,
    body proportions, and overall presentation.

    Clothing should be practical, tasteful, and appropriate
    to the user's requested setting and activity.

    Use natural fabric folds, clear outlines,
    and refined cel-shaded textures.

    Preserve the clothing and general appearance
    specified by the user wherever appropriate.

    Do not automatically introduce school uniforms,
    fantasy costumes, exaggerated body proportions,
    or unrelated character archetypes.

    FAMILY-FRIENDLY PRESENTATION:
    Maintain a wholesome, non-sexualised visual presentation
    suitable for a general audience.

    Do not introduce nudity, revealing costumes,
    suggestive poses, fetish-inspired clothing,
    or sexualised character features.

    Avoid exaggerated anatomical emphasis or camera
    framing that draws unnecessary attention to the body.

    Keep characters naturally posed, comfortably dressed,
    and visually consistent with mainstream family-friendly
    animation.

    Focus on facial expression, personality, storytelling,
    environment, and artistic craftsmanship.

    ENVIRONMENTS AND BACKGROUNDS:
    Preserve the user's requested location, activity,
    composition, and important environmental details.

    Reinterpret the entire environment using beautifully
    illustrated Japanese anime backgrounds.

    Potential settings include peaceful countryside
    landscapes, modern city streets, domestic interiors,
    bustling marketplaces, natural environments,
    and imaginative fictional locations.

    Use detailed architectural illustration,
    convincing perspective, layered atmospheric depth,
    and harmonious colour relationships.

    Natural environments may feature expressive skies,
    richly illustrated trees, flowing water,
    soft clouds, and carefully drawn vegetation.

    Urban environments may feature detailed buildings,
    reflective windows, streetlights, shopfronts,
    and everyday environmental objects.

    Do not automatically relocate the scene to Japan.

    Preserve the original environment while transforming
    its artistic presentation into anime.

    LIGHTING AND COLOUR:
    Use sophisticated anime-style cinematic lighting.

    Daylight scenes may feature clear skies,
    warm sunlight, carefully shaped shadows,
    and subtle atmospheric perspective.

    Evening scenes may feature golden sunsets,
    soft colour gradients, and delicate highlights.

    Interior scenes may feature gentle window light,
    warm ambient illumination, and expressive shadows.

    Use vibrant but balanced colours, refined cel shading,
    and selective highlights.

    Avoid excessive neon effects, harsh visual contrast,
    or unnecessary supernatural lighting.

    COMPOSITION:
    Present the image as a beautifully composed
    frame from a contemporary Japanese animated film.

    Use natural character poses, expressive faces,
    coherent perspective, and carefully balanced
    foreground and background elements.

    Character portraits should emphasise the subject's
    recognisable features, hairstyle, personality,
    and facial expression.

    Wider scenes should balance the subject with
    detailed illustrated surroundings.

    Preserve the user's requested camera angle,
    framing, pose, and overall composition.

    EMOTIONAL TONE:
    Japanese animation encompasses everyday life,
    friendship, comedy, adventure, romance,
    mystery, and emotional storytelling.

    Match the emotional atmosphere to the user's
    original creative intentions.

    Peaceful scenes should remain peaceful.
    Cheerful scenes should retain their warmth.
    Dramatic scenes may use stronger cinematic
    lighting and expressive composition.

    Do not introduce unrelated action, fantasy elements,
    or dramatic effects unless requested.

    VISUAL CONSISTENCY:
    The entire image should share a cohesive
    two-dimensional Japanese anime aesthetic.

    Characters, backgrounds, clothing, and objects
    should feature consistent linework,
    cel shading, colour treatment, and perspective.

    Avoid photographic backgrounds, glossy CGI,
    Western cartoon styling, and inconsistent
    combinations of illustration techniques.

    FINAL PRESENTATION:
    Produce a beautiful, family-friendly Japanese
    anime illustration with expressive character
    design, polished cel shading, detailed backgrounds,
    cinematic lighting, and professional animation quality.

    Preserve the user's subject, identity, age,
    personality, clothing, and intended activity.

    Do not add captions, subtitles, logos,
    speech bubbles, borders, or unrelated text
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT
    appears in the image.

    These instructions determine HOW the subject
    and environment should be illustrated.

    Preserve the user's creative intentions while
    applying a polished, tasteful, family-friendly
    Japanese anime aesthetic.
  `,
  },
  {
    name: "COMIC_BOOK",
    prompt: `
    VISUAL THEME: COMIC BOOK

    Transform the requested image or scene into a striking,
    professionally illustrated American comic-book artwork.

    Draw inspiration from the visual craftsmanship of
    premium superhero comics, graphic novels, and
    traditional hand-inked comic-book illustration.

    The finished image should resemble a beautifully
    illustrated page or cover from a high-quality
    contemporary comic-book publication.

    ARTISTIC STYLE:
    Render the entire scene using bold, confident ink outlines,
    expressive illustration, dramatic cel shading,
    and carefully controlled colour.

    Combine traditional comic-book drawing techniques
    with the polished finish of modern digital colouring.

    Use strong black contours, varied line thickness,
    detailed cross-hatching, selective halftone textures,
    and carefully defined shadow shapes.

    Colours should be vibrant, rich, and visually striking,
    featuring deep blues, vivid reds, warm yellows,
    dramatic purples, and carefully balanced neutral tones.

    Use sophisticated colour relationships rather than
    making every element excessively saturated.

    Maintain the appearance of printed illustrated artwork.

    Avoid photorealistic rendering, glossy three-dimensional
    CGI, Japanese anime character design, and generic
    children's cartoon aesthetics.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, approximate age,
    and defining characteristics.

    Translate the subject into a beautifully illustrated
    comic-book character while retaining their identity.

    Preserve distinctive hairstyles, facial hair,
    glasses, accessories, clothing colours,
    and recognisable facial features.

    Adapt realistic facial anatomy into expressive
    comic-book illustration without excessively
    exaggerating or distorting the subject.

    Use confident facial linework, carefully defined
    shadows, expressive eyes, and believable anatomy.

    Preserve the subject's approximate body shape,
    age, pose, and individual characteristics.

    Do not automatically transform the subject into
    an established superhero or comic-book character.

    Do not automatically introduce superhero costumes,
    masks, capes, armour, or extraordinary powers.

    If no reference image is provided, create the
    subject entirely from the user's written description.

    CHARACTER DESIGN AND ANATOMY:
    Use the sophisticated illustration techniques
    associated with professionally published
    American comic books.

    Characters should feature expressive silhouettes,
    confident body language, believable anatomy,
    and carefully illustrated facial expressions.

    Anatomy may be subtly stylised for visual impact,
    but should remain proportionate and appropriate
    to the user's requested subject.

    Avoid exaggerated muscles, distorted body shapes,
    or unnecessarily idealised physical features.

    Clothing should feature expressive fabric folds,
    bold shadow shapes, detailed stitching where
    appropriate, and convincing illustrated textures.

    Preserve the user's requested clothing,
    accessories, pose, and intended activity.

    Do not automatically dress ordinary subjects
    as superheroes or villains.

    INK WORK AND LINE ART:
    Emphasise the distinctive visual craftsmanship
    of traditional comic-book inking.

    Use strong, clean black outlines to define
    characters, objects, and environmental features.

    Vary line thickness to create depth,
    visual emphasis, and dimensional form.

    Incorporate carefully controlled cross-hatching,
    solid black shadow regions, and expressive
    ink detailing where appropriate.

    Fine linework may be used to define
    hair, fabric textures, architecture,
    and important environmental details.

    Maintain clear, readable silhouettes
    and visually coherent illustration.

    Avoid overly sketchy, unfinished,
    or inconsistent linework.

    COLOURING AND PRINT TEXTURES:
    Use polished comic-book colouring
    with defined shadow shapes,
    rich colour blocks, and
    selective gradients where appropriate.

    Incorporate subtle halftone dots,
    Ben-Day-inspired printing textures,
    or delicate paper grain when they
    enhance the illustrated appearance.

    These effects should remain subtle
    and professionally integrated.

    Avoid overwhelming the image with
    excessive dots, artificial distressing,
    or heavy vintage printing defects.

    The artwork should feel like a
    premium contemporary comic book
    rather than a damaged old newspaper.

    ENVIRONMENTS AND BACKGROUNDS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the entire environment
    using detailed comic-book illustration.

    Potential settings include bustling
    city streets, domestic interiors,
    dramatic landscapes, futuristic
    environments, historical locations,
    and imaginative fictional worlds.

    Buildings should feature strong
    perspective lines, confident outlines,
    carefully illustrated textures,
    and expressive shadow placement.

    Natural environments may feature
    stylised clouds, detailed foliage,
    illustrated water, dramatic skies,
    and carefully defined landscapes.

    Interior environments may feature
    richly illustrated furniture,
    architectural details, and
    expressive lighting.

    Do not automatically replace the
    user's requested environment with
    a superhero city or battlefield.

    Preserve the original setting while
    applying the distinctive comic-book
    illustration aesthetic.

    LIGHTING AND SHADOW:
    Use dramatic illustrated lighting
    inspired by premium comic-book artwork.

    Apply bold shadow shapes, strong
    directional lighting, and carefully
    controlled highlights.

    Daylight scenes may feature vivid
    colours, clearly defined shadows,
    and expressive atmospheric depth.

    Night scenes may feature deep blues,
    strong silhouettes, illuminated
    windows, and dramatic contrasts.

    Interior scenes may feature warm
    illustrated lighting, carefully
    placed highlights, and rich shadows.

    Lighting should feel intentionally
    illustrated rather than
    photographically simulated.

    Preserve important facial details
    and subject visibility even when
    using dramatic contrast.

    COMPOSITION AND VISUAL STORYTELLING:
    Present the scene using the dynamic
    visual language of comic-book illustration.

    Use confident framing, expressive
    character placement, striking
    silhouettes, and carefully balanced
    foreground and background elements.

    Character portraits may feature
    dramatic angles, strong ink outlines,
    and richly illustrated facial detail.

    Wider scenes may emphasise architectural
    perspective, atmospheric environments,
    and visually engaging storytelling.

    Dynamic action compositions may feature
    energetic poses, dramatic perspective,
    and stylised movement when appropriate.

    However, do not automatically introduce
    action scenes, combat, explosions,
    or dramatic movement.

    Preserve the user's requested camera angle,
    pose, composition, and intended activity.

    COMIC-BOOK PRESENTATION:
    The image should resemble a professionally
    illustrated comic-book scene or cover.

    Use the visual craftsmanship of
    traditional sequential artwork,
    including strong composition,
    expressive linework, and
    carefully designed colour.

    The default output should be a
    single cohesive illustration.

    Do not automatically divide the image
    into multiple comic panels.

    Do not automatically introduce
    speech bubbles, captions, narration
    boxes, sound effects, or text.

    If the user explicitly requests
    a comic page or panel layout,
    follow their instructions while
    maintaining the same illustration style.

    MOOD AND STORYTELLING:
    Comic books encompass superhero stories,
    mystery, adventure, science fiction,
    comedy, drama, romance, and everyday life.

    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes should remain peaceful,
    with expressive illustration and
    engaging environmental detail.

    Humorous scenes may feature playful
    expressions and exaggerated gestures.

    Dramatic scenes may feature stronger
    shadows, bold compositions, and
    more intense illustrated lighting.

    Action scenes may incorporate
    energetic visual storytelling
    when explicitly requested.

    Do not automatically introduce
    superheroes, villains, violence,
    or dangerous situations.

    FAMILY-FRIENDLY PRESENTATION:
    Maintain a tasteful, non-sexualised
    presentation suitable for
    a general audience.

    Do not introduce nudity, suggestive
    poses, unnecessarily revealing clothing,
    or exaggerated anatomical features.

    Preserve the user's intended clothing
    and appearance while maintaining
    appropriate character presentation.

    Avoid unnecessarily graphic violence
    or disturbing imagery.

    Focus on illustration quality,
    character identity, composition,
    and visual storytelling.

    ARTISTIC CONSISTENCY:
    The entire image should appear
    to belong to the same
    professionally illustrated
    comic-book production.

    Characters, environments, objects,
    clothing, and backgrounds should
    share consistent linework,
    colour treatment, and shading.

    Maintain a cohesive balance between
    bold outlines, expressive shadows,
    detailed illustration, and
    polished comic-book colouring.

    Avoid mixing photographic elements
    with illustrated characters.

    Avoid glossy CGI materials,
    flat anime cel shading,
    and inconsistent visual styles.

    FINAL PRESENTATION:
    Produce a striking, professionally
    illustrated comic-book image
    featuring confident ink outlines,
    expressive character design,
    dramatic shading, vibrant colours,
    and subtle print-inspired textures.

    The finished artwork should resemble
    a premium American comic-book
    illustration or graphic novel.

    Prioritise recognisable subjects,
    sophisticated illustration,
    strong composition, coherent
    visual storytelling, and
    professional artistic craftsmanship.

    Do not add comic-book titles,
    publisher logos, speech bubbles,
    captions, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines WHAT
    appears in the image.

    These theme instructions determine HOW
    the subject and environment should
    be illustrated.

    Preserve the user's creative intentions
    while consistently applying the
    distinctive visual aesthetic of
    professionally illustrated comic books.
  `,
  },
  {
    name: "VIKING",
    prompt: `
    VISUAL THEME: VIKING AGE

    Transform the requested image or scene into the distinctive
    cinematic historical aesthetic of Scandinavia during
    the Viking Age, approximately AD 793–1066.

    Draw inspiration from the historical cultures of the
    Norse peoples and the atmospheric visual presentation
    of historical productions such as Vikings,
    The Last Kingdom, and The Northman.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic photorealism,
    believable human anatomy, authentic historical materials,
    detailed environmental textures, and sophisticated
    naturalistic lighting.

    Establish the atmosphere of early medieval Scandinavia,
    characterised by rugged natural landscapes, seafaring
    communities, timber settlements, skilled craftsmanship,
    and a strong connection to the natural world.

    Combine historical realism with atmospheric cinematic
    storytelling, ensuring that clothing, architecture,
    objects, and environments feel physically convincing.

    Use an organic colour palette featuring earthy browns,
    weathered greys, forest greens, muted blues, deep reds,
    natural wool tones, and subtle amber highlights.

    Avoid exaggerated fantasy artwork, unrealistic armour,
    and generic medieval imagery that lacks a recognisable
    Norse cultural identity.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve the original
    subject's recognisable identity, facial structure,
    hairstyle, expression, approximate age,
    and defining characteristics.

    Adapt clothing, accessories, and surrounding details
    to the Viking Age where appropriate.

    Characters may wear woollen tunics, linen undergarments,
    woven dresses, practical cloaks, leather belts,
    leg wraps, leather footwear, and historically
    inspired Scandinavian garments.

    Clothing should feature believable natural fabrics,
    handcrafted stitching, woven textures,
    practical construction, and realistic signs of wear.

    Wealthier characters may wear finely woven garments,
    decorative brooches, silver jewellery, embroidered
    details, and carefully crafted accessories.

    Preserve the subject's recognisable hairstyle,
    facial hair, expression, and individual appearance.

    Hairstyles and grooming should be appropriate
    to the subject and the historical setting.

    Do not automatically give every male character
    a large beard or shaved hairstyle.

    Do not automatically transform every subject
    into a warrior, raider, shieldmaiden, or chieftain.

    Preserve the user's requested personality,
    pose, activity, and overall presentation.

    If no reference image is provided, create
    the subject entirely from the user's
    written description.

    HISTORICAL CLOTHING AND APPEARANCE:
    Emphasise authentic early medieval
    Scandinavian clothing and craftsmanship.

    Men's garments may include woollen tunics,
    trousers, cloaks, leather belts,
    and practical travelling clothing.

    Women's garments may include long dresses,
    apron dresses, decorative brooches,
    woven shawls, and historically inspired
    Scandinavian jewellery.

    Use natural fabrics such as wool, linen,
    leather, and fur where appropriate.

    Decorative elements may feature woven
    patterns, intricate metalwork,
    and traditional Norse ornamentation.

    Clothing should reflect the subject's
    occupation, social standing, environment,
    and requested activity.

    Avoid generic fantasy costumes,
    exaggerated fur armour, decorative
    horned helmets, and historically
    implausible clothing.

    VIKING AGE ENVIRONMENTS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Where appropriate, reinterpret the
    environment as part of Viking Age
    Scandinavia or the wider Norse world.

    Potential settings include coastal
    settlements, timber longhouses,
    traditional farms, fjord landscapes,
    fishing villages, woodland communities,
    trading ports, and rugged shorelines.

    Natural environments may feature
    dramatic Norwegian fjords,
    dense Scandinavian forests,
    rocky coastlines, rolling hills,
    cold northern seas, and
    mist-covered mountain landscapes.

    Settlements may feature timber buildings,
    turf roofs, wooden fences, workshops,
    livestock enclosures, and
    practical agricultural structures.

    Environments should feel inhabited,
    historically believable, and
    shaped by everyday human activity.

    However, do not automatically
    replace the user's requested setting
    with a battlefield, longship,
    or dramatic mountain landscape.

    NORSE ARCHITECTURE AND CRAFTSMANSHIP:
    Incorporate the distinctive architectural
    and material culture of Viking Age societies.

    Buildings may feature timber framing,
    carved wooden supports, turf roofing,
    central hearths, wooden benches,
    and practical domestic furnishings.

    Interiors may include woven textiles,
    wooden chests, pottery, iron tools,
    animal hides, and handcrafted
    household objects.

    Decorative craftsmanship may feature
    intricate knotwork, carved animal motifs,
    geometric patterns, and
    traditional Scandinavian ornamentation.

    Materials should display convincing
    wood grain, weathering, metalwork,
    woven fibres, and natural textures.

    Avoid imposing stone castles,
    Gothic architecture, and
    later medieval building styles
    unless explicitly requested.

    SEAFARING AND LONGSHIPS:
    Viking Age culture was strongly
    associated with maritime travel,
    trade, exploration, and seafaring.

    Where appropriate, incorporate
    historically inspired Norse longships,
    wooden trading vessels, coastal harbours,
    and traditional maritime equipment.

    Longships should feature believable
    clinker-built wooden hulls,
    carefully constructed oars,
    square sails, and authentic
    Scandinavian craftsmanship.

    Maritime scenes may feature
    cold northern waters, dramatic
    coastlines, weathered timber,
    and atmospheric sea mist.

    Do not automatically introduce
    longships into scenes where
    they are unnecessary.

    WEAPONS AND HISTORICAL EQUIPMENT:
    Where explicitly requested or
    contextually appropriate,
    incorporate historically inspired
    Viking Age weapons and equipment.

    Potential equipment includes
    round wooden shields, iron swords,
    spears, axes, and practical
    early medieval protective clothing.

    Armour should reflect historically
    plausible materials and construction.

    Helmets, where appropriate,
    should feature practical
    early medieval designs.

    Do not introduce horned helmets
    as standard Viking equipment.

    Do not automatically give characters
    weapons, shields, or armour.

    Ordinary domestic, agricultural,
    commercial, and social scenes
    should remain free of unnecessary
    military equipment.

    NORSE MYTHOLOGY AND SYMBOLISM:
    Viking Age culture included rich
    traditions of mythology, folklore,
    religious belief, and symbolism.

    Where explicitly requested or
    contextually appropriate,
    incorporate traditional Norse
    mythological imagery or symbolism.

    Potential elements include
    carved runestones, traditional
    decorative motifs, sacred groves,
    and mythologically inspired details.

    Mythological scenes may feature
    atmospheric supernatural elements,
    ancient legends, or imaginative
    interpretations of Norse mythology.

    However, the default presentation
    should remain historically grounded.

    Do not automatically introduce
    gods, magical creatures,
    supernatural powers, or
    fantasy environments.

    Avoid presenting modern fantasy
    inventions as established
    historical Viking Age details.

    LIGHTING AND ATMOSPHERE:
    Use cinematic naturalistic lighting
    inspired by northern European
    landscapes and historical drama.

    Outdoor scenes may feature
    overcast Scandinavian skies,
    cold morning light, drifting mist,
    golden evening sunlight,
    and dramatic cloud formations.

    Coastal environments may feature
    soft reflected light from water,
    atmospheric sea haze,
    and subdued natural colours.

    Forest environments may feature
    sunlight filtering through trees,
    deep natural shadows,
    and rich vegetation.

    Interior scenes may feature
    warm hearth fire, oil lamps,
    candlelight where historically
    appropriate, and soft daylight
    entering through openings.

    Maintain believable lighting,
    natural skin tones, and
    convincing atmospheric depth.

    Do not automatically make every
    scene gloomy, stormy, or threatening.

    Peaceful scenes should retain
    warmth, natural beauty,
    and a sense of everyday life.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene using the
    sophisticated cinematic language
    of historical Viking Age drama.

    Draw inspiration from atmospheric
    character portraits, expansive
    Scandinavian landscapes,
    detailed domestic interiors,
    and carefully composed
    historical environments.

    Use realistic human proportions,
    convincing material textures,
    natural depth of field,
    and carefully balanced lighting.

    Character portraits should emphasise
    recognisable facial features,
    natural expressions, detailed
    period clothing, and
    authentic environmental context.

    Wider compositions may highlight
    dramatic fjords, timber settlements,
    traditional longships,
    and rugged northern landscapes.

    Maintain the prominence of the
    user's primary subject rather
    than allowing historical scenery
    to overwhelm the composition.

    EVERYDAY LIFE AND CULTURAL DETAIL:
    Viking Age societies included
    farmers, craftspeople, traders,
    sailors, families, and
    many other ordinary inhabitants.

    Where appropriate, portray
    historically inspired domestic
    life, agricultural work,
    traditional craftsmanship,
    markets, social gatherings,
    and community activities.

    Incorporate authentic everyday
    objects such as wooden bowls,
    pottery, woven baskets,
    agricultural tools, and
    handcrafted furniture.

    The Viking Age should feel like
    a complete historical society,
    not simply a world of warriors
    and military conflict.

    MOOD AND STORYTELLING:
    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes may feature
    warm longhouse interiors,
    coastal communities,
    family gatherings, and
    beautiful Scandinavian landscapes.

    Adventurous scenes may feature
    maritime exploration,
    rugged wilderness,
    and a sense of discovery.

    Dramatic scenes may feature
    stronger atmospheric contrast,
    imposing landscapes,
    and powerful cinematic framing.

    Do not automatically introduce
    violence, raiding, warfare,
    threatening characters,
    or disturbing imagery.

    Preserve the original emotional
    tone and creative intentions
    of the user's request.

    HISTORICAL CONSISTENCY:
    Prioritise believable Viking Age
    clothing, tools, architecture,
    materials, and cultural details.

    Avoid horned helmets,
    exaggerated fantasy armour,
    modern machinery, futuristic
    technology, and later medieval
    architectural styles.

    Where the user's original prompt
    includes modern objects or activities,
    preserve their intended meaning
    while adapting surrounding details
    to the historical theme
    wherever appropriate.

    FINAL PRESENTATION:
    The finished image should resemble
    a professionally produced cinematic
    scene, historical character portrait,
    or promotional still from a
    high-budget Viking Age drama.

    Prioritise authentic Norse
    cultural details, realistic
    historical clothing, traditional
    Scandinavian craftsmanship,
    atmospheric natural landscapes,
    and sophisticated cinematic lighting.

    Avoid generic medieval fantasy,
    exaggerated Viking stereotypes,
    cartoon aesthetics, unrealistic
    weapons, and unnecessary
    supernatural effects.

    Do not add titles, text,
    logos, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be presented.

    Preserve the user's creative intentions
    while consistently applying the
    distinctive historical and cinematic
    aesthetic of the Viking Age.
  `,
  },
  {
    name: "MEDIEVAL",
    prompt: `
    VISUAL THEME: MEDIEVAL FANTASY

    Transform the requested image or scene into a richly
    detailed, cinematic medieval fantasy world.

    Draw inspiration from the imaginative visual traditions
    of classic high fantasy, tabletop role-playing games,
    premium fantasy concept art, and cinematic fantasy
    adventures.

    Establish a distinctive world of ancient castles,
    medieval villages, enchanted forests, magnificent
    landscapes, traditional craftsmanship, and
    atmospheric historical-inspired environments.

    The finished image should feel like a beautifully
    realised scene from an original, high-budget
    medieval fantasy production.

    ARTISTIC STYLE:
    Render the scene with exceptional cinematic realism,
    richly detailed materials, believable anatomy,
    sophisticated lighting, and atmospheric depth.

    Combine grounded medieval visual influences
    with the imaginative possibilities of fantasy.

    Use realistic textures, detailed clothing,
    intricate architecture, natural environments,
    and carefully considered visual storytelling.

    The aesthetic should feel immersive,
    visually magnificent, and physically believable,
    even when fantastical elements are present.

    Use a rich, harmonious colour palette featuring
    earthy browns, forest greens, warm golds,
    deep blues, muted reds, natural stone,
    and atmospheric silver-grey tones.

    Avoid generic cartoon fantasy, excessive
    artificial glow, plastic-looking materials,
    and visually inconsistent illustration styles.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve
    the original subject's recognisable identity,
    facial structure, hairstyle, expression,
    approximate age, and defining characteristics.

    Reimagine the subject as a believable inhabitant
    of a medieval fantasy world.

    Preserve distinctive hairstyles, facial hair,
    glasses where appropriate, facial features,
    body shape, and individual personality.

    Adapt clothing and accessories to the
    medieval fantasy aesthetic while retaining
    recognisable elements of the subject's
    original appearance.

    Characters should retain realistic,
    believable anatomy and natural expressions.

    Do not automatically transform the subject
    into a knight, wizard, elf, warrior,
    royal figure, or other fantasy archetype.

    The subject's role should be determined
    by the user's original prompt.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    MEDIEVAL FANTASY CHARACTER DESIGN:
    Characters may belong to a wide range
    of occupations, social backgrounds,
    cultures, and fantasy traditions.

    Potential roles include villagers,
    merchants, craftspeople, travellers,
    scholars, musicians, nobles,
    adventurers, knights, and mages.

    Clothing should reflect the subject's
    intended role, environment,
    personality, and circumstances.

    Ordinary characters may wear linen
    tunics, woollen garments, practical
    dresses, leather belts, cloaks,
    and handcrafted footwear.

    Wealthier characters may wear
    richly embroidered garments,
    decorative jewellery, fine fabrics,
    elegant cloaks, and elaborate
    historically inspired accessories.

    Adventurous characters may wear
    practical travelling equipment,
    layered clothing, protective garments,
    and carefully crafted accessories.

    Avoid automatically introducing
    extravagant armour, oversized weapons,
    or elaborate fantasy costumes.

    Clothing should remain appropriate
    to the subject and intended scene.

    CLOTHING AND MATERIAL DETAIL:
    Emphasise beautiful medieval-inspired
    textiles and traditional craftsmanship.

    Use convincing wool, linen, leather,
    velvet, silk, fur where appropriate,
    and intricately woven fabrics.

    Clothing may feature embroidery,
    decorative fastenings, handcrafted
    buttons, belts, brooches,
    and subtle ornamental patterns.

    Materials should display realistic
    fabric folds, stitching, weathering,
    and natural surface textures.

    Armour, when requested, may feature
    detailed metalwork, leather components,
    chainmail, and fantasy-inspired
    decorative craftsmanship.

    Armour should appear functional
    and physically believable.

    Avoid unnecessarily revealing clothing,
    exaggerated anatomical proportions,
    and impractical costume designs.

    MEDIEVAL FANTASY ENVIRONMENTS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the surrounding world
    through a rich medieval fantasy aesthetic.

    Potential environments include
    ancient stone castles, fortified towns,
    timber-framed villages, cobbled streets,
    traditional marketplaces, atmospheric
    taverns, royal halls, and secluded
    countryside settlements.

    Natural environments may include
    ancient forests, rolling hills,
    mist-covered valleys, dramatic mountains,
    peaceful rivers, and magnificent lakes.

    Fantasy environments may feature
    enchanted woodlands, forgotten ruins,
    mysterious towers, ancient temples,
    and imaginative architectural details.

    Environments should feel inhabited,
    coherent, and rich with
    believable everyday activity.

    Do not automatically relocate every
    scene to a castle, dungeon,
    battlefield, or enchanted forest.

    Preserve the original setting and
    intended activity wherever possible.

    CASTLES AND ARCHITECTURE:
    Draw inspiration from medieval
    European architecture while allowing
    tasteful fantasy embellishment.

    Buildings may feature towering
    stone walls, fortified gateways,
    timber framing, steep roofs,
    arched windows, carved stonework,
    and elaborate wooden doors.

    Castles may feature battlements,
    grand halls, courtyards,
    imposing towers, and
    intricately designed interiors.

    Villages may feature traditional
    cottages, market stalls,
    blacksmith workshops, bakeries,
    inns, and narrow cobbled streets.

    Interior environments may feature
    wooden beams, stone fireplaces,
    woven tapestries, handcrafted
    furniture, and warm illumination.

    Architecture should feel structurally
    convincing rather than randomly
    assembled from fantasy elements.

    MAGICAL AND FANTASTICAL ELEMENTS:
    Medieval fantasy may include
    supernatural phenomena, enchanted
    objects, ancient mysteries,
    and imaginative creatures.

    Where explicitly requested or
    contextually appropriate,
    incorporate tasteful magical details.

    Potential elements include
    softly glowing runes, enchanted
    artefacts, mysterious ancient ruins,
    magical forests, and
    atmospheric supernatural light.

    Magic should feel integrated
    into the environment rather
    than overwhelming the image.

    Do not automatically give
    characters magical powers,
    glowing eyes, enchanted weapons,
    or supernatural abilities.

    Do not introduce spells,
    magical effects, or fantastical
    creatures unless appropriate
    to the user's requested scene.

    The fantasy world should remain
    visually engaging even without
    obvious supernatural elements.

    FANTASY CREATURES AND RACES:
    Where requested, the setting may
    include traditional fantasy beings
    such as elves, dwarves, dragons,
    mythical animals, and other
    imaginative creatures.

    Such beings should feature
    coherent anatomy, detailed textures,
    and a consistent visual aesthetic.

    Fantasy races should be portrayed
    as believable inhabitants
    of the surrounding world.

    Dragons and other large creatures
    should feel physically substantial
    and integrated into the environment.

    However, do not automatically
    transform human subjects into
    non-human fantasy races.

    Do not introduce dragons,
    monsters, or magical creatures
    into ordinary scenes without
    a clear reason.

    WEAPONS AND EQUIPMENT:
    Where explicitly requested or
    contextually appropriate,
    incorporate medieval-inspired
    weapons, armour, and equipment.

    Potential items include swords,
    shields, bows, staffs, traditional
    tools, and fantasy-inspired artefacts.

    Equipment should feature
    believable craftsmanship,
    realistic materials, and
    coherent proportions.

    Decorative weapons may feature
    intricate metalwork, engraved
    patterns, and carefully designed
    fantasy ornamentation.

    Avoid oversized, physically
    implausible weapons unless
    the user specifically requests
    a highly stylised fantasy design.

    Do not automatically equip
    characters with weapons.

    Peaceful domestic, social,
    commercial, and recreational
    scenes should remain free
    of unnecessary combat equipment.

    EVERYDAY LIFE AND CULTURE:
    The medieval fantasy world should
    feel like a complete, functioning
    society rather than merely
    a setting for battles.

    Where appropriate, incorporate
    traditional markets, workshops,
    libraries, inns, farms,
    village celebrations, and
    community gatherings.

    Everyday objects may include
    pottery, wooden furniture,
    woven baskets, candles,
    parchment, musical instruments,
    and handcrafted household items.

    Food, clothing, tools, and
    architecture should contribute
    to a believable lived-in world.

    Ordinary people should appear
    engaged in meaningful activities
    appropriate to the scene.

    LIGHTING AND ATMOSPHERE:
    Use sophisticated cinematic lighting
    inspired by premium fantasy films
    and atmospheric historical dramas.

    Daylight scenes may feature
    warm sunlight, soft clouds,
    natural shadows, and
    beautiful environmental depth.

    Forest scenes may feature
    sunlight filtering through
    dense foliage, atmospheric mist,
    and rich natural colours.

    Castle interiors may feature
    warm firelight, candlelit halls,
    soft daylight through windows,
    and carefully defined shadows.

    Evening scenes may feature
    golden sunsets, distant village
    lights, and dramatic skies.

    Night scenes may feature
    moonlight, illuminated windows,
    and subtle atmospheric haze.

    Magical lighting may be introduced
    where explicitly appropriate,
    but should remain visually
    controlled and believable.

    Avoid excessive artificial glow,
    overwhelming particle effects,
    and unnecessarily dark imagery.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the image as a carefully
    composed cinematic frame
    from a premium fantasy production.

    Use believable perspective,
    expressive character placement,
    atmospheric depth, and
    sophisticated visual storytelling.

    Character portraits should emphasise
    recognisable facial features,
    detailed clothing, natural
    expressions, and beautifully
    rendered material textures.

    Wider compositions may feature
    magnificent castles, ancient
    forests, medieval villages,
    and expansive fantasy landscapes.

    Use natural depth of field
    and carefully controlled lighting
    to direct attention towards
    the primary subject.

    Preserve the user's requested
    framing, pose, activity,
    and overall composition.

    Do not automatically introduce
    dramatic action poses,
    heroic stances, or
    exaggerated camera angles.

    MOOD AND STORYTELLING:
    Medieval fantasy encompasses
    adventure, mystery, romance,
    comedy, exploration, everyday life,
    and epic storytelling.

    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes may feature
    charming villages, warm interiors,
    beautiful landscapes, and
    quiet moments of everyday life.

    Adventurous scenes may feature
    ancient roads, mysterious ruins,
    and expansive wilderness.

    Magical scenes may feature
    subtle enchantment and
    imaginative environmental detail.

    Dramatic scenes may feature
    stronger lighting contrast,
    atmospheric weather, and
    imposing architecture.

    Do not automatically introduce
    violence, warfare, monsters,
    threatening characters,
    or disturbing imagery.

    Preserve the user's intended
    emotional tone and narrative.

    FAMILY-FRIENDLY PRESENTATION:
    Maintain a tasteful,
    non-sexualised presentation
    suitable for a general audience.

    Characters should wear clothing
    appropriate to their roles,
    surroundings, and activities.

    Avoid unnecessarily revealing
    costumes, suggestive poses,
    exaggerated body proportions,
    and gratuitous violence.

    Focus on immersive worldbuilding,
    character identity, environmental
    storytelling, and cinematic quality.

    WORLD CONSISTENCY:
    The entire scene should feel
    as though it belongs to
    one coherent medieval fantasy world.

    Characters, architecture, clothing,
    tools, creatures, and environmental
    details should share a consistent
    level of realism and craftsmanship.

    Blend historical influences
    with imaginative fantasy details
    in a believable manner.

    Avoid modern machinery,
    futuristic technology,
    contemporary architecture,
    and unrelated science-fiction
    elements unless explicitly requested.

    Where the user's original prompt
    includes modern activities or objects,
    preserve their intended meaning
    while adapting their presentation
    to the fantasy setting
    wherever appropriate.

    FINAL PRESENTATION:
    Produce a richly detailed,
    visually magnificent medieval
    fantasy image with cinematic realism,
    believable characters, intricate
    clothing, atmospheric environments,
    and sophisticated natural lighting.

    The finished image should resemble
    a premium fantasy film still,
    beautifully realised character
    portrait, or high-end fantasy
    concept artwork.

    Prioritise original worldbuilding,
    recognisable subjects,
    authentic material textures,
    imaginative environmental detail,
    and cohesive visual storytelling.

    Avoid generic cartoon fantasy,
    excessive magical effects,
    unrealistic anatomy,
    unnecessary weapons,
    and unrelated fantasy characters.

    Do not add titles, captions,
    logos, borders, or promotional
    typography unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be presented.

    Preserve the user's creative intentions
    while consistently applying a rich,
    immersive, cinematic medieval
    fantasy aesthetic.
  `,
  },
  {
    name: "VICTORIAN",
    prompt: `
    VISUAL THEME: VICTORIAN ERA

    Transform the user's requested image or scene into an
    elegant, historically inspired representation of
    Victorian Britain between 1837 and 1901.

    Create the appearance of a beautifully produced
    nineteenth-century British historical drama,
    featuring authentic period fashion, architecture,
    furnishings, craftsmanship, and atmosphere.

    ARTISTIC STYLE:
    Use sophisticated cinematic photography with
    natural lighting, beautiful historical detail,
    realistic materials, and carefully composed scenes.

    Draw inspiration from nineteenth-century British
    portraiture, historical paintings, architectural
    photography, and premium television period dramas.

    Use a refined colour palette featuring burgundy,
    forest green, navy blue, antique gold, ivory,
    warm brown, charcoal, and natural stone colours.

    Preserve rich colours and beautiful visual detail
    rather than making every image monochrome or sepia.

    The overall appearance should feel elegant,
    authentic, atmospheric, and historically convincing.

    CHARACTER AND IDENTITY PRESERVATION:
    If a reference image is supplied, preserve the
    subject's recognisable identity, hairstyle,
    facial features, expression, and approximate age.

    Reimagine the subject as a person living
    in nineteenth-century Britain.

    Retain distinctive hairstyles, facial hair,
    glasses where suitable, and other recognisable
    characteristics.

    Adapt hairstyles into period-inspired arrangements
    while preserving their recognisable appearance.

    Preserve the subject's personality, requested pose,
    activity, and overall composition.

    Use natural expressions and believable
    historical portrait photography.

    Do not automatically assign the subject
    a particular occupation or social status.

    If no reference image is supplied,
    create the subject from the user's description.

    VICTORIAN FASHION:
    Dress characters in beautifully detailed
    nineteenth-century British clothing appropriate
    to the requested setting and occasion.

    Gentlemen's fashion may include tailored
    frock coats, waistcoats, high-collared shirts,
    cravats, neckties, overcoats, and formal trousers.

    Accessories may include pocket watches,
    walking sticks, gloves, and period hats.

    Ladies' fashion may include elegant Victorian
    day dresses, tailored jackets, full skirts,
    decorative shawls, and formal evening gowns.

    Use historically inspired silhouettes
    appropriate to the chosen Victorian decade.

    Early Victorian clothing may feature
    romantic silhouettes and elaborate textiles.

    Mid-Victorian clothing may feature
    full skirts and detailed tailoring.

    Late Victorian clothing may feature
    structured jackets, refined tailoring,
    and fashionable period accessories.

    Everyday clothing should reflect
    practical nineteenth-century life.

    Fashion should suit the subject's
    requested occupation and circumstances.

    FABRICS AND ACCESSORIES:
    Emphasise authentic historical craftsmanship.

    Use richly detailed wool, cotton, linen,
    silk, velvet, brocade, and lace.

    Garments may feature embroidered details,
    decorative buttons, carefully constructed
    seams, and intricate woven patterns.

    Accessories may include brooches,
    lockets, pocket watches, decorative
    hairpieces, and traditional jewellery.

    Fabrics should feature convincing
    folds, textures, and natural movement.

    Clothing should appear carefully made,
    historically inspired, and suitable
    for everyday life or formal occasions.

    VICTORIAN ARCHITECTURE:
    Create beautifully detailed environments
    inspired by nineteenth-century Britain.

    Buildings may feature red-brick façades,
    carved stonework, decorative iron railings,
    tall sash windows, elaborate doorways,
    and traditional Victorian rooflines.

    Gothic Revival architecture may feature
    pointed arches, ornate stone carvings,
    towers, and magnificent public buildings.

    Townhouses may feature elegant entrances,
    decorative brickwork, and carefully
    maintained front gardens.

    Rural settings may feature traditional
    cottages, country estates, village streets,
    and rolling British countryside.

    Preserve the user's requested location
    wherever possible while adapting its
    visual presentation to the period.

    VICTORIAN STREETS AND CITIES:
    Urban environments may feature
    cobbled streets, horse-drawn carriages,
    gas lamps, traditional shopfronts,
    iron railings, and brick buildings.

    Busy city scenes may feature
    pedestrians in period clothing,
    market stalls, shop windows,
    and traditional street activity.

    Railway environments may feature
    impressive Victorian station buildings,
    steam locomotives, iron-and-glass roofs,
    and nineteenth-century platforms.

    London scenes may feature distinctive
    Victorian architecture and atmospheric
    historical streets.

    However, do not automatically
    relocate every scene to London.

    Other British towns, villages,
    countryside settings, and coastal
    environments are equally appropriate.

    VICTORIAN INTERIORS:
    Interior environments should feature
    richly detailed nineteenth-century
    British furnishings and decoration.

    Drawing rooms may include upholstered
    chairs, polished wooden tables,
    patterned wallpaper, ornate fireplaces,
    and decorative mirrors.

    Libraries and studies may feature
    tall bookshelves, leather-bound books,
    writing desks, ink bottles,
    and carefully arranged papers.

    Dining rooms may feature elegant
    wooden furniture, traditional tableware,
    decorative lighting, and period textiles.

    More modest homes may feature
    practical wooden furniture,
    simple household objects,
    and comfortable domestic surroundings.

    Interiors should feel naturally
    inhabited and historically believable.

    VICTORIAN TECHNOLOGY:
    Incorporate historically appropriate
    nineteenth-century technology
    where relevant to the scene.

    Potential details include steam trains,
    horse-drawn transport, telegraph equipment,
    mechanical clocks, printing presses,
    gas lighting, and traditional machinery.

    Scientific environments may feature
    historical laboratory instruments,
    brass equipment, optical devices,
    and nineteenth-century engineering.

    Machinery should resemble authentic
    industrial-era technology.

    Keep the setting historically grounded
    rather than introducing imaginary
    retrofuturistic inventions.

    EVERYDAY VICTORIAN LIFE:
    Victorian Britain included a wide
    variety of occupations, communities,
    interests, and social environments.

    Scenes may feature traditional markets,
    railway journeys, countryside walks,
    music halls, libraries, workshops,
    shops, gardens, and family homes.

    Characters may be engaged in reading,
    writing, travelling, shopping,
    performing music, gardening,
    studying, or socialising.

    Preserve the user's requested activity
    and translate surrounding details
    into an appropriate historical setting.

    The world should feel lively,
    believable, and full of everyday detail.

    VICTORIAN PORTRAITURE:
    For portrait-style requests,
    draw inspiration from elegant
    nineteenth-century studio photography.

    Use carefully arranged compositions,
    period clothing, refined lighting,
    and traditional photographic framing.

    Backgrounds may feature decorative
    curtains, upholstered chairs,
    painted studio backdrops,
    or beautifully furnished interiors.

    Maintain clear, recognisable facial
    features and natural expressions.

    Use full-colour cinematic realism
    as the default presentation.

    Apply monochrome, sepia, or antique
    photographic treatments only when
    requested or especially appropriate.

    LIGHTING AND ATMOSPHERE:
    Use sophisticated lighting inspired
    by premium historical cinematography.

    Outdoor scenes may feature soft
    British daylight, warm afternoon
    sunshine, overcast skies,
    and atmospheric environmental depth.

    Interior scenes may feature
    gentle window light, warm fireplaces,
    traditional lamps, and
    softly illuminated furnishings.

    Evening street scenes may feature
    glowing gas lamps, warm shop windows,
    and atmospheric cobbled streets.

    Preserve natural colours and
    clear visibility of the subject.

    The atmosphere may be cheerful,
    peaceful, elegant, mysterious,
    or dramatic depending on the
    user's original intentions.

    Do not make every scene dark,
    foggy, rainy, or gloomy.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the image as a carefully
    composed frame from a beautifully
    produced Victorian historical drama.

    Use natural perspective, detailed
    surroundings, sophisticated lighting,
    and elegant visual storytelling.

    Character portraits should emphasise
    recognisable identity, beautiful
    period clothing, and refined
    historical atmosphere.

    Wider scenes may feature magnificent
    architecture, railway stations,
    traditional streets, gardens,
    and richly furnished interiors.

    Preserve the user's requested
    framing, activity, and composition.

    Keep the primary subject visually
    prominent and clearly recognisable.

    HISTORICAL CONSISTENCY:
    Maintain a cohesive nineteenth-century
    British aesthetic throughout the image.

    Clothing, architecture, transport,
    furniture, and everyday objects
    should reflect the Victorian era.

    Avoid contemporary fashion,
    modern vehicles, digital technology,
    futuristic machinery, and unrelated
    historical architectural styles.

    Keep this theme distinct from
    Steampunk by prioritising genuine
    Victorian historical influences.

    Where the original request includes
    modern objects or activities,
    preserve their intended meaning
    while adapting the presentation
    to the historical setting
    wherever appropriate.

    FINAL PRESENTATION:
    Produce a beautiful, richly detailed
    Victorian-era image featuring
    authentic period clothing,
    elegant architecture, traditional
    craftsmanship, and atmospheric
    nineteenth-century surroundings.

    The finished image should resemble
    a premium British historical drama,
    carefully composed Victorian portrait,
    or beautifully reconstructed
    nineteenth-century scene.

    Prioritise historical authenticity,
    recognisable subjects, rich textures,
    natural lighting, and
    sophisticated visual storytelling.

    Do not add titles, captions,
    logos, borders, or promotional
    typography unless requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be presented.

    Preserve the user's creative intentions
    while consistently applying an elegant,
    historically inspired Victorian aesthetic.
  `,
  },
  {
    name: "STEAMPUNK",
    prompt: `
    VISUAL THEME: STEAMPUNK

    Transform the requested image or scene into a richly
    detailed, cinematic steampunk world inspired by
    Victorian-era design and imaginative retrofuturistic
    engineering.

    Create an alternative nineteenth-century setting
    where steam power, intricate clockwork mechanisms,
    brass machinery, and extraordinary mechanical
    inventions shape everyday life.

    The finished image should resemble a beautifully
    produced scene from a premium steampunk adventure
    film or an exceptionally detailed retrofuturistic
    concept artwork.

    ARTISTIC STYLE:
    Render the scene with sophisticated cinematic realism,
    elaborate mechanical detail, believable materials,
    atmospheric lighting, and rich environmental textures.

    Combine Victorian-inspired elegance with inventive
    industrial engineering and imaginative technology.

    Use an intricate visual language of polished brass,
    aged copper, dark iron, weathered steel, leather,
    varnished wood, glass, and precision clockwork.

    Emphasise convincing craftsmanship, mechanical
    complexity, and the visual beauty of functional
    engineering.

    Use a rich colour palette featuring antique gold,
    copper, bronze, mahogany, charcoal, burgundy,
    forest green, deep teal, and warm amber.

    The overall aesthetic should feel adventurous,
    inventive, sophisticated, and visually immersive.

    Avoid generic science-fiction styling,
    modern electronic technology, and
    excessively futuristic plastic materials.

    CHARACTER AND IDENTITY PRESERVATION:
    If a reference image is provided, preserve
    the subject's recognisable identity,
    hairstyle, facial features, expression,
    approximate age, and defining characteristics.

    Reimagine the subject as a believable
    inhabitant of a steampunk world.

    Adapt clothing, accessories, and surrounding
    details to the retrofuturistic aesthetic
    while maintaining the subject's identity.

    Preserve distinctive hairstyles, facial hair,
    glasses where appropriate, and recognisable
    personal characteristics.

    Hairstyles may be adapted into Victorian-inspired
    arrangements while retaining their original
    colour, volume, and distinctive appearance.

    Preserve the user's requested pose,
    activity, personality, and composition.

    Do not automatically transform the subject
    into an inventor, engineer, adventurer,
    airship captain, or mechanical scientist.

    The subject's role should be determined
    by the user's original request.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    STEAMPUNK FASHION:
    Combine elegant nineteenth-century tailoring
    with imaginative mechanical accessories
    and adventurous retrofuturistic design.

    Clothing may include fitted waistcoats,
    long coats, tailored jackets, high collars,
    traditional shirts, elaborate dresses,
    travelling cloaks, and decorative hats.

    Garments may feature leather straps,
    brass fastenings, decorative buckles,
    embroidered patterns, and intricate
    metal accessories.

    Appropriate accessories may include
    pocket watches, mechanical timepieces,
    leather satchels, protective goggles,
    decorative monocles, and brass instruments.

    Clothing should reflect the subject's
    personality, occupation, and activity.

    A scientist may wear practical workshop
    clothing with specialised instruments.

    An explorer may wear durable travelling
    garments and carefully designed equipment.

    A socialite may wear elegant Victorian-inspired
    fashion with subtle mechanical ornamentation.

    An ordinary resident may wear practical
    period clothing with modest steampunk details.

    Do not automatically cover every character
    in goggles, gears, or elaborate accessories.

    Preserve a believable balance between
    historical fashion and inventive design.

    MATERIALS AND CRAFTSMANSHIP:
    Emphasise the distinctive physical materials
    associated with steampunk design.

    Use polished and weathered brass,
    copper piping, iron frameworks,
    mechanical gears, riveted steel,
    leather, glass, and carved wood.

    Machinery should display convincing
    joints, fastenings, pressure gauges,
    valves, pistons, and mechanical linkages.

    Clothing and accessories may feature
    intricate stitching, embossed leather,
    decorative metalwork, and handcrafted
    mechanical components.

    Materials should display realistic
    reflections, subtle weathering,
    natural textures, and believable
    signs of regular use.

    Mechanical details should feel
    purposeful rather than randomly
    attached as decoration.

    STEAMPUNK ENVIRONMENTS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the environment as part
    of an imaginative Victorian-inspired
    retrofuturistic world.

    Potential settings include magnificent
    industrial cities, elaborate workshops,
    steam-powered railway stations,
    airship docks, ornate laboratories,
    bustling marketplaces, and
    extraordinary mechanical buildings.

    Urban environments may feature
    towering brick architecture,
    iron bridges, elevated railways,
    copper rooftops, mechanical towers,
    and elaborate industrial infrastructure.

    Streets may feature cobblestones,
    gas lamps, steam-powered vehicles,
    brass street furniture, and
    beautifully detailed shopfronts.

    Interior environments may feature
    polished wooden furniture,
    intricate machinery, decorative
    metalwork, mechanical instruments,
    and warm industrial lighting.

    Rural environments may combine
    traditional landscapes with
    inventive mechanical transport,
    steam-powered agricultural equipment,
    or unusual engineering structures.

    Do not automatically replace every
    requested setting with a factory,
    laboratory, or industrial city.

    Preserve the original environment
    while adapting its visual details
    to the steampunk aesthetic.

    STEAMPUNK ARCHITECTURE:
    Combine Victorian architectural
    influences with imaginative
    mechanical engineering.

    Buildings may feature ornate
    brick façades, decorative ironwork,
    arched windows, copper domes,
    glass conservatories, and
    towering industrial structures.

    Mechanical architecture may include
    visible gear systems, moving platforms,
    rotating observation towers,
    steam-driven lifts, and
    intricate ventilation systems.

    Grand buildings may feature
    enormous clock faces, decorative
    brass frameworks, elaborate
    staircases, and monumental
    mechanical installations.

    Industrial districts may feature
    interconnected pipes, chimneys,
    railway structures, and
    complex mechanical infrastructure.

    Architecture should remain
    visually coherent and structurally
    convincing despite its imaginative
    engineering.

    CLOCKWORK AND MACHINERY:
    Steampunk technology should emphasise
    the beauty of mechanical engineering.

    Incorporate carefully designed gears,
    cogs, pistons, pressure gauges,
    rotating shafts, valves, and
    precision clockwork where appropriate.

    Machines may feature exposed
    mechanical components, brass casings,
    engraved control panels, and
    traditional analogue instruments.

    Mechanical devices should appear
    to perform believable functions.

    Larger inventions may feature
    interconnected steam engines,
    elaborate transmission systems,
    and impressive industrial structures.

    Avoid random collections of gears
    that serve no visual or mechanical purpose.

    Mechanical complexity should enhance
    the scene rather than overwhelm
    the primary subject.

    STEAM-POWERED TECHNOLOGY:
    Create imaginative technologies
    inspired by nineteenth-century
    steam engineering.

    Potential inventions include
    steam-powered vehicles, elaborate
    mechanical computers, advanced
    clockwork instruments, and
    extraordinary transport systems.

    Devices may feature brass controls,
    analogue dials, polished levers,
    copper piping, and carefully
    designed mechanical interfaces.

    Technology should feel inventive
    and extraordinary while remaining
    rooted in mechanical principles.

    Avoid modern smartphones, digital
    screens, contemporary electronics,
    and sleek futuristic interfaces.

    AIRSHIPS AND TRANSPORT:
    Where appropriate, incorporate
    magnificent steampunk airships,
    mechanical flying machines,
    steam locomotives, and
    imaginative Victorian vehicles.

    Airships may feature elaborate
    gondolas, brass fittings,
    timber decks, mechanical propellers,
    and carefully constructed
    suspension frameworks.

    Steam locomotives may feature
    oversized mechanical components,
    decorative brass detailing,
    and inventive engineering.

    Ground vehicles may feature
    intricate wheels, steam engines,
    copper exhaust pipes, and
    ornate mechanical bodywork.

    Transport should feel like
    a natural part of the world.

    Do not automatically introduce
    airships or mechanical vehicles
    into scenes where they are unnecessary.

    INVENTIONS AND SCIENTIFIC DETAIL:
    Steampunk environments may feature
    extraordinary workshops, scientific
    laboratories, and inventive machinery.

    Appropriate details may include
    precision instruments, mechanical
    calculators, telescopes, pressure
    gauges, drafting tables, and
    elaborate engineering diagrams.

    Workshops may feature wooden benches,
    organised tools, brass components,
    mechanical prototypes, and
    carefully constructed devices.

    Laboratories may feature
    glass instruments, polished metal,
    scientific equipment, and
    inventive experimental machinery.

    These elements should support
    the user's requested activity
    rather than introduce an unrelated
    scientific storyline.

    LIGHTING AND ATMOSPHERE:
    Use sophisticated cinematic lighting
    with warm industrial highlights
    and atmospheric environmental depth.

    Interior scenes may feature
    glowing gas lamps, warm workshop
    lighting, illuminated machinery,
    and soft daylight through
    tall Victorian windows.

    Industrial environments may feature
    gentle steam clouds, amber light,
    polished metal reflections,
    and atmospheric haze.

    Outdoor scenes may feature
    dramatic skies, warm sunsets,
    beautifully illuminated cities,
    and intricate architectural silhouettes.

    Night scenes may feature
    glowing street lamps, illuminated
    airships, warm windows, and
    richly detailed city skylines.

    Use atmospheric steam and mist
    where they naturally belong.

    Do not automatically obscure
    every scene with heavy smoke,
    excessive fog, or darkness.

    Preserve clear visibility of
    the primary subject and
    important environmental details.

    COMPOSITION AND CINEMATOGRAPHY:
    Present the scene as a carefully
    composed frame from a premium
    steampunk adventure production.

    Use believable perspective,
    cinematic depth, elegant framing,
    and richly detailed surroundings.

    Character portraits should emphasise
    recognisable facial features,
    beautifully crafted clothing,
    intricate accessories, and
    sophisticated lighting.

    Wider compositions may highlight
    magnificent airships, towering
    mechanical architecture,
    elaborate workshops, and
    imaginative industrial landscapes.

    Preserve the user's requested
    pose, framing, activity,
    and overall composition.

    Do not automatically introduce
    dramatic action poses or
    exaggerated camera angles.

    MOOD AND STORYTELLING:
    Steampunk can encompass adventure,
    invention, mystery, exploration,
    comedy, everyday life, and
    imaginative historical fiction.

    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes may feature
    charming mechanical cafés,
    elegant interiors, inventive
    household objects, and
    warm atmospheric lighting.

    Adventurous scenes may feature
    extraordinary airships,
    bustling mechanical cities,
    and imaginative exploration.

    Scientific scenes may feature
    elaborate laboratories,
    intricate inventions, and
    carefully designed machinery.

    Elegant scenes may feature
    beautiful Victorian-inspired
    fashion, ornate architecture,
    and decorative mechanical details.

    Do not automatically introduce
    warfare, threatening characters,
    explosions, or dangerous situations.

    Preserve the user's intended
    emotional tone and narrative.

    WORLD CONSISTENCY:
    The entire image should belong
    to one coherent steampunk world.

    Clothing, architecture, transport,
    machinery, furniture, and everyday
    objects should share a consistent
    Victorian-inspired mechanical aesthetic.

    Blend traditional craftsmanship
    with imaginative engineering
    in a believable manner.

    Mechanical inventions should feature
    coherent materials, construction,
    and visual functionality.

    Avoid modern digital technology,
    glossy science-fiction plastics,
    cyberpunk neon environments,
    and unrelated futuristic designs.

    Keep the aesthetic distinct
    from historically accurate
    Victorian-era imagery by
    incorporating imaginative
    retrofuturistic engineering
    where contextually appropriate.

    FINAL PRESENTATION:
    Produce a magnificent, richly
    detailed steampunk image featuring
    Victorian-inspired elegance,
    extraordinary mechanical design,
    polished brass and copper,
    intricate clockwork, and
    sophisticated cinematic lighting.

    The finished image should resemble
    a premium retrofuturistic film still,
    beautifully realised steampunk
    character portrait, or high-end
    cinematic concept artwork.

    Prioritise recognisable subjects,
    inventive worldbuilding,
    convincing craftsmanship,
    rich environmental textures,
    and cohesive visual storytelling.

    Avoid generic science fiction,
    excessive decorative gears,
    modern technology, unrelated
    fantasy elements, and
    visually inconsistent machinery.

    Do not add titles, captions,
    logos, borders, or promotional
    typography unless requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be presented.

    Preserve the user's creative intentions
    while consistently applying a rich,
    imaginative, cinematic steampunk aesthetic.
  `,
  },
  {
    name: "NOIR",
    prompt: `
    VISUAL THEME: CLASSIC FILM NOIR

    Transform the requested image or scene into a striking
    cinematic composition inspired by classic Hollywood
    film noir of the 1940s and 1950s.

    Draw inspiration from the atmospheric black-and-white
    cinematography, expressive lighting, sophisticated
    compositions, and period styling of films such as
    The Maltese Falcon, Double Indemnity,
    and The Third Man.

    The finished image should resemble an authentic
    frame from a beautifully photographed classic
    black-and-white motion picture.

    ARTISTIC STYLE:
    Render the entire scene in sophisticated,
    photorealistic black-and-white cinematography.

    Use rich monochrome tones, deep blacks,
    luminous highlights, carefully controlled
    midtones, and dramatic tonal contrast.

    Emphasise the distinctive photographic
    craftsmanship of mid-twentieth-century cinema.

    Incorporate subtle analogue film grain,
    natural photographic textures, elegant
    lighting, and carefully composed framing.

    The image should feel cinematic,
    atmospheric, timeless, and visually refined.

    Avoid modern digital colour grading,
    cartoon illustration, graphic-novel artwork,
    and artificial three-dimensional rendering.

    CHARACTER AND IDENTITY PRESERVATION:
    If a reference image is provided, preserve
    the subject's recognisable identity,
    facial features, hairstyle, expression,
    approximate age, and defining characteristics.

    Translate the subject into the visual world
    of classic black-and-white cinema while
    maintaining their individual appearance.

    Preserve distinctive hairstyles, facial hair,
    glasses, accessories, and recognisable
    elements of the original clothing.

    Hairstyles may be adapted into elegant
    mid-twentieth-century arrangements
    where appropriate to the scene.

    Preserve the user's requested pose,
    activity, expression, and composition.

    Do not automatically transform the subject
    into a detective, criminal, journalist,
    or other familiar film-noir archetype.

    The subject's identity and intended role
    should remain determined by the user's
    original prompt.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    PERIOD FASHION AND APPEARANCE:
    Where appropriate, incorporate elegant
    fashion inspired by the 1940s and 1950s.

    Clothing may include tailored suits,
    waistcoats, trench coats, overcoats,
    collared shirts, ties, and traditional hats.

    Other period garments may include
    tailored dresses, structured jackets,
    elegant coats, and classic evening wear.

    Accessories may include leather gloves,
    traditional handbags, pocket watches,
    and period-appropriate jewellery.

    Clothing should feature realistic
    fabric textures, convincing folds,
    and carefully defined shadow shapes.

    Preserve the subject's requested
    clothing and personal style
    wherever possible.

    Do not automatically add trench coats,
    fedoras, or other stereotypical
    detective accessories.

    Clothing should reflect the subject's
    activity, personality, and environment.

    BLACK-AND-WHITE PHOTOGRAPHY:
    The entire image should be presented
    in a cohesive monochrome palette.

    Use deep, rich blacks, bright whites,
    and carefully controlled shades of grey.

    Create strong tonal separation between
    characters, clothing, architecture,
    and environmental details.

    Preserve subtle tonal variation
    in faces, fabrics, and materials.

    Highlights should feel luminous
    without appearing digitally overexposed.

    Shadows should be expressive
    while retaining important visual detail.

    Do not introduce selective colour,
    coloured lighting, or modern
    cinematic colour effects.

    The finished image should feel
    authentically black and white.

    CHIAROSCURO LIGHTING:
    Use dramatic chiaroscuro lighting
    inspired by classic film-noir
    cinematography.

    Emphasise the interplay between
    bright illumination and deep shadow.

    Strong directional lighting may
    create expressive silhouettes,
    carefully shaped facial highlights,
    and dramatic environmental contrast.

    Window light may create striking
    geometric patterns across walls,
    furniture, and architectural details.

    Venetian blinds may cast distinctive
    parallel shadows where appropriate.

    Street lamps, illuminated windows,
    and traditional interior lighting
    may create atmospheric pools of light.

    Preserve clear visibility of the
    primary subject's defining features.

    Do not automatically obscure
    the entire face in darkness.

    Lighting should support the user's
    intended mood and composition.

    FILM NOIR ENVIRONMENTS:
    Preserve the user's requested subject,
    actions, composition, and important
    environmental details.

    Reinterpret the surrounding environment
    through classic monochrome cinematography.

    Potential settings include atmospheric
    city streets, traditional offices,
    elegant apartments, railway stations,
    hotel interiors, cafés, theatres,
    and mid-century urban architecture.

    Urban environments may feature
    period buildings, street lamps,
    illuminated shop windows,
    traditional vehicles, and
    carefully composed architectural lines.

    Interior environments may feature
    wooden desks, upholstered chairs,
    decorative lamps, telephones,
    filing cabinets, and
    period furnishings.

    Outdoor environments may feature
    dramatic skies, atmospheric streets,
    expressive shadows, and
    strong architectural silhouettes.

    However, do not automatically
    relocate every scene to a
    dark alley or detective's office.

    Preserve the user's requested
    location wherever possible.

    RAIN AND ATMOSPHERE:
    Rain-soaked streets and reflective
    urban surfaces are recognisable
    elements of classic noir imagery.

    Where appropriate, incorporate
    wet pavements, subtle atmospheric
    haze, illuminated reflections,
    and softly diffused street lighting.

    Rain may enhance the mood
    of an urban night scene.

    However, rain, fog, and
    atmospheric haze should remain
    optional environmental details.

    Do not automatically make
    every scene rainy, gloomy,
    or set during the night.

    Daytime scenes should retain
    beautiful monochrome photography
    and expressive natural lighting.

    PERIOD ARCHITECTURE AND OBJECTS:
    Where appropriate, incorporate
    architectural and decorative
    influences from the 1930s,
    1940s, and 1950s.

    Buildings may feature Art Deco
    details, traditional masonry,
    elegant staircases, and
    period shopfronts.

    Interiors may include polished
    wooden furniture, traditional
    lamps, rotary telephones,
    analogue clocks, and
    classic office equipment.

    Vehicles may include historically
    inspired mid-century cars,
    taxis, and public transport.

    Objects should feel naturally
    integrated into the scene.

    Avoid unnecessary modern digital
    devices and contemporary
    architectural details when
    creating a period setting.

    COMPOSITION AND CINEMATOGRAPHY:
    Use the distinctive visual language
    of classic Hollywood cinematography.

    Compose scenes with expressive
    framing, strong silhouettes,
    carefully controlled perspective,
    and striking arrangements of light
    and shadow.

    Where appropriate, use dramatic
    camera angles, architectural
    framing, and carefully arranged
    foreground elements.

    Low-angle compositions may emphasise
    impressive architecture or
    dramatic visual presence.

    Close-up portraits may feature
    elegant facial lighting,
    natural expressions, and
    beautifully defined tonal contrast.

    Wider compositions may feature
    atmospheric streets, layered
    architecture, and strong
    geometric shadow patterns.

    Preserve the user's requested
    camera angle, pose, activity,
    and overall composition.

    Do not automatically introduce
    exaggerated camera angles
    or theatrical character poses.

    FILM TEXTURE AND PRESENTATION:
    Incorporate subtle characteristics
    of traditional analogue
    motion-picture photography.

    Use delicate film grain,
    natural photographic softness,
    carefully controlled contrast,
    and authentic tonal transitions.

    The image may feature the
    visual character of classic
    35mm black-and-white film.

    Maintain high image quality
    and clearly defined subjects.

    Avoid excessive grain,
    artificial scratches,
    damaged-film effects,
    and heavy photographic distortion.

    The result should resemble
    a beautifully preserved
    cinematic film frame.

    MOOD AND STORYTELLING:
    Film noir is associated with
    mystery, atmosphere, introspection,
    sophisticated dialogue,
    and expressive visual storytelling.

    However, its cinematographic style
    can also be applied to everyday
    activities and ordinary subjects.

    Match the emotional atmosphere
    to the user's original intentions.

    Peaceful scenes may feature
    elegant monochrome photography,
    gentle lighting, and
    beautifully composed surroundings.

    Dramatic scenes may feature
    stronger contrasts, expressive
    shadows, and atmospheric framing.

    Romantic scenes may feature
    soft highlights, refined
    period fashion, and
    intimate cinematic composition.

    Urban scenes may feature
    impressive architecture,
    luminous street lighting,
    and carefully balanced shadows.

    Do not automatically introduce
    detectives, criminal activity,
    threatening characters,
    or unrelated dramatic events.

    The visual aesthetic should
    enhance the user's requested
    story rather than replace it.

    VISUAL CONSISTENCY:
    The entire image should share
    a cohesive classic film-noir
    photographic aesthetic.

    Characters, environments,
    objects, clothing, and
    architectural details should
    feature consistent monochrome
    lighting and tonal treatment.

    Maintain believable perspective,
    realistic material textures,
    and natural photographic detail.

    Avoid comic-book inking,
    illustrated halftone textures,
    anime cel shading, and
    stylised cartoon outlines.

    This theme should resemble
    classic live-action cinema,
    not a graphic novel.

    FINAL PRESENTATION:
    Produce a striking black-and-white
    cinematic image featuring dramatic
    chiaroscuro lighting, rich tonal
    contrast, elegant composition,
    and authentic analogue film texture.

    The finished image should resemble
    a professionally photographed
    frame from a classic Hollywood
    film-noir production.

    Prioritise recognisable subjects,
    expressive lighting, sophisticated
    cinematography, atmospheric
    environments, and timeless
    monochrome photography.

    Avoid automatic detective costumes,
    unnecessary rain or fog,
    excessive darkness,
    modern colour effects,
    and unrelated narrative elements.

    Do not add titles, captions,
    subtitles, logos, borders,
    or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be presented.

    Preserve the user's creative intentions
    while consistently applying the
    distinctive monochrome cinematography
    and atmospheric visual language
    of classic film noir.
  `,
  },
  {
    name: "WATERCOLOUR",
    prompt: `
    VISUAL THEME: FINE-ART WATERCOLOUR PAINTING

    Transform the requested image or scene into a beautiful,
    professionally executed traditional watercolour painting.

    Draw inspiration from the craftsmanship of accomplished
    fine-art watercolour painters, combining delicate pigment
    washes, expressive brushwork, natural colour transitions,
    and the distinctive texture of watercolour paper.

    The finished image should resemble an original painting
    created by a skilled artist using genuine watercolour
    pigments on high-quality artist's paper.

    ARTISTIC STYLE:
    Render the entire scene using authentic traditional
    watercolour painting techniques.

    Emphasise translucent layers of pigment, soft colour
    transitions, delicate brushstrokes, organic edges,
    and naturally flowing washes.

    Use the visual characteristics of real watercolour,
    including subtle pigment granulation, controlled
    colour bleeding, gentle blooms, and variations
    in pigment concentration.

    Allow areas of colour to merge naturally,
    creating soft transitions and expressive
    painterly textures.

    Maintain a sophisticated balance between
    carefully painted detail and loose,
    spontaneous artistic expression.

    Avoid photographic rendering, glossy digital
    illustration, heavy oil-paint textures,
    and artificial filter-like effects.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve
    the subject's recognisable identity,
    facial features, hairstyle, expression,
    approximate age, and defining characteristics.

    Translate the subject into an elegant
    watercolour portrait while retaining
    their individual appearance.

    Preserve distinctive hairstyles, facial hair,
    glasses, accessories, clothing colours,
    and other recognisable visual features.

    Facial details should be expressed through
    carefully controlled pigment washes,
    delicate brushwork, and subtle tonal variation.

    Use sufficient detail to maintain
    recognisable identity without introducing
    photographic sharpness.

    Hairstyles may be represented through
    flowing brushstrokes, layered pigment,
    and expressive colour shapes.

    Preserve the subject's requested pose,
    activity, personality, and composition.

    Do not automatically change the subject's
    clothing, occupation, environment,
    or intended activity.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    WATERCOLOUR PIGMENTS:
    Use the distinctive appearance of
    traditional watercolour pigments
    suspended in water.

    Colours should appear translucent,
    luminous, and naturally layered.

    Incorporate gentle variations
    in pigment density, allowing
    lighter washes to reveal
    the underlying paper.

    Darker areas may feature
    carefully layered washes
    rather than heavy opaque paint.

    Pigments may gather subtly
    along the edges of washes,
    creating natural watercolour
    boundaries and textures.

    Use harmonious colour relationships
    and elegant tonal transitions.

    Avoid overly saturated digital
    colours and unnaturally
    uniform colour fills.

    BRUSHWORK AND PAINTING TECHNIQUE:
    Incorporate authentic watercolour
    brushwork throughout the image.

    Use a combination of broad,
    flowing washes and delicate
    detail-oriented brushstrokes.

    Soft brushes may create
    atmospheric colour transitions,
    while finer brushes may define
    important features and textures.

    Allow some edges to remain
    soft and gently blended.

    Use sharper painted edges
    selectively to establish
    important forms and details.

    Maintain the natural variation
    associated with hand-painted artwork.

    Avoid mechanical outlines,
    uniform digital strokes,
    and excessively precise
    computer-generated rendering.

    WET-ON-WET TECHNIQUE:
    Use wet-on-wet painting effects
    where appropriate.

    Allow pigments to diffuse gently
    into neighbouring areas,
    creating soft transitions,
    organic colour movement,
    and atmospheric washes.

    This technique may be especially
    effective for skies, clouds,
    water, foliage, and
    softly illuminated backgrounds.

    Colour bleeding should appear
    natural and artistically controlled.

    Avoid excessive uncontrolled
    spreading that obscures
    the primary subject.

    WET-ON-DRY TECHNIQUE:
    Use wet-on-dry brushwork
    to define important shapes,
    edges, and recognisable details.

    Apply carefully controlled
    pigment strokes to create
    architectural features,
    clothing folds, facial details,
    and environmental textures.

    Balance these more defined
    areas with softer washes
    elsewhere in the composition.

    The result should feel
    both expressive and precise.

    WATERCOLOUR PAPER:
    Present the artwork as though
    painted on high-quality,
    lightly textured cotton
    watercolour paper.

    Incorporate subtle paper grain,
    natural pigment absorption,
    and delicate surface variation.

    The texture should be visible
    without overwhelming the artwork.

    Pigments should appear to interact
    naturally with the paper fibres.

    Areas of untouched paper may
    remain visible as highlights
    or intentional negative space.

    Avoid artificial canvas textures,
    heavy cracking, distressed surfaces,
    and excessive paper ageing.

    COLOUR PALETTE:
    Use an elegant, harmonious
    watercolour colour palette.

    Potential colours include
    soft blues, sage greens,
    warm ochres, delicate pinks,
    muted purples, earthy browns,
    and gentle golden tones.

    Brighter colours may be used
    where appropriate to the
    original subject or scene.

    Preserve important colours
    from the user's reference image.

    A brightly coloured subject
    should remain recognisably
    colourful in the painting.

    A subdued scene may feature
    more restrained pigment washes.

    Do not automatically make
    every watercolour painting
    pale, faded, or pastel.

    PORTRAIT PAINTING:
    For portraits, use refined
    watercolour techniques to
    preserve recognisable features
    and natural expressions.

    Build facial forms through
    delicate layers of colour,
    carefully controlled shadows,
    and expressive brushwork.

    Use subtle tonal transitions
    to suggest depth and form.

    Hair may feature flowing
    strokes, layered colour,
    and selective fine detail.

    Clothing may feature
    soft pigment washes,
    delicate fabric folds,
    and expressive colour shapes.

    Preserve the personality
    and individuality of the subject.

    Avoid excessive abstraction
    that makes the person
    difficult to recognise.

    LANDSCAPES AND NATURAL ENVIRONMENTS:
    For landscape scenes, use
    traditional watercolour
    techniques to create
    atmospheric natural beauty.

    Skies may feature broad
    translucent washes,
    soft cloud formations,
    and gentle colour gradients.

    Trees and foliage may feature
    layered greens, organic
    brushwork, and subtle
    pigment granulation.

    Water may feature flowing
    washes, delicate reflections,
    and soft colour transitions.

    Mountains and distant landscapes
    may feature atmospheric perspective
    and gradually softened detail.

    Preserve the user's requested
    location and environmental features.

    ARCHITECTURE AND URBAN SCENES:
    Buildings and city environments
    should be represented using
    elegant architectural watercolour.

    Use carefully painted lines,
    delicate washes, and
    expressive structural details.

    Architecture may feature
    subtle ink-like brushwork
    where appropriate, but
    should remain primarily
    a watercolour painting.

    Brickwork, stone, timber,
    glass, and other materials
    should be suggested through
    pigment variation and
    selective painted detail.

    Urban scenes may feature
    softly rendered backgrounds
    and carefully defined
    architectural landmarks.

    Preserve recognisable buildings
    and important environmental details.

    OBJECTS AND STILL LIFE:
    Everyday objects should be
    translated into authentic
    watercolour painting.

    Use delicate pigment washes,
    carefully controlled edges,
    and natural tonal variation.

    Objects should remain
    clearly recognisable while
    adopting a painterly appearance.

    Metallic objects may feature
    subtle reflected highlights.

    Glass objects may feature
    transparent washes and
    carefully preserved white areas.

    Fabrics may feature flowing
    brushwork and gentle shadows.

    Avoid photographic material
    textures and digital
    three-dimensional rendering.

    LIGHTING AND ATMOSPHERE:
    Represent lighting through
    traditional watercolour techniques.

    Use the brightness of the
    paper to create luminous
    highlights and delicate
    areas of reflected light.

    Shadows may be represented
    through layered transparent
    washes and carefully chosen
    complementary colours.

    Daylight scenes may feature
    warm, luminous pigments
    and gentle atmospheric depth.

    Evening scenes may feature
    rich sunset colours,
    delicate gradients, and
    expressive shadow washes.

    Interior scenes may feature
    warm colour relationships
    and softly rendered light.

    Avoid artificial photographic
    lighting effects and
    excessive digital glow.

    COMPOSITION AND ARTISTIC BALANCE:
    Present the image as a
    thoughtfully composed
    fine-art watercolour painting.

    Preserve the user's requested
    camera angle, framing,
    pose, and overall composition.

    Use a balance of detailed
    focal areas and looser
    supporting brushwork.

    Important subjects should
    remain clearly recognisable.

    Backgrounds may feature
    softer washes and
    reduced detail to direct
    attention towards the subject.

    Allow natural negative space
    where it improves the painting.

    However, do not automatically
    remove important background
    details or replace every
    environment with blank paper.

    The composition should
    remain faithful to the
    user's original intentions.

    PAINTERLY EXPRESSION:
    The artwork should demonstrate
    the expressive qualities
    of traditional watercolour.

    Incorporate subtle variations
    in brush pressure, pigment
    density, edge softness,
    and colour diffusion.

    Allow gentle irregularities
    that suggest genuine
    hand-painted craftsmanship.

    Maintain a refined balance
    between realism and
    artistic interpretation.

    The painting should feel
    spontaneous yet accomplished.

    Avoid excessive abstraction,
    uncontrolled splashes,
    or random decorative marks
    that distract from the subject.

    MOOD AND STORYTELLING:
    Watercolour painting can convey
    peacefulness, elegance,
    warmth, nostalgia, adventure,
    and many other emotions.

    Match the emotional atmosphere
    to the user's original request.

    Peaceful scenes may feature
    delicate washes, gentle
    colours, and soft transitions.

    Cheerful scenes may feature
    vibrant pigments and
    lively expressive brushwork.

    Dramatic scenes may feature
    stronger tonal contrasts,
    richer pigments, and
    more energetic brushstrokes.

    Portraits may feature
    refined detail and
    subtle emotional expression.

    Preserve the user's intended
    narrative and emotional tone.

    ARTISTIC CONSISTENCY:
    The entire image should
    appear to have been painted
    using the same traditional
    watercolour medium.

    Characters, objects,
    architecture, landscapes,
    and background details
    should share consistent
    pigment behaviour,
    brushwork, and paper texture.

    Avoid mixing photographic
    elements with painted subjects.

    Avoid glossy digital shading,
    thick oil-paint impasto,
    plastic-looking CGI,
    and unrelated illustration styles.

    The finished artwork should
    resemble a genuine physical
    watercolour painting rather
    than a digitally filtered image.

    FINAL PRESENTATION:
    Produce an elegant, beautifully
    executed fine-art watercolour
    painting featuring translucent
    pigments, expressive brushwork,
    delicate colour bleeding,
    subtle paper texture, and
    sophisticated artistic composition.

    The finished image should
    resemble an original work
    created by an accomplished
    traditional watercolour artist.

    Prioritise recognisable subjects,
    natural pigment behaviour,
    harmonious colours,
    authentic paper texture,
    and refined painterly detail.

    Avoid photographic sharpness,
    artificial digital filters,
    excessive paint splashes,
    heavy outlines, and
    unrelated artistic effects.

    Do not add signatures,
    captions, logos, borders,
    or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be painted.

    Preserve the user's creative intentions
    while consistently applying the
    distinctive visual qualities
    of traditional fine-art watercolour.
  `,
  },
  {
    name: "HUNDERTWASSER",
    prompt: `
    VISUAL THEME: FRIEDENSREICH HUNDERTWASSER

    Transform the requested image or scene into a richly
    coloured, imaginative artwork inspired by the distinctive
    artistic language of Austrian painter and architect
    Friedensreich Hundertwasser.

    Draw inspiration from his organic compositions,
    flowing irregular lines, concentric patterns,
    expressive colour relationships, decorative
    surfaces, and celebration of the natural world.

    The finished image should resemble an original
    fine-art painting inspired by Hundertwasser's
    imaginative and unconventional visual philosophy.

    ARTISTIC STYLE:
    Render the entire scene as an elaborate,
    colourful, two-dimensional fine-art painting.

    Use flowing organic shapes, irregular contours,
    intricate decorative patterns, and vibrant
    contrasting colours.

    Reject rigid geometric perfection in favour
    of expressive, handcrafted irregularity.

    Straight lines should be minimised wherever
    the subject and composition allow.

    Forms should appear naturally curved,
    gently distorted, and rhythmically arranged.

    Combine richly coloured painted surfaces
    with intricate ornamental details and
    expressive visual movement.

    The image should feel imaginative,
    joyful, unconventional, and unmistakably
    influenced by Hundertwasser's paintings.

    Avoid photorealism, conventional perspective,
    glossy CGI, minimalist illustration,
    and mechanically perfect geometry.

    CHARACTER AND SUBJECT PRESERVATION:
    If a reference image is provided, preserve
    the subject's recognisable identity,
    hairstyle, expression, approximate age,
    and defining visual characteristics.

    Translate the subject into a stylised
    painted representation while maintaining
    enough distinctive detail for recognition.

    Preserve recognisable hairstyles,
    facial hair, glasses, accessories,
    clothing colours, and personal features.

    Faces may be simplified and surrounded
    by decorative painted patterns,
    but should retain their individuality.

    Hair may be represented through
    flowing painted shapes, rhythmic
    colour patterns, and expressive contours.

    Clothing may incorporate decorative
    colour regions and organic patterns
    while retaining its recognisable form.

    Preserve the subject's requested pose,
    activity, personality, and composition.

    Do not automatically transform
    human subjects into abstract shapes
    that are impossible to recognise.

    If no reference image is provided,
    create the subject entirely from
    the user's written description.

    ORGANIC LINES AND FORMS:
    Use the distinctive irregular
    flowing lines associated with
    Hundertwasser's visual language.

    Lines should curve, wander,
    spiral, and gently undulate
    across the composition.

    Avoid excessive reliance
    on perfectly straight edges,
    uniform grids, and
    rigid symmetrical structures.

    Buildings, landscapes, and
    decorative surfaces may feature
    intentionally uneven contours.

    Forms should feel handcrafted,
    expressive, and organically connected.

    Preserve the recognisable structure
    of important subjects and objects
    despite the stylisation.

    SPIRALS AND CONCENTRIC PATTERNS:
    Incorporate expressive spiral
    motifs and concentric colour
    patterns where appropriate.

    Spirals may appear in backgrounds,
    landscapes, architectural surfaces,
    clothing decoration, or
    imaginative environmental details.

    Use nested bands of colour
    that expand, curve, and
    flow organically.

    These patterns should contribute
    to the overall composition
    rather than overwhelm it.

    Do not automatically place
    a large spiral over every
    subject or facial feature.

    Spirals should feel naturally
    integrated into the painting.

    COLOUR PALETTE:
    Use rich, vibrant, highly
    expressive colour combinations.

    Potential colours include
    deep cobalt blue, emerald green,
    vivid red, golden yellow,
    turquoise, violet, orange,
    magenta, and warm earth tones.

    Combine saturated colours
    with carefully balanced
    darker regions and
    contrasting colour bands.

    Use unexpected but harmonious
    colour relationships.

    Colours may appear in
    irregular patches, nested
    patterns, flowing regions,
    and decorative painted shapes.

    Preserve important colours
    from the user's original subject.

    Avoid making the image
    uniformly neon or
    excessively fluorescent.

    The palette should feel
    painterly, sophisticated,
    and deliberately composed.

    PAINTED SURFACES AND TEXTURE:
    Give the artwork the appearance
    of a carefully constructed
    traditional painting.

    Use visible painted surfaces,
    layered colour regions,
    subtle brush textures,
    and handcrafted detail.

    Colour areas may feature
    slight variations in
    pigment density and
    surface texture.

    Decorative patterns should
    appear deliberately painted
    rather than digitally repeated.

    The surface may suggest
    traditional mixed-media
    painting techniques.

    Avoid glossy plastic textures,
    photographic materials,
    and artificial digital gradients.

    ARCHITECTURE AND BUILDINGS:
    Where architecture appears,
    reinterpret it through
    Hundertwasser-inspired
    organic architectural design.

    Buildings may feature
    undulating walls,
    irregular rooflines,
    colourful façades,
    uneven window arrangements,
    and imaginative decorative surfaces.

    Windows may vary in size,
    shape, colour, and placement.

    Architectural details may
    feature flowing mosaics,
    colourful columns,
    rounded forms, and
    expressive ornamentation.

    Roofs and balconies may
    incorporate vegetation
    and natural forms.

    Buildings should feel
    playful, individual,
    and organically integrated
    into their surroundings.

    Preserve the recognisable
    purpose and structure
    of important buildings.

    Do not automatically replace
    every environment with
    a famous Hundertwasser building.

    NATURE AND ENVIRONMENT:
    Nature should play an important
    role in the visual composition
    where appropriate.

    Trees may feature rounded,
    spiralling, or rhythmically
    layered forms.

    Hills, rivers, clouds,
    and landscapes may feature
    flowing contours and
    expressive colour patterns.

    Vegetation may interact
    imaginatively with architecture,
    suggesting a close relationship
    between human environments
    and the natural world.

    Natural forms should appear
    lively, colourful, and
    organically connected.

    However, do not automatically
    introduce forests, trees,
    or elaborate landscapes
    into every composition.

    Preserve the user's
    requested setting and
    environmental details.

    DECORATIVE PATTERNS:
    Incorporate intricate,
    handcrafted decorative
    patterns throughout the artwork.

    Patterns may feature
    irregular stripes,
    nested colour regions,
    concentric shapes,
    mosaic-like arrangements,
    and flowing ornamental lines.

    Repetition should feel
    organic rather than mechanical.

    Avoid perfectly uniform
    digital patterns or
    mathematically precise grids.

    Decorative elements should
    enhance the composition
    without obscuring the
    primary subject.

    PERSPECTIVE AND COMPOSITION:
    Use expressive, unconventional
    spatial arrangements inspired
    by Hundertwasser's paintings.

    Perspective may be gently
    flattened, simplified,
    or intentionally distorted.

    Buildings and landscapes
    may feature imaginative
    proportions and irregular
    spatial relationships.

    Use flowing lines and
    decorative colour regions
    to guide the viewer's eye.

    Preserve the user's requested
    subject placement, pose,
    activity, and composition.

    The primary subject should
    remain visually prominent
    and recognisable.

    Avoid excessive abstraction
    that destroys the meaning
    of the original image.

    MOOD AND ARTISTIC EXPRESSION:
    Hundertwasser-inspired artwork
    should celebrate individuality,
    imagination, colour,
    and organic visual harmony.

    The atmosphere may feel
    joyful, dreamlike,
    contemplative, whimsical,
    or visually exuberant.

    Match the emotional tone
    to the user's original request.

    Peaceful scenes may feature
    flowing organic shapes
    and harmonious colour patterns.

    Energetic scenes may feature
    stronger contrasts,
    more intricate ornamentation,
    and dynamic visual rhythms.

    Portraits may feature
    expressive decorative backgrounds
    while retaining the subject's
    recognisable identity.

    Do not automatically introduce
    unrelated characters,
    fantastical creatures,
    or narrative elements.

    ARTISTIC CONSISTENCY:
    The entire image should share
    a cohesive Hundertwasser-inspired
    painting aesthetic.

    Characters, buildings,
    landscapes, objects,
    and backgrounds should
    feature consistent
    organic linework,
    expressive colours,
    and decorative patterns.

    Avoid combining realistic
    photographic subjects
    with unrelated abstract
    painted backgrounds.

    All elements should feel
    part of the same
    handcrafted artwork.

    Maintain a careful balance
    between decorative abstraction
    and recognisable subject matter.

    FINAL PRESENTATION:
    Produce a richly coloured,
    beautifully composed,
    Hundertwasser-inspired
    fine-art painting.

    Emphasise flowing organic
    lines, concentric patterns,
    irregular architecture,
    vibrant colour relationships,
    handcrafted textures,
    and imaginative decorative detail.

    The finished artwork should
    feel original, expressive,
    joyful, and visually distinctive.

    Prioritise recognisable subjects,
    organic forms, rich colour,
    sophisticated composition,
    and cohesive painterly craftsmanship.

    Avoid photorealism,
    rigid geometric perfection,
    generic abstract patterns,
    and unrelated illustration styles.

    Do not add signatures,
    captions, logos, borders,
    or promotional typography
    unless explicitly requested.

    IMPORTANT:
    The user's original prompt determines
    WHAT appears in the image.

    These theme instructions determine
    HOW the subject and environment
    should be painted.

    Preserve the user's creative intentions
    while consistently applying the
    distinctive organic, colourful,
    and imaginative artistic language
    inspired by Friedensreich Hundertwasser.
  `,
  },
];

const getThemePrompt = (theme) => {
  const themePrompt = themePrompts.find((tp) => tp.name === theme);

  return themePrompt?.prompt || "";
};

module.exports = getThemePrompt;
