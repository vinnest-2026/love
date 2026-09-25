/**
 * VŨ TRỤ TÌNH YÊU - BRUCE LONG & THỊ HẠNH
 * 3D Cosmic Galaxy of Love with Three.js
 * Author: Antigravity AI
 */

// ============================================================================
// 1. DATA: NAMES, NICKNAMES & ROMANTIC QUOTES
// ============================================================================
const LOVE_DATA = {
  herNames: [
    "Thị Hạnh 💕", "Hạnh Mèo 🐱", "Hạnh Molly 🌸", "Mèo con ngốc nghếch 🥰",
    "Vợ yêu 💖", "Em bé của anh ✨", "Công chúa nhỏ 👑", "Bà xã yêu quý 💍",
    "Molly xinh đẹp 🌷", "Ngoan xinh yêu 😻", "Trái tim của anh ❤️",
    "Hạnh yêu dấu 🌺", "Cục nợ đáng yêu 💝"
  ],
  hisNames: [
    "Bruce Long 🦁", "Thái Bảo Luật 🛡️", "Vin Nest 🕊️", "Chồng yêu 💓",
    "Long yêu Hạnh 💑", "Bảo vệ em trọn đời 🏰", "Chỗ dựa vững chắc 🌟",
    "Mãi mãi bên em 🔒", "Luật yêu Hạnh vô điều kiện 💖"
  ],
  quotes: [
    "Gặp được em là điều may mắn nhất đời anh 🍀",
    "Dù vũ trụ rộng lớn, mắt anh chỉ có mỗi Hạnh Mèo ✨",
    "Thương em nhiều hơn mỗi ngày trôi qua 🌹",
    "Vợ yêu là bình yên duy nhất của đời anh 🏡",
    "Cảm ơn em đã bước vào cuộc đời anh 💫",
    "Mèo con ngốc nghếch, anh thương em cả đời 🐾",
    "Em là định mệnh ngọt ngào nhất 🍬",
    "Mỗi giây phút bên em đều là vô giá ⏳",
    "Yêu em từ lúc bình minh đến khi hoàng hôn buông 🌅",
    "Bão tố ngoài kia để anh lo, em chỉ cần hạnh phúc 🌈",
    "Vin Nest bay xa, lòng anh vẫn về bên em 🕊️",
    "Trái tim anh chỉ rung động vì Hạnh Molly 💓",
    "Yêu Hạnh hôm nay nhiều hơn hôm qua và ít hơn ngày mai 📈",
    "Em là ngôi sao rực rỡ nhất dải ngân hà 🌌",
    "Long Phụng sum vầy, tình ta thiên thu 🐉🕊️",
    "Chỉ cần em cười, cả thế giới của anh bừng sáng ☀️",
    "Cùng nhau già đi em nhé! 👵👴",
    "Mãi mãi một tình yêu: Bruce Long & Thị Hạnh 💑",
    "Happy Anniversary My Love 🥂",
    "Forever Love 💍",
    "I Love You 3000 💖",
    "You Are My Whole Universe 🪐",
    "Nguyện yêu em đến hơi thở cuối cùng 🫀",
    "Nắm tay em đi qua bốn mùa mưa nắng 🍁❄️🌸",
    "Bên em là nhà, có em là có tất cả 🏰",
    "Em là điều tuyệt vời nhất vũ trụ ban tặng 🎁",
    "Nụ cười của em là ánh dương của đời anh 🌞",
    "Dành trọn thanh xuân và tương lai cho Hạnh Mèo 💎",
    "Vợ yêu ơi, anh yêu em nhất trên đời! 💖",
    "Trọn kiếp này chỉ yêu duy nhất một người 🔒",
    "Hạnh phúc đơn giản là có em bên cạnh ☕",
    "Tình yêu của anh dành cho em lớn hơn cả ngân hà 🌠",
    "Nguyện làm bóng râm che chở cho em suốt đời 🌳",
    "Anh chỉ muốn dành mọi điều tốt đẹp nhất cho em 🎀",
    "My Soulmate - My Queen - Thị Hạnh 👑",
    "Đêm rằm tháng Tám trăng sáng muôn nơi, lòng Chú Cuội chỉ hướng về Chị Hằng Hạnh Mèo 🌕",
    "Nguyện làm Chú Cuội si tình, trọn đời nép bên bóng Chị Hằng Hạnh Molly 🪵💕",
    "Dù cung trăng xa xôi, có em bên cạnh đời anh ấm áp tựa vầng dương 🏮",
    "Trăng rằm đẹp nhất mùa thu, Hạnh Mèo đẹp nhất trọn đời lòng Long 🌸",
    "Bánh trung thu ngọt ngào, nhưng nụ cười của Chị Hằng còn ngọt ngào gấp vạn lần 🥮",
    "Vin Nest chắp cánh Chú Cuội & Chị Hằng - Tình nồng thiên thu 🕊️"
  ]
};

// Mid-Autumn Chị Hằng & Chú Cuội Photos (Giữ nguyên kích thước gốc 100%)
const MID_AUTUMN_PHOTOS = [
  {
    url: 'images/hang_nga_1.jpg',
    role: 'Chị Hằng Nga Kiêu Sa',
    name: 'Thị Hạnh (Molly)',
    badge: '🌙 Chị Hằng Nga • Thị Hạnh 🌸',
    w: 34.5,
    h: 46, // ratio 0.75 (1086 x 1448)
    corner: 'top-left',
    quote: 'Vẻ đẹp dịu dàng kiêu sa của Chị Hằng Hạnh Mèo làm lu mờ cả vầng trăng rằm tháng Tám! Vợ yêu ơi, em là nàng Hằng Nga đẹp nhất trần đời! 💖'
  },
  {
    url: 'images/cuoi_hang_cute.jpg',
    role: 'Chú Cuội & Chị Hằng Nhí Nhảnh',
    name: 'Bruce Long & Hạnh Mèo',
    badge: '🥰 Cuội Long & Hằng Mèo Đùa Vui 🐾',
    w: 34.5,
    h: 46, // ratio 0.75 (1080 x 1440)
    corner: 'top-right',
    quote: 'Dù vũ trụ bao la, Chú Cuội Bruce Long nguyện trọn đời trọn kiếp ở bên trêu đùa, che chở và cưng chiều Chị Hằng Hạnh Mèo! 💕'
  },
  {
    url: 'images/hang_nga_grad.jpg',
    role: 'Chị Hằng Molly Tỏa Nắng',
    name: 'Thị Hạnh',
    badge: '🎓 Chị Hằng Tỏa Nắng • Hạnh Molly 👑',
    w: 27.2,
    h: 46, // ratio 0.591 (1284 x 2172)
    corner: 'bottom-left',
    quote: 'Nụ cười tỏa nắng rạng rỡ như ánh trăng rằm, người con gái tài sắc vẹn toàn luôn là niềm kiêu hãnh rực sáng của anh! 🌟'
  },
  {
    url: 'images/cuoi_hang_dinner.jpg',
    role: 'Cuội & Hằng Hẹn Hò Dưới Trăng',
    name: 'Thái Bảo Luật & Thị Hạnh',
    badge: '💑 Cuội & Hằng Hẹn Hò Trăng Rằm 🌹',
    w: 34.5,
    h: 46, // ratio 0.75 (1536 x 2048)
    corner: 'bottom-right',
    quote: 'Dù ở chốn nhân gian hay trên cung trăng, bình yên và hạnh phúc nhất vẫn là những giây phút ngọt ngào bên cạnh em! 🥂'
  },
  {
    url: 'images/cuoi_hang_party.jpg',
    role: 'Đêm Rằm Đoàn Viên Viên Mãn',
    name: 'Bruce Long & Thị Hạnh',
    badge: '🥮 Đêm Trung Thu Đoàn Viên • Vin Nest 🥂',
    w: 32.6,
    h: 46, // ratio 0.709 (1189 x 1678)
    corner: 'top-center',
    quote: 'Nguyện trọn kiếp này cùng em sum vầy hạnh phúc, tình yêu ta mãi mãi tròn đầy và bền chặt như vầng trăng rằm tháng Tám! 🥮'
  }
];

// Combine all unique texts
const ALL_TEXT_ITEMS = [
  ...LOVE_DATA.herNames,
  ...LOVE_DATA.hisNames,
  ...LOVE_DATA.quotes
];

// ============================================================================
// 2. THREE.JS INITIALIZATION
// ============================================================================
let scene, camera, renderer, controls;
let container = document.getElementById('canvas-container');

let textSprites = [];
let heartMeshes = [];
let starParticles, galaxyParticles;
let dragonsGroup, swiftletsGroup;
let fireworksParticles = [];
let meteorsGroup;
const METEORS_COUNT = 16;
const meteors = [];

// Mid-Autumn Moon & Photo Portals & Lanterns
let moonGroup, superMoonMesh, moonLight;
let photoPortals = [];
let photoPortalsContainer;
let skyLanternsGroup;
const SKY_LANTERNS_COUNT = 28;

let currentShape = 'heart';
let isAutoRotating = true;
let showDragons = true;
let showSwiftlets = true;

const clock = new THREE.Clock();

function initThree() {
  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05020a, 0.0012);

  // Camera
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.set(0, 25, 380);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.6;
  controls.zoomSpeed = 0.8;
  controls.maxDistance = 600;
  controls.minDistance = 60;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.7;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const pinkLight = new THREE.PointLight(0xff2a85, 2.5, 500);
  pinkLight.position.set(0, 50, 100);
  scene.add(pinkLight);

  const goldLight = new THREE.PointLight(0xffd700, 2.0, 500);
  goldLight.position.set(-100, -50, -80);
  scene.add(goldLight);

  const cyanLight = new THREE.PointLight(0x00f2fe, 1.5, 400);
  cyanLight.position.set(100, -30, -50);
  scene.add(cyanLight);

  // Build Universe Elements
  createStarField();
  createTextSprites();
  create3DHearts();
  createLongPhungEffect();
  createVinNestSwiftlets();
  createMeteorShower();
  createSuperMoon();
  createPhotoPortals();
  createSkyLanterns();

  // Events
  window.addEventListener('resize', onWindowResize, false);
  renderer.domElement.addEventListener('pointerdown', onPointerDown, false);
}

// ============================================================================
// 3. BACKGROUND COSMIC STARFIELD
// ============================================================================
function createStarField() {
  const starCount = 3500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);

  const colorPalette = [
    new THREE.Color(0xffffff),
    new THREE.Color(0xff8fab),
    new THREE.Color(0xffd700),
    new THREE.Color(0x9bf6ff)
  ];

  for (let i = 0; i < starCount; i++) {
    const r = THREE.MathUtils.randFloat(150, 1200);
    const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
    const phi = THREE.MathUtils.randFloat(0, Math.PI);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Circular star texture
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.7, 'rgba(255,200,220,0.3)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  const starTexture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    size: 3.5,
    map: starTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  starParticles = new THREE.Points(geometry, material);
  scene.add(starParticles);
}

// ============================================================================
// 3.1. METEOR SHOWER / MƯA SAO BĂNG SYSTEM
// ============================================================================
function createMeteorShower() {
  meteorsGroup = new THREE.Group();

  const meteorColors = [
    0xffffff, // Diamond white
    0xffd700, // Golden starlight
    0xff758c, // Romantic pink
    0x00f2fe, // Cosmic cyan
    0xffc2d1  // Soft rose
  ];

  for (let i = 0; i < METEORS_COUNT; i++) {
    // 1. Line trail
    const lineGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(6); // 2 vertices: head and tail
    lineGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const color = meteorColors[i % meteorColors.length];
    const lineMat = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });

    const meteorLine = new THREE.Line(lineGeom, lineMat);

    // 2. Glowing Head Sprite
    const headCanvas = document.createElement('canvas');
    headCanvas.width = 32;
    headCanvas.height = 32;
    const hCtx = headCanvas.getContext('2d');
    const grad = hCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.7, 'rgba(255, 180, 220, 0.5)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    hCtx.fillStyle = grad;
    hCtx.fillRect(0, 0, 32, 32);

    const headTex = new THREE.CanvasTexture(headCanvas);
    const headMat = new THREE.SpriteMaterial({
      map: headTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const headSprite = new THREE.Sprite(headMat);
    headSprite.scale.set(8, 8, 1);

    const meteorObj = {
      line: meteorLine,
      head: headSprite,
      geometry: lineGeom,
      material: lineMat,
      headMat: headMat,
      active: false,
      timer: Math.random() * 2.5,
      pos: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      length: 60 + Math.random() * 60,
      life: 0,
      maxLife: 0.9,
      speed: 380 + Math.random() * 260
    };

    meteorsGroup.add(meteorLine);
    meteorsGroup.add(headSprite);
    meteors.push(meteorObj);
  }

  scene.add(meteorsGroup);
}

function resetMeteor(m) {
  // Spawn from high skies
  const startX = 140 + Math.random() * 260;
  const startY = 140 + Math.random() * 180;
  const startZ = (Math.random() - 0.5) * 320;

  m.pos.set(startX, startY, startZ);

  // Direction: diagonally down and left
  const dir = new THREE.Vector3(-1.3 - Math.random() * 0.4, -1.0, -0.2 + Math.random() * 0.4).normalize();
  m.velocity.copy(dir).multiplyScalar(m.speed);

  m.length = 65 + Math.random() * 65;
  m.life = 0;
  m.maxLife = 0.8 + Math.random() * 0.6;
  m.active = true;
}

function updateMeteorShower(delta) {
  if (!meteorsGroup) return;

  const dt = Math.min(delta, 0.1);
  const isWaterfall = (currentShape === 'waterfall');

  for (let i = 0; i < meteors.length; i++) {
    const m = meteors[i];

    if (!m.active) {
      // In waterfall mode, meteors shoot 2x more often!
      m.timer -= dt * (isWaterfall ? 2.0 : 1.0);
      if (m.timer <= 0) {
        resetMeteor(m);
      }
      continue;
    }

    m.life += dt;
    if (m.life >= m.maxLife) {
      m.active = false;
      m.timer = (isWaterfall ? 0.2 : 0.5) + Math.random() * (isWaterfall ? 1.2 : 2.5);
      m.material.opacity = 0;
      m.headMat.opacity = 0;
      continue;
    }

    // Move head forward
    m.pos.addScaledVector(m.velocity, dt);

    // Compute tail position
    const tailDir = m.velocity.clone().normalize().negate();
    const tailPos = m.pos.clone().addScaledVector(tailDir, m.length);

    // Smooth fadeIn and fadeOut
    const progress = m.life / m.maxLife;
    let alpha = 0;
    if (progress < 0.2) {
      alpha = progress / 0.2;
    } else if (progress > 0.65) {
      alpha = 1.0 - (progress - 0.65) / 0.35;
    } else {
      alpha = 1.0;
    }

    m.material.opacity = alpha * 0.95;
    m.headMat.opacity = alpha;
    m.head.position.copy(m.pos);

    // Update vertex positions of line
    const posArr = m.geometry.attributes.position.array;
    posArr[0] = m.pos.x;
    posArr[1] = m.pos.y;
    posArr[2] = m.pos.z;
    posArr[3] = tailPos.x;
    posArr[4] = tailPos.y;
    posArr[5] = tailPos.z;
    m.geometry.attributes.position.needsUpdate = true;
  }
}

// ============================================================================
// 3.2. ĐÊM TRUNG THU: SIÊU TRĂNG TRÒN, CHỊ HẰNG - CHÚ CUỘI & ĐÈN TRỜI
// ============================================================================
function generateMoonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Warm Romantic Golden Harvest Moon (Vàng óng ấm áp, không chói, không trắng xóa)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
  bgGrad.addColorStop(0, '#f59e0b');    // Warm amber gold
  bgGrad.addColorStop(0.35, '#fbbf24'); // Luminous warm gold
  bgGrad.addColorStop(0.7, '#d97706');  // Rich amber
  bgGrad.addColorStop(1, '#b45309');    // Deep warm caramel
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Lunar Seas (Biển mặt trăng cổ điển - Vân Chú Cuội gốc đa)
  const seas = [
    { x: 300, y: 180, r: 130, a: 0.45 },
    { x: 440, y: 220, r: 160, a: 0.48 },
    { x: 590, y: 160, r: 120, a: 0.40 },
    { x: 690, y: 270, r: 150, a: 0.42 },
    { x: 260, y: 330, r: 95, a: 0.38 },
    { x: 830, y: 210, r: 110, a: 0.35 },
    { x: 480, y: 350, r: 120, a: 0.40 }
  ];

  seas.forEach(s => {
    const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
    grad.addColorStop(0, `rgba(146, 64, 14, ${s.a})`);
    grad.addColorStop(0.65, `rgba(180, 83, 9, ${s.a * 0.7})`);
    grad.addColorStop(1, 'rgba(217, 119, 6, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Lunar Craters (Hố va chạm ánh trăng vàng mềm mại)
  const craters = [
    { x: 350, y: 380, r: 35 },
    { x: 620, y: 390, r: 42 },
    { x: 500, y: 110, r: 28 },
    { x: 740, y: 140, r: 32 },
    { x: 210, y: 210, r: 26 },
    { x: 880, y: 320, r: 30 }
  ];

  craters.forEach(c => {
    // Outer warm gold rays
    const rayGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r * 2.0);
    rayGrad.addColorStop(0, 'rgba(254, 240, 138, 0.32)');
    rayGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = rayGrad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r * 2.0, 0, Math.PI * 2);
    ctx.fill();

    // Crater pit
    const pitGrad = ctx.createRadialGradient(c.x - c.r * 0.2, c.y - c.r * 0.2, c.r * 0.1, c.x, c.y, c.r);
    pitGrad.addColorStop(0, 'rgba(120, 53, 15, 0.55)');
    pitGrad.addColorStop(0.8, 'rgba(251, 191, 36, 0.35)');
    pitGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
    ctx.fillStyle = pitGrad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Grain speckles
  for (let i = 0; i < 350; i++) {
    const rx = Math.random() * 1024;
    const ry = Math.random() * 512;
    const rad = Math.random() * 2.2 + 0.8;
    ctx.fillStyle = Math.random() < 0.5 ? 'rgba(254, 240, 138, 0.25)' : 'rgba(146, 64, 14, 0.2)';
    ctx.beginPath();
    ctx.arc(rx, ry, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

function createSuperMoon() {
  moonGroup = new THREE.Group();

  const moonTex = generateMoonTexture();
  const moonGeom = new THREE.SphereGeometry(40, 64, 64);
  const moonMat = new THREE.MeshStandardMaterial({
    map: moonTex,
    roughness: 0.85,
    metalness: 0.05,
    emissive: 0x92400e, // warm deep amber, tuyệt đối không trắng xóa
    emissiveMap: moonTex,
    emissiveIntensity: 0.22 // dịu nhẹ, không chói lóa
  });

  superMoonMesh = new THREE.Mesh(moonGeom, moonMat);
  moonGroup.add(superMoonMesh);

  // Vành hào quang trăng vàng dịu đặt PHÍA SAU mặt trăng (z = -12) để không che bề mặt
  const haloCanvas = document.createElement('canvas');
  haloCanvas.width = 128;
  haloCanvas.height = 128;
  const hCtx = haloCanvas.getContext('2d');
  const hGrad = hCtx.createRadialGradient(64, 64, 38, 64, 64, 64);
  hGrad.addColorStop(0, 'rgba(245, 158, 11, 0.55)');
  hGrad.addColorStop(0.65, 'rgba(217, 119, 6, 0.22)');
  hGrad.addColorStop(1, 'rgba(0,0,0,0)');
  hCtx.fillStyle = hGrad;
  hCtx.fillRect(0, 0, 128, 128);

  const haloTex = new THREE.CanvasTexture(haloCanvas);
  const haloMat = new THREE.SpriteMaterial({
    map: haloTex,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });
  const haloSprite = new THREE.Sprite(haloMat);
  haloSprite.scale.set(130, 130, 1);
  haloSprite.position.z = -12;
  moonGroup.add(haloSprite);

  // Ánh sáng trăng ấm vàng lãng mạn
  moonLight = new THREE.PointLight(0xf59e0b, 1.2, 500);
  moonGroup.add(moonLight);

  moonGroup.position.set(0, 0, -25);
  moonGroup.userData = {
    targetPos: new THREE.Vector3(0, 0, -25)
  };

  // MẶC ĐỊNH ẨN: Chỉ hiện ở hiệu ứng Trung Thu!
  moonGroup.visible = false;
  scene.add(moonGroup);
}

function createPhotoLabelCanvas(badgeText) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');

  // Pill Background
  ctx.fillStyle = 'rgba(24, 10, 36, 0.85)';
  ctx.beginPath();
  const x = 10, y = 10, w = 492, h = 80, r = 40;
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();

  // Golden border
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
  ctx.shadowColor = '#ffd700';
  ctx.shadowBlur = 14;
  ctx.stroke();

  // Text
  ctx.font = '700 28px "Mali", cursive, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fffdf0';
  ctx.shadowColor = '#ffbb00';
  ctx.shadowBlur = 10;
  ctx.fillText(badgeText, 256, 50);

  return { canvas, width: canvas.width, height: canvas.height };
}

function createPhotoPortals() {
  photoPortalsContainer = new THREE.Group();
  const textureLoader = new THREE.TextureLoader();

  const CORNER_MAP = {
    'top-left': new THREE.Vector3(-210, 95, 25),
    'top-right': new THREE.Vector3(210, 95, 25),
    'bottom-left': new THREE.Vector3(-210, -90, 25),
    'bottom-right': new THREE.Vector3(210, -90, 25),
    'top-center': new THREE.Vector3(0, 155, 10)
  };

  MID_AUTUMN_PHOTOS.forEach((item, index) => {
    const cardGroup = new THREE.Group();

    // 1. Photo Texture (Giữ nguyên màu sắc gốc 100%, không bị chói)
    const texture = textureLoader.load(item.url);
    texture.minFilter = THREE.LinearFilter;
    if (THREE.SRGBColorSpace) {
      texture.colorSpace = THREE.SRGBColorSpace;
    } else {
      texture.encoding = THREE.sRGBEncoding;
    }

    // 2. Photo Plane (Kích thước gốc theo tỷ lệ, sắc nét, không bo góc/cắt góc)
    const frameGeom = new THREE.PlaneGeometry(item.w, item.h);
    const photoMat = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    });
    const photoMesh = new THREE.Mesh(frameGeom, photoMat);
    cardGroup.add(photoMesh);

    // 3. Ornate Golden Border Wireframe (Vuông vắn, sang trọng)
    const borderGeom = new THREE.EdgesGeometry(frameGeom);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0xffd700,
      linewidth: 2,
      transparent: true,
      opacity: 0.95
    });
    const borderLine = new THREE.LineSegments(borderGeom, borderMat);
    cardGroup.add(borderLine);

    // 4. Label Sprite đặt ngay dưới khung tranh
    const { canvas, width, height } = createPhotoLabelCanvas(item.badge);
    const labelTex = new THREE.CanvasTexture(canvas);
    const labelMat = new THREE.SpriteMaterial({ map: labelTex, transparent: true });
    const labelSprite = new THREE.Sprite(labelMat);
    labelSprite.scale.set(30, 30 * (height / width), 1);
    labelSprite.position.set(0, -(item.h / 2 + 5), 0);
    cardGroup.add(labelSprite);

    // Vị trí nằm bên ngoài các dòng chữ ở các góc
    const defaultPos = CORNER_MAP[item.corner] || new THREE.Vector3(0, 0, 0);
    cardGroup.position.copy(defaultPos);

    cardGroup.userData = {
      isPhotoPortal: true,
      photoData: item,
      photoIndex: index,
      floatOffset: index * 1.25,
      targetPos: defaultPos.clone()
    };

    // MẶC ĐỊNH ẨN: Chỉ hiện ở hiệu ứng Trung Thu!
    cardGroup.visible = false;
    photoPortals.push(cardGroup);
    photoPortalsContainer.add(cardGroup);
  });

  // MẶC ĐỊNH ẨN: Chỉ hiện ở hiệu ứng Trung Thu!
  photoPortalsContainer.visible = false;
  scene.add(photoPortalsContainer);
}

function createSkyLanterns() {
  skyLanternsGroup = new THREE.Group();
  const lanternGeom = new THREE.CylinderGeometry(1.6, 2.2, 4.2, 8);

  for (let i = 0; i < SKY_LANTERNS_COUNT; i++) {
    const isGold = Math.random() < 0.45;
    const mat = new THREE.MeshStandardMaterial({
      color: isGold ? 0xffbb00 : 0xff3311,
      emissive: isGold ? 0xd97706 : 0xee2200,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.1
    });

    const lantern = new THREE.Mesh(lanternGeom, mat);
    const scale = 0.9 + Math.random() * 0.7;
    lantern.scale.set(scale, scale, scale);

    lantern.position.set(
      (Math.random() - 0.5) * 360,
      -220 + Math.random() * 440,
      (Math.random() - 0.5) * 360
    );

    lantern.userData = {
      riseSpeed: 0.45 + Math.random() * 0.55,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: 0.8 + Math.random() * 0.8
    };

    skyLanternsGroup.add(lantern);
  }

  // MẶC ĐỊNH ẨN: Chỉ hiện ở hiệu ứng Trung Thu!
  skyLanternsGroup.visible = false;
  scene.add(skyLanternsGroup);
}

// ============================================================================
// 4. TEXT SPRITES WITH NEON GLOW CANVAS
// ============================================================================
function createTextCanvas(text, isSpecial = false) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Font setup
  const fontSize = isSpecial ? 52 : 38;
  ctx.font = `700 ${fontSize}px "Mali", "Dancing Script", cursive, sans-serif`;

  const textMetrics = ctx.measureText(text);
  const textWidth = Math.ceil(textMetrics.width);
  const paddingX = 40;
  const paddingY = 24;

  canvas.width = textWidth + paddingX * 2;
  canvas.height = fontSize + paddingY * 2;

  // Background rounded pill with subtle glow
  const x = 6;
  const y = 6;
  const w = canvas.width - 12;
  const h = canvas.height - 12;
  const r = h / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pill Path
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();

  // Glass background
  ctx.fillStyle = isSpecial ? 'rgba(255, 42, 133, 0.28)' : 'rgba(20, 8, 28, 0.45)';
  ctx.fill();

  // Border glow
  ctx.lineWidth = isSpecial ? 3 : 1.5;
  ctx.strokeStyle = isSpecial ? 'rgba(255, 215, 0, 0.8)' : 'rgba(255, 117, 140, 0.5)';
  ctx.shadowColor = isSpecial ? '#ffd700' : '#ff2a85';
  ctx.shadowBlur = isSpecial ? 16 : 8;
  ctx.stroke();

  // Text with Glow
  ctx.font = `700 ${fontSize}px "Mali", cursive, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Multi-pass neon text glow
  ctx.shadowColor = isSpecial ? 'rgba(255, 215, 0, 0.9)' : 'rgba(255, 42, 133, 0.9)';
  ctx.shadowBlur = 18;
  ctx.fillStyle = '#ffffff';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  ctx.shadowBlur = 6;
  ctx.fillStyle = isSpecial ? '#fff5cc' : '#ffeef5';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  return { canvas, width: canvas.width, height: canvas.height };
}

function createTextSprites() {
  const group = new THREE.Group();
  const count = ALL_TEXT_ITEMS.length;

  for (let i = 0; i < count; i++) {
    const text = ALL_TEXT_ITEMS[i];
    const isSpecial = LOVE_DATA.herNames.includes(text) || LOVE_DATA.hisNames.includes(text);

    const { canvas, width, height } = createTextCanvas(text, isSpecial);
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const sprite = new THREE.Sprite(material);
    const aspect = width / height;
    const baseScale = isSpecial ? 14 : 10;
    sprite.scale.set(baseScale * aspect, baseScale, 1);

    // Initial random position
    sprite.position.set(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200
    );

    // Store custom metadata
    sprite.userData = {
      text: text,
      isSpecial: isSpecial,
      currentPos: new THREE.Vector3().copy(sprite.position),
      targetPos: new THREE.Vector3(),
      baseScale: baseScale,
      aspect: aspect,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: 0.8 + Math.random() * 0.8,
      fallSpeed: 1.0 + (i % 6) * 0.22 + Math.random() * 0.4,
      waterfallAngle: (i / count) * Math.PI * 4,
      waterfallRadius: 85 + (i % 4) * 30
    };

    textSprites.push(sprite);
    group.add(sprite);
  }

  scene.add(group);
  applyShapeLayout('heart');
}

// ============================================================================
// 5. 3D FLOATING GLOWING HEARTS
// ============================================================================
function createHeartGeometry() {
  const shape = new THREE.Shape();
  const x = 0, y = 0;

  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2.0, y, x, y);
  shape.bezierCurveTo(x - 3.0, y, x - 3.0, y + 3.5, x - 3.0, y + 3.5);
  shape.bezierCurveTo(x - 3.0, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6.0, y + 7.7, x + 8.0, y + 5.5, x + 8.0, y + 3.5);
  shape.bezierCurveTo(x + 8.0, y + 3.5, x + 8.0, y, x + 5.0, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    depth: 1.2,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.6,
    bevelThickness: 0.6
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.center();
  return geom;
}

function create3DHearts() {
  const heartGeom = createHeartGeometry();
  const heartCount = 35;

  for (let i = 0; i < heartCount; i++) {
    const isGold = Math.random() < 0.25;
    const material = new THREE.MeshStandardMaterial({
      color: isGold ? 0xffd700 : (Math.random() < 0.6 ? 0xff1e38 : 0xff2a85),
      emissive: isGold ? 0xffaa00 : 0xaa0033,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.7
    });

    const mesh = new THREE.Mesh(heartGeom, material);
    const scale = 0.6 + Math.random() * 0.8;
    mesh.scale.set(scale, scale, scale);

    mesh.position.set(
      (Math.random() - 0.5) * 240,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 240
    );

    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    mesh.userData = {
      rotSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      baseScale: scale,
      pulseOffset: Math.random() * Math.PI * 2,
      floatSpeed: 0.6 + Math.random() * 0.6,
      fallSpeed: 1.2 + Math.random() * 1.4,
      initialPos: new THREE.Vector3().copy(mesh.position)
    };

    heartMeshes.push(mesh);
    scene.add(mesh);
  }
}

// ============================================================================
// 6. LONG PHỤNG (GOLDEN DRAGON & CRIMSON PHOENIX TRAILS)
// ============================================================================
function createLongPhungEffect() {
  dragonsGroup = new THREE.Group();

  // Dragon (Golden particles ribbon)
  const dragonParticlesCount = 180;
  const dragonGeom = new THREE.BufferGeometry();
  const dragonPositions = new Float32Array(dragonParticlesCount * 3);
  const dragonColors = new Float32Array(dragonParticlesCount * 3);

  for (let i = 0; i < dragonParticlesCount; i++) {
    dragonPositions[i * 3] = 0;
    dragonPositions[i * 3 + 1] = 0;
    dragonPositions[i * 3 + 2] = 0;

    // Golden gradient to yellow
    const ratio = i / dragonParticlesCount;
    dragonColors[i * 3] = 1.0;
    dragonColors[i * 3 + 1] = 0.8 + ratio * 0.2;
    dragonColors[i * 3 + 2] = 0.1;
  }

  dragonGeom.setAttribute('position', new THREE.BufferAttribute(dragonPositions, 3));
  dragonGeom.setAttribute('color', new THREE.BufferAttribute(dragonColors, 3));

  const dragonMaterial = new THREE.PointsMaterial({
    size: 7.0,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  const dragonPoints = new THREE.Points(dragonGeom, dragonMaterial);
  dragonsGroup.add(dragonPoints);

  // Phoenix (Crimson/Rose particles ribbon)
  const phoenixGeom = new THREE.BufferGeometry();
  const phoenixPositions = new Float32Array(dragonParticlesCount * 3);
  const phoenixColors = new Float32Array(dragonParticlesCount * 3);

  for (let i = 0; i < dragonParticlesCount; i++) {
    phoenixPositions[i * 3] = 0;
    phoenixPositions[i * 3 + 1] = 0;
    phoenixPositions[i * 3 + 2] = 0;

    const ratio = i / dragonParticlesCount;
    phoenixColors[i * 3] = 1.0;
    phoenixColors[i * 3 + 1] = 0.15 + ratio * 0.3;
    phoenixColors[i * 3 + 2] = 0.5 + ratio * 0.5;
  }

  phoenixGeom.setAttribute('position', new THREE.BufferAttribute(phoenixPositions, 3));
  phoenixGeom.setAttribute('color', new THREE.BufferAttribute(phoenixColors, 3));

  const phoenixMaterial = new THREE.PointsMaterial({
    size: 7.0,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  const phoenixPoints = new THREE.Points(phoenixGeom, phoenixMaterial);
  dragonsGroup.add(phoenixPoints);

  dragonsGroup.userData = {
    dragonGeom,
    phoenixGeom,
    historyDragon: [],
    historyPhoenix: [],
    maxHistory: dragonParticlesCount
  };

  scene.add(dragonsGroup);
}

// ============================================================================
// 7. CHIM YẾN VIN NEST (SWIFTLET FLOCK WITH FLAPPING WINGS)
// ============================================================================
function createSwiftletModel() {
  const bird = new THREE.Group();

  // Body
  const bodyGeom = new THREE.ConeGeometry(0.8, 4.5, 5);
  bodyGeom.rotateX(Math.PI / 2);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x111122,
    emissive: 0x00f2fe,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.8
  });
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  bird.add(body);

  // Left Wing
  const wingGeom = new THREE.BufferGeometry();
  const wingVertices = new Float32Array([
    0, 0, 0,
    -4.5, 0, -1.5,
    -1.5, 0, 2.0
  ]);
  wingGeom.setAttribute('position', new THREE.BufferAttribute(wingVertices, 3));
  wingGeom.computeVertexNormals();

  const wingMat = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    emissive: 0x00a8ff,
    emissiveIntensity: 0.8,
    side: THREE.DoubleSide
  });

  const leftWing = new THREE.Mesh(wingGeom, wingMat);
  leftWing.position.set(-0.5, 0.2, 0.5);
  bird.add(leftWing);

  // Right Wing
  const rightWingGeom = new THREE.BufferGeometry();
  const rightWingVertices = new Float32Array([
    0, 0, 0,
    4.5, 0, -1.5,
    1.5, 0, 2.0
  ]);
  rightWingGeom.setAttribute('position', new THREE.BufferAttribute(rightWingVertices, 3));
  rightWingGeom.computeVertexNormals();

  const rightWing = new THREE.Mesh(rightWingGeom, wingMat);
  rightWing.position.set(0.5, 0.2, 0.5);
  bird.add(rightWing);

  bird.userData = { leftWing, rightWing, flapSpeed: 14 + Math.random() * 6 };
  return bird;
}

function createVinNestSwiftlets() {
  swiftletsGroup = new THREE.Group();
  const birdCount = 10;

  for (let i = 0; i < birdCount; i++) {
    const bird = createSwiftletModel();
    const scale = 1.0 + Math.random() * 0.5;
    bird.scale.set(scale, scale, scale);

    bird.userData.radius = 110 + Math.random() * 50;
    bird.userData.height = (Math.random() - 0.5) * 80;
    bird.userData.speed = 0.5 + Math.random() * 0.5;
    bird.userData.phase = (i / birdCount) * Math.PI * 2;
    bird.userData.tilt = (Math.random() - 0.5) * 0.4;

    swiftletsGroup.add(bird);
  }

  scene.add(swiftletsGroup);
}

// ============================================================================
// 8. 3D SHAPE MORPHING ALGORITHMS
// ============================================================================
function applyShapeLayout(shapeType) {
  currentShape = shapeType;
  const count = textSprites.length;

  for (let i = 0; i < count; i++) {
    const sprite = textSprites[i];
    const target = sprite.userData.targetPos;

    if (shapeType === 'heart') {
      // 3D Cardioid Heart Equation with layered 3D depth
      const t = (i / count) * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const scaleFactor = 9.2; // Expanded scale for crisp legibility

      // 3D Heart curve
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      const hz = Math.sin(phi) * 65 + (Math.random() - 0.5) * 25;

      target.set(hx * scaleFactor, hy * scaleFactor, hz);
    } else if (shapeType === 'galaxy') {
      // 3D Logarithmic Spiral Galaxy
      const arms = 3;
      const armIndex = i % arms;
      const angle = (i / count) * Math.PI * 6 + (armIndex * (Math.PI * 2 / arms));
      const r = 50 + Math.pow(i / count, 0.75) * 240;

      target.set(
        Math.cos(angle) * r,
        (Math.random() - 0.5) * 60,
        Math.sin(angle) * r
      );
    } else if (shapeType === 'sphere') {
      // 3D Fibonacci Sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 180;

      target.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
    } else if (shapeType === 'cloud') {
      // Floating Cosmic Cloud
      target.set(
        (Math.random() - 0.5) * 360,
        (Math.random() - 0.5) * 240,
        (Math.random() - 0.5) * 360
      );
    } else if (shapeType === 'waterfall') {
      // Cascading waterfall / shower of love messages (Mưa thác nước)
      const angle = (i / count) * Math.PI * 6 + (Math.random() - 0.5) * 0.4;
      const radius = 80 + (i % 4) * 32 + (Math.random() - 0.5) * 20;
      const y = 230 - (i / count) * 460;
      target.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      sprite.userData.waterfallRadius = radius;
      sprite.userData.waterfallAngle = angle;
      sprite.userData.currentPos.copy(target);
    } else if (shapeType === 'moon') {
      // Đêm Trung Thu: Vầng trăng ở tâm, các dòng chữ tình yêu uốn lượn gọn gàng quanh vầng trăng (Bán kính 80 - 128)
      const angle = (i / count) * Math.PI * 4;
      const radius = 80 + (i % 5) * 12;
      const y = Math.sin(angle * 2) * 20 + (Math.random() - 0.5) * 6;
      target.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
    }
  }

  // Cập nhật hiển thị các thành phần Đêm Trung Thu:
  // CHỈ HIỆN Ở HIỆU ỨNG TRUNG THU, CÁC HIỆU ỨNG KHÁC GIỮ NGUYÊN NHƯ CŨ!
  if (shapeType === 'moon') {
    if (moonGroup) {
      moonGroup.visible = true;
      moonGroup.userData.targetPos.set(0, 0, -25);
    }
    if (skyLanternsGroup) {
      skyLanternsGroup.visible = true;
    }
    if (photoPortalsContainer) {
      photoPortalsContainer.visible = true;
    }

    // 5 Khung ảnh nằm hoàn toàn BÊN NGOÀI các dòng chữ, ở 4 góc và đỉnh màn hình
    const CORNER_POSITIONS = [
      new THREE.Vector3(-210, 95, 25),   // Top-Left (Chị Hằng Thị Hạnh)
      new THREE.Vector3(210, 95, 25),    // Top-Right (Chú Cuội & Chị Hằng nhí nhảnh)
      new THREE.Vector3(-210, -90, 25),  // Bottom-Left (Chị Hằng tốt nghiệp)
      new THREE.Vector3(210, -90, 25),   // Bottom-Right (Cuội & Hằng hẹn hò)
      new THREE.Vector3(0, 155, 10)      // Top-Center (Tiệc đêm rằm đoàn viên)
    ];

    photoPortals.forEach((portal, idx) => {
      portal.visible = true;
      const cPos = CORNER_POSITIONS[idx % CORNER_POSITIONS.length];
      portal.userData.targetPos.copy(cPos);
      if (portal.position.lengthSq() < 10) {
        portal.position.copy(cPos);
      }
    });
  } else {
    // ẨN HOÀN TOÀN TRĂNG, ĐÈN TRỜI & HÌNH ẢNH TRONG TẤT CẢ HIỆU ỨNG KHÁC
    if (moonGroup) {
      moonGroup.visible = false;
    }
    if (skyLanternsGroup) {
      skyLanternsGroup.visible = false;
    }
    if (photoPortalsContainer) {
      photoPortalsContainer.visible = false;
    }
    photoPortals.forEach(portal => {
      portal.visible = false;
    });
  }

  // Update 3D hearts for waterfall mode
  if (shapeType === 'waterfall') {
    for (let i = 0; i < heartMeshes.length; i++) {
      const mesh = heartMeshes[i];
      mesh.position.set(
        (Math.random() - 0.5) * 240,
        220 - Math.random() * 440,
        (Math.random() - 0.5) * 240
      );
    }
  } else {
    for (let i = 0; i < heartMeshes.length; i++) {
      const mesh = heartMeshes[i];
      if (mesh.userData.initialPos) {
        mesh.position.lerp(mesh.userData.initialPos, 0.5);
      }
    }
  }

  // Update UI button active states
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.shape === shapeType);
  });
}

// ============================================================================
// 9. FIREWORKS & HEART EXPLOSIONS
// ============================================================================
function triggerHeartFireworks(origin = new THREE.Vector3(0, 0, 0)) {
  const particleCount = 45;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = origin.x;
    positions[i * 3 + 1] = origin.y;
    positions[i * 3 + 2] = origin.z;

    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 4.0;
    const vY = (Math.random() - 0.3) * 4.0;

    velocities.push(new THREE.Vector3(
      Math.cos(angle) * speed,
      vY,
      Math.sin(angle) * speed
    ));
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 6.0,
    color: Math.random() < 0.6 ? 0xff2a85 : 0xffd700,
    transparent: true,
    opacity: 1.0,
    blending: THREE.AdditiveBlending
  });

  const pSystem = new THREE.Points(geometry, material);
  pSystem.userData = { velocities, life: 1.0, maxLife: 1.0 };

  scene.add(pSystem);
  fireworksParticles.push(pSystem);
}

// ============================================================================
// 10. ANIMATION LOOP
// ============================================================================
function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();
  const delta = clock.getDelta();

  // 1. Controls update
  controls.update();

  // 2. Stars subtle rotation
  if (starParticles) {
    starParticles.rotation.y = elapsedTime * 0.02;
    starParticles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.02;
  }

  // 3. Text Sprites Morph & Float / Waterfall Cascade
  if (currentShape === 'waterfall') {
    // Continuous Falling Waterfall Effect (Mưa thác nước các dòng chữ yêu thương)
    for (let i = 0; i < textSprites.length; i++) {
      const sprite = textSprites[i];
      const u = sprite.userData;

      u.currentPos.y -= (u.fallSpeed || 1.2);
      u.waterfallAngle = (u.waterfallAngle || 0) + 0.003;
      u.currentPos.x = Math.cos(u.waterfallAngle) * (u.waterfallRadius || 90);
      u.currentPos.z = Math.sin(u.waterfallAngle) * (u.waterfallRadius || 90);

      // Loop back smoothly to top
      if (u.currentPos.y < -230) {
        u.currentPos.y = 230 + Math.random() * 40;
        u.waterfallAngle = Math.random() * Math.PI * 2;
        u.waterfallRadius = 75 + Math.random() * 85;
        u.currentPos.x = Math.cos(u.waterfallAngle) * u.waterfallRadius;
        u.currentPos.z = Math.sin(u.waterfallAngle) * u.waterfallRadius;
      }

      u.targetPos.copy(u.currentPos);
      sprite.position.copy(u.currentPos);
    }

    // Hearts falling alongside the text waterfall
    for (let i = 0; i < heartMeshes.length; i++) {
      const mesh = heartMeshes[i];
      const u = mesh.userData;
      mesh.position.y -= (u.fallSpeed || 1.3);
      if (mesh.position.y < -230) {
        mesh.position.y = 230 + Math.random() * 40;
        mesh.position.x = (Math.random() - 0.5) * 240;
        mesh.position.z = (Math.random() - 0.5) * 240;
      }
    }
  } else {
    // Smooth lerp to target position for static shapes
    for (let i = 0; i < textSprites.length; i++) {
      const sprite = textSprites[i];
      const u = sprite.userData;

      u.currentPos.lerp(u.targetPos, 0.04);
      const floatY = Math.sin(elapsedTime * u.floatSpeed + u.floatOffset) * 2.0;
      sprite.position.set(
        u.currentPos.x,
        u.currentPos.y + floatY,
        u.currentPos.z
      );
    }
  }

  // 4. 3D Hearts Rotation & Heartbeat Pulse
  for (let i = 0; i < heartMeshes.length; i++) {
    const mesh = heartMeshes[i];
    const u = mesh.userData;

    mesh.rotation.x += u.rotSpeed.x;
    mesh.rotation.y += u.rotSpeed.y;
    mesh.rotation.z += u.rotSpeed.z;

    // Realistic Heartbeat Double Pulse
    const pulseTime = (elapsedTime * 2.2 + u.pulseOffset) % (Math.PI * 2);
    let pulseFactor = 1.0;
    if (pulseTime < 0.4) {
      pulseFactor = 1.0 + Math.sin(pulseTime * Math.PI / 0.4) * 0.18;
    } else if (pulseTime >= 0.5 && pulseTime < 0.9) {
      pulseFactor = 1.0 + Math.sin((pulseTime - 0.5) * Math.PI / 0.4) * 0.12;
    }

    const s = u.baseScale * pulseFactor;
    mesh.scale.set(s, s, s);
  }

  // 5. Long Phụng Movement Trails
  if (showDragons && dragonsGroup) {
    const u = dragonsGroup.userData;

    // Dragon head position (Gold)
    const tD = elapsedTime * 0.7;
    const rD = 90 + Math.sin(tD * 2) * 25;
    const headD = new THREE.Vector3(
      Math.cos(tD) * rD,
      Math.sin(tD * 1.5) * 45,
      Math.sin(tD) * rD
    );

    // Phoenix head position (Crimson/Pink)
    const tP = elapsedTime * 0.7 + Math.PI;
    const rP = 95 + Math.cos(tP * 2) * 25;
    const headP = new THREE.Vector3(
      Math.cos(tP) * rP,
      Math.cos(tP * 1.5) * 45,
      Math.sin(tP) * rP
    );

    u.historyDragon.unshift(headD);
    u.historyPhoenix.unshift(headP);

    if (u.historyDragon.length > u.maxHistory) u.historyDragon.pop();
    if (u.historyPhoenix.length > u.maxHistory) u.historyPhoenix.pop();

    const dPos = u.dragonGeom.attributes.position.array;
    for (let j = 0; j < u.historyDragon.length; j++) {
      dPos[j * 3] = u.historyDragon[j].x;
      dPos[j * 3 + 1] = u.historyDragon[j].y;
      dPos[j * 3 + 2] = u.historyDragon[j].z;
    }
    u.dragonGeom.attributes.position.needsUpdate = true;

    const pPos = u.phoenixGeom.attributes.position.array;
    for (let j = 0; j < u.historyPhoenix.length; j++) {
      pPos[j * 3] = u.historyPhoenix[j].x;
      pPos[j * 3 + 1] = u.historyPhoenix[j].y;
      pPos[j * 3 + 2] = u.historyPhoenix[j].z;
    }
    u.phoenixGeom.attributes.position.needsUpdate = true;
  }

  // 6. Vin Nest Swiftlet Flight & Wing Flapping
  if (showSwiftlets && swiftletsGroup) {
    for (let i = 0; i < swiftletsGroup.children.length; i++) {
      const bird = swiftletsGroup.children[i];
      const bu = bird.userData;

      const angle = elapsedTime * bu.speed + bu.phase;
      const x = Math.cos(angle) * bu.radius;
      const z = Math.sin(angle) * bu.radius;
      const y = Math.sin(elapsedTime * 1.5 + bu.phase) * 35 + bu.height;

      // Position & Look Ahead
      const nextAngle = angle + 0.05;
      const nextX = Math.cos(nextAngle) * bu.radius;
      const nextZ = Math.sin(nextAngle) * bu.radius;
      const nextY = Math.sin((elapsedTime + 0.05) * 1.5 + bu.phase) * 35 + bu.height;

      bird.position.set(x, y, z);
      bird.lookAt(nextX, nextY, nextZ);
      bird.rotateZ(bu.tilt);

      // Flap wings
      const flap = Math.sin(elapsedTime * bu.flapSpeed);
      bu.leftWing.rotation.z = flap * 0.6;
      bu.rightWing.rotation.z = -flap * 0.6;
    }
  }

  // 7. Fireworks Update
  for (let i = fireworksParticles.length - 1; i >= 0; i--) {
    const ps = fireworksParticles[i];
    const u = ps.userData;
    u.life -= 0.02;

    const pos = ps.geometry.attributes.position.array;
    for (let j = 0; j < u.velocities.length; j++) {
      pos[j * 3] += u.velocities[j].x;
      pos[j * 3 + 1] += u.velocities[j].y;
      pos[j * 3 + 2] += u.velocities[j].z;

      u.velocities[j].y -= 0.08; // gravity
    }
    ps.geometry.attributes.position.needsUpdate = true;
    ps.material.opacity = u.life;

    if (u.life <= 0) {
      scene.remove(ps);
      ps.geometry.dispose();
      ps.material.dispose();
      fireworksParticles.splice(i, 1);
    }
  }

  // 8. Meteor Shower Update (Mưa Sao Băng)
  updateMeteorShower(delta);

  // 9. Mid-Autumn Moon, Photo Portals & Sky Lanterns Animation (CHỈ CHẠY KHI Ở HIỆU ỨNG TRUNG THU)
  if (currentShape === 'moon') {
    if (moonGroup && moonGroup.visible) {
      moonGroup.position.lerp(moonGroup.userData.targetPos, 0.035);
      if (superMoonMesh) {
        superMoonMesh.rotation.y += 0.0015;
      }
    }

    // Animate 5 Photo Portals (Chị Hằng & Chú Cuội)
    for (let i = 0; i < photoPortals.length; i++) {
      const portal = photoPortals[i];
      if (!portal.visible) continue;
      const pu = portal.userData;

      portal.position.lerp(pu.targetPos, 0.04);
      const bob = Math.sin(elapsedTime * 1.4 + pu.floatOffset) * 1.2;
      portal.position.y += bob * 0.025;

      // Face camera for crisp view
      portal.lookAt(camera.position);
    }

    // Animate Sky Lanterns (Đèn Trời bay bổng)
    if (skyLanternsGroup && skyLanternsGroup.visible) {
      for (let i = 0; i < skyLanternsGroup.children.length; i++) {
        const lantern = skyLanternsGroup.children[i];
        const lu = lantern.userData;

        lantern.position.y += lu.riseSpeed;
        lantern.position.x += Math.sin(elapsedTime * lu.swaySpeed + lu.swayOffset) * 0.15;
        lantern.rotation.z = Math.sin(elapsedTime * lu.swaySpeed + lu.swayOffset) * 0.1;

        if (lantern.position.y > 240) {
          lantern.position.y = -220;
          lantern.position.x = (Math.random() - 0.5) * 360;
          lantern.position.z = (Math.random() - 0.5) * 360;
        }
      }
    }
  }

  renderer.render(scene, camera);
}

// ============================================================================
// 11. INTERACTION & RAYCASTING
// ============================================================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onPointerDown(event) {
  // Prevent raycast on UI clicks
  if (event.target.closest('.main-controls') || event.target.closest('.top-nav') || event.target.closest('.modal-overlay') || event.target.closest('.playlist-dropdown')) {
    return;
  }

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // 1. Raycast on Photo Portals (CHỈ KHI ĐANG Ở HIỆU ỨNG TRUNG THU)
  if (currentShape === 'moon' && photoPortals && photoPortals.length > 0) {
    const photoMeshes = [];
    photoPortals.forEach(p => {
      if (p.visible) {
        p.traverse(child => {
          if (child.isMesh || child.isSprite) photoMeshes.push(child);
        });
      }
    });

    const portalIntersects = raycaster.intersectObjects(photoMeshes);
    if (portalIntersects.length > 0) {
      let target = portalIntersects[0].object;
      while (target && !target.userData?.isPhotoPortal && target.parent) {
        target = target.parent;
      }
      if (target && target.userData?.photoData) {
        triggerHeartFireworks(target.position);
        showLoveModal(target.userData.photoData.quote, target.userData.photoData);
        return;
      }
    }
  }

  // 2. Raycast on Super Moon (KÍCH VÀO MẶT TRĂNG -> HIỆN HIỆU ỨNG CÁC HÌNH ẢNH & LỜI CHÚC)
  if (currentShape === 'moon' && superMoonMesh && moonGroup && moonGroup.visible) {
    const moonHits = raycaster.intersectObject(superMoonMesh);
    if (moonHits.length > 0) {
      triggerHeartFireworks(moonHits[0].point);
      triggerHeartFireworks(new THREE.Vector3(-45, 25, 0));
      triggerHeartFireworks(new THREE.Vector3(45, 25, 0));
      triggerHeartFireworks(new THREE.Vector3(0, -35, 0));
      showMoonCelebrationModal();
      return;
    }
  }

  // 3. Raycast on Text Sprites
  const intersects = raycaster.intersectObjects(textSprites);
  if (intersects.length > 0) {
    const clickedSprite = intersects[0].object;
    triggerHeartFireworks(clickedSprite.position);
    showLoveModal(clickedSprite.userData.text);
    return;
  }

  // 4. Normal tap in 3D space: launch heart fireworks at tap point
  const worldPoint = new THREE.Vector3(mouse.x * 60, mouse.y * 60, 40);
  triggerHeartFireworks(worldPoint);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================================================
// 12. LOVE MODAL & QUOTES CONTROLLER
// ============================================================================
const modal = document.getElementById('love-modal');
const modalQuote = document.getElementById('modal-quote');
const btnCloseModal = document.getElementById('modal-close');
const btnRandomQuote = document.getElementById('btn-random-quote');
const btnSendHeart = document.getElementById('btn-send-heart');
const modalImgContainer = document.getElementById('modal-img-container');
const modalImg = document.getElementById('modal-img');
const modalImgCaption = document.getElementById('modal-img-caption');
const modalPhotoSwitcher = document.getElementById('modal-photo-switcher');
const modalStamp = document.querySelector('.modal-stamp');

function setupPhotoSwitcher(activeIdx = 0) {
  if (!modalPhotoSwitcher) return;
  modalPhotoSwitcher.innerHTML = '';
  modalPhotoSwitcher.style.display = 'flex';

  MID_AUTUMN_PHOTOS.forEach((photo, idx) => {
    const btn = document.createElement('button');
    btn.className = `photo-thumb-btn ${idx === activeIdx ? 'active' : ''}`;
    btn.textContent = photo.badge.split('•')[0].trim();
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      displayPhotoInModal(idx);
    });
    modalPhotoSwitcher.appendChild(btn);
  });
}

function displayPhotoInModal(idx) {
  const photo = MID_AUTUMN_PHOTOS[idx];
  if (!photo) return;

  if (modalImgContainer) modalImgContainer.style.display = 'flex';
  if (modalImg) modalImg.src = photo.url;
  if (modalImgCaption) modalImgCaption.textContent = photo.badge;
  if (modalStamp) modalStamp.textContent = '🌕 ĐÊM TRUNG THU ĐOÀN VIÊN • CHÚ CUỘI & CHỊ HẰNG';
  modalQuote.textContent = `"${photo.quote}"`;

  if (modalPhotoSwitcher) {
    const btns = modalPhotoSwitcher.querySelectorAll('.photo-thumb-btn');
    btns.forEach((b, bIdx) => {
      b.classList.toggle('active', bIdx === idx);
    });
  }
}

function showMoonCelebrationModal() {
  setupPhotoSwitcher(1); // Mặc định mở ảnh Cuội Long & Hằng Mèo đáng yêu
  displayPhotoInModal(1);
  modalQuote.textContent = '"🌕 Chúc Vợ Yêu Hạnh Mèo một mùa Trung Thu ngập tràn hạnh phúc và yêu thương! Dù trải qua bao mùa trăng, Chú Cuội Bruce Long mãi mãi hướng về ánh trăng Chị Hằng của đời mình! Nguyện kiếp này và muôn kiếp sau, tình yêu chúng ta luôn tròn đầy và tỏa sáng như vầng trăng rằm tháng Tám! 🥮💖"';
  modal.classList.add('open');
}

function showLoveModal(customText = null, photoData = null) {
  if (photoData) {
    const photoIdx = MID_AUTUMN_PHOTOS.findIndex(p => p.url === photoData.url);
    const validIdx = photoIdx >= 0 ? photoIdx : 0;
    setupPhotoSwitcher(validIdx);
    displayPhotoInModal(validIdx);
    if (customText) modalQuote.textContent = `"${customText}"`;
  } else {
    if (modalImgContainer) modalImgContainer.style.display = 'none';
    if (modalPhotoSwitcher) modalPhotoSwitcher.style.display = 'none';
    if (modalStamp) modalStamp.textContent = '💌 FROM BRUCE LONG';
    const quote = customText || LOVE_DATA.quotes[Math.floor(Math.random() * LOVE_DATA.quotes.length)];
    modalQuote.textContent = `"${quote}"`;
  }
  modal.classList.add('open');
}

function closeLoveModal() {
  modal.classList.remove('open');
}

btnCloseModal.addEventListener('click', closeLoveModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeLoveModal();
});

btnRandomQuote.addEventListener('click', () => {
  showLoveModal();
});

btnSendHeart.addEventListener('click', () => {
  triggerHeartFireworks(new THREE.Vector3(0, 0, 80));
  triggerHeartFireworks(new THREE.Vector3(-40, 20, 60));
  triggerHeartFireworks(new THREE.Vector3(40, 20, 60));

  btnSendHeart.classList.remove('pulse-glow');
  btnSendHeart.textContent = "💖 Đã Gửi Vạn Trái Tim Đến Vợ Yêu! 💖";
  setTimeout(() => {
    btnSendHeart.classList.add('pulse-glow');
    btnSendHeart.innerHTML = "<span>💖 Bắn Ngàn Trái Tim Cho Vợ Yêu</span>";
    closeLoveModal();
  }, 1200);
});

// Top Nav Letter Button
document.getElementById('btn-letter').addEventListener('click', () => {
  showLoveModal();
});

// Floating Status Text Cycle
const floatingMsg = document.getElementById('floating-msg');
let msgIndex = 0;
const statusMsgs = [
  "Mãi mãi yêu Hạnh Mèo 💕",
  "Thái Bảo Luật 💖 Thị Hạnh",
  "Vin Nest chắp cánh tình yêu 🕊️",
  "Bruce Long & Hạnh Molly ✨",
  "Long Phụng Hòa Minh 🐉🕊️",
  "🌕 Đêm Trung Thu Tuyệt Vời 🥮",
  "Chú Cuội Bruce Long 💖 Chị Hằng Thị Hạnh 🌕"
];
setInterval(() => {
  msgIndex = (msgIndex + 1) % statusMsgs.length;
  floatingMsg.textContent = statusMsgs[msgIndex];
}, 4000);

// ============================================================================
// 13. UI CONTROLS & EFFECT TOGGLES
// ============================================================================
// Shape switch buttons
document.querySelectorAll('.shape-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyShapeLayout(btn.dataset.shape);
  });
});

// Toggle Dragons
const btnToggleDragons = document.getElementById('toggle-dragons');
btnToggleDragons.addEventListener('click', () => {
  showDragons = !showDragons;
  dragonsGroup.visible = showDragons;
  btnToggleDragons.classList.toggle('active', showDragons);
});

// Toggle Swiftlets
const btnToggleSwifts = document.getElementById('toggle-swifts');
btnToggleSwifts.addEventListener('click', () => {
  showSwiftlets = !showSwiftlets;
  swiftletsGroup.visible = showSwiftlets;
  btnToggleSwifts.classList.toggle('active', showSwiftlets);
});

// Toggle Auto Rotate
const btnToggleRotate = document.getElementById('toggle-rotate');
btnToggleRotate.addEventListener('click', () => {
  isAutoRotating = !isAutoRotating;
  controls.autoRotate = isAutoRotating;
  btnToggleRotate.classList.toggle('active', isAutoRotating);
});

// Heart Fireworks Button
document.getElementById('btn-fireworks').addEventListener('click', () => {
  triggerHeartFireworks(new THREE.Vector3(0, 0, 0));
  triggerHeartFireworks(new THREE.Vector3(-30, 15, 20));
  triggerHeartFireworks(new THREE.Vector3(30, 15, 20));
});

// ============================================================================
// 14. MULTI-TRACK ROMANTIC PLAYLIST & AUDIO ENGINE
// ============================================================================
const PLAYLIST = [
  {
    id: 0,
    title: "Falling Love (Nhạc Gốc Demo 02)",
    artist: "Giai Điệu Tình Yêu (Demo Vercel)",
    icon: "💖",
    src: "nhac.mp3",
    synthTheme: "canon"
  },
  {
    id: 1,
    title: "Canon in D",
    artist: "Johann Pachelbel (Bản Tình Ca Bất Hủ)",
    icon: "🎹",
    src: "https://ia800501.us.archive.org/11/items/pachelbel-canon-in-d-piano/Pachelbel%20-%20Canon%20in%20D%20%28Piano%29.mp3",
    synthTheme: "canon"
  },
  {
    id: 2,
    title: "River Flows in You",
    artist: "Yiruma (Dòng Chảy Tình Yêu)",
    icon: "🌊",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    synthTheme: "river"
  },
  {
    id: 3,
    title: "Mariage d'Amour",
    artist: "Paul de Senneville (Tình Khúc Hôn Lễ)",
    icon: "💍",
    src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3",
    synthTheme: "wedding"
  },
  {
    id: 4,
    title: "Kiss the Rain",
    artist: "Yiruma (Nụ Hôn Dưới Mưa)",
    icon: "🌧️",
    src: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3",
    synthTheme: "rain"
  },
  {
    id: 5,
    title: "A Thousand Years",
    artist: "Christina Perri (Ngàn Năm Bên Em)",
    icon: "⏳",
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c2730679.mp3",
    synthTheme: "thousand"
  },
  {
    id: 6,
    title: "Until I Found You",
    artist: "Stephen Sanchez (Cho Đến Khi Gặp Em)",
    icon: "✨",
    src: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_4031eb5c17.mp3",
    synthTheme: "until"
  },
  {
    id: 7,
    title: "Cosmic Serenade",
    artist: "Vin Nest & Bruce Long (Giao Hưởng Vũ Trụ)",
    icon: "🌌",
    src: "",
    synthTheme: "cosmic"
  }
];

let currentTrackIndex = 0;
let isAudioPlaying = false;
let audioElement = new Audio();
let audioCtx = null;
let synthTimer = null;
let currentVolume = 0.75;

const btnMusic = document.getElementById('btn-music');
const musicBtnText = document.getElementById('music-btn-text');
const btnPlaylistToggle = document.getElementById('btn-playlist-toggle');
const playlistCard = document.getElementById('playlist-card');
const playlistList = document.getElementById('playlist-list');
const btnClosePlaylist = document.getElementById('btn-close-playlist');
const btnPrevTrack = document.getElementById('btn-prev-track');
const btnNextTrack = document.getElementById('btn-next-track');
const btnPlayPauseTrack = document.getElementById('btn-play-pause-track');
const volumeSlider = document.getElementById('volume-slider');

// --- Synth Chords for Fallback / Ambient Mode ---
const SYNTH_THEMES = {
  canon: [
    [261.63, 329.63, 392.00, 523.25], // C
    [196.00, 246.94, 293.66, 392.00], // G
    [220.00, 261.63, 329.63, 440.00], // Am
    [164.81, 207.65, 246.94, 329.63], // Em
    [174.61, 220.00, 261.63, 349.23], // F
    [261.63, 329.63, 392.00, 523.25]  // C
  ],
  river: [
    [220.00, 261.63, 329.63, 440.00], // Am
    [174.61, 220.00, 261.63, 349.23], // F
    [261.63, 329.63, 392.00, 523.25], // C
    [196.00, 246.94, 293.66, 392.00]  // G
  ],
  wedding: [
    [174.61, 220.00, 261.63, 349.23], // F
    [196.00, 246.94, 293.66, 392.00], // G
    [220.00, 261.63, 329.63, 440.00], // Am
    [261.63, 329.63, 392.00, 523.25]  // C
  ],
  cosmic: [
    [130.81, 196.00, 261.63, 392.00],
    [146.83, 220.00, 293.66, 440.00],
    [164.81, 246.94, 329.63, 493.88],
    [174.61, 261.63, 349.23, 523.25]
  ]
};

function playSynthNote(freq, time, duration = 1.8) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.14 * currentVolume, time + 0.06);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

function startSynthPlayback(theme = 'canon') {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const chords = SYNTH_THEMES[theme] || SYNTH_THEMES.canon;
  let chordIdx = 0;

  function loop() {
    if (!isAudioPlaying) return;
    const now = audioCtx.currentTime;
    const chord = chords[chordIdx % chords.length];

    chord.forEach((freq, i) => {
      playSynthNote(freq, now + i * 0.32, 2.4);
    });

    chordIdx++;
    synthTimer = setTimeout(loop, 1900);
  }

  loop();
}

function stopSynthPlayback() {
  if (synthTimer) {
    clearTimeout(synthTimer);
    synthTimer = null;
  }
}

// Render Playlist Items
function renderPlaylist() {
  playlistList.innerHTML = '';
  PLAYLIST.forEach((track, index) => {
    const item = document.createElement('div');
    item.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
    item.innerHTML = `
      <div class="track-info">
        <span class="track-icon">${track.icon}</span>
        <div class="track-meta">
          <span class="track-name">${track.title}</span>
          <span class="track-author">${track.artist}</span>
        </div>
      </div>
      <span class="track-playing-indicator">▶</span>
    `;

    item.addEventListener('click', () => {
      loadTrack(index);
      playMusic();
    });

    playlistList.appendChild(item);
  });
}

function loadTrack(index) {
  currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
  const track = PLAYLIST[currentTrackIndex];

  // Stop previous sources
  stopSynthPlayback();
  audioElement.pause();
  audioElement.removeAttribute('src');

  // Update labels
  musicBtnText.textContent = track.title;
  renderPlaylist();

  if (track.src) {
    audioElement.src = track.src;
    audioElement.volume = currentVolume;
    audioElement.loop = false;

    audioElement.onended = () => {
      nextTrack();
    };

    audioElement.onerror = () => {
      console.warn("Audio stream error, falling back to romantic piano synth...");
      if (isAudioPlaying) {
        startSynthPlayback(track.synthTheme);
      }
    };
  }
}

function playMusic() {
  isAudioPlaying = true;
  btnMusic.classList.add('playing');
  btnPlayPauseTrack.textContent = '⏸️';

  const track = PLAYLIST[currentTrackIndex];
  if (track.src && audioElement.src) {
    audioElement.play().catch(err => {
      console.warn("Autoplay policy or stream failed, using romantic synth:", err);
      startSynthPlayback(track.synthTheme);
    });
  } else {
    startSynthPlayback(track.synthTheme);
  }
}

function pauseMusic() {
  isAudioPlaying = false;
  btnMusic.classList.remove('playing');
  btnPlayPauseTrack.textContent = '▶️';
  audioElement.pause();
  stopSynthPlayback();
}

function togglePlayPause() {
  if (isAudioPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function nextTrack() {
  loadTrack(currentTrackIndex + 1);
  if (isAudioPlaying) playMusic();
}

function prevTrack() {
  loadTrack(currentTrackIndex - 1);
  if (isAudioPlaying) playMusic();
}

// Event Listeners for Music UI
btnMusic.addEventListener('click', togglePlayPause);
btnPlayPauseTrack.addEventListener('click', togglePlayPause);
btnNextTrack.addEventListener('click', nextTrack);
btnPrevTrack.addEventListener('click', prevTrack);

btnPlaylistToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  playlistCard.classList.toggle('open');
});

btnClosePlaylist.addEventListener('click', () => {
  playlistCard.classList.remove('open');
});

document.addEventListener('click', (e) => {
  if (!playlistCard.contains(e.target) && !btnPlaylistToggle.contains(e.target)) {
    playlistCard.classList.remove('open');
  }
});

volumeSlider.addEventListener('input', (e) => {
  currentVolume = parseFloat(e.target.value);
  audioElement.volume = currentVolume;
  document.getElementById('vol-icon').textContent = currentVolume === 0 ? '🔇' : (currentVolume < 0.5 ? '🔉' : '🔊');
});

// Auto initialize on first interaction
window.addEventListener('pointerdown', function initAudioOnce() {
  window.removeEventListener('pointerdown', initAudioOnce);
  if (!isAudioPlaying) {
    playMusic();
  }
}, { once: true });

// Init playlist UI
renderPlaylist();
loadTrack(0);

// ============================================================================
// START APPLICATION
// ============================================================================
window.addEventListener('DOMContentLoaded', () => {
  initThree();
  animate();
});
