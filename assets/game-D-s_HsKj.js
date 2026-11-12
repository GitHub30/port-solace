import{m as k,c as _,v as T,l as Ee}from"./index-CVvYHcg5.js";class Ge{keys=new Set;pressed=new Set;mouseDX=0;mouseDY=0;wheel=0;mouseDown=!1;locked=!1;touchAxis=[0,0];constructor(e){addEventListener("keydown",t=>{this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),(t.code==="Space"||t.code==="Tab")&&t.preventDefault()}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),e.addEventListener("click",()=>{this.locked||e.requestPointerLock?.()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e}),addEventListener("mousemove",t=>{(this.locked||this.mouseDown)&&(this.mouseDX+=t.movementX,this.mouseDY+=t.movementY)}),e.addEventListener("mousedown",()=>this.mouseDown=!0),addEventListener("mouseup",()=>this.mouseDown=!1),addEventListener("wheel",t=>{this.wheel+=Math.sign(t.deltaY)},{passive:!0})}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}axis(e,t){return e==="KeyA"&&t==="KeyD"&&this.touchAxis[0]!==0?this.touchAxis[0]:e==="KeyS"&&t==="KeyW"&&this.touchAxis[1]!==0?this.touchAxis[1]:(this.down(t)?1:0)-(this.down(e)?1:0)}endFrame(){this.pressed.clear(),this.mouseDX=this.mouseDY=0,this.wheel=0}}const L={PAINT:16,GLASS:17,TIRE:18,CHROME:19,CLOTH:21,HEADLIGHT:22,TAILLIGHT:23,PLAIN:24,WATER:25};class N{v=[];i=[];u32=new Uint32Array(1);f32=new Float32Array(this.u32.buffer);vert(e,t,n,i){return this.u32[0]=i,this.v.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],this.f32[0]),this.v.length/9-1}quad(e,t,n={}){const i=U(e[1],e[0]),r=U(e[2],e[0]);let o=Q(le(i,r));Te(o)<1e-8&&(o=Q(le(U(e[2],e[0]),U(e[3],e[0]))));let c=n.n;if(!c&&n.inside){const f=ue(e);c=U(f,n.inside)}let l=!1;c&&J(o,c)<0&&(l=!0,o=o.map(f=>-f));const a=n.n?Q(n.n):o,s=n.uv??[[0,0],[1,0],[1,1],[0,1]],h=e.map((f,d)=>this.vert(f,a,s[d],t));l?this.i.push(h[0],h[2],h[1],h[0],h[3],h[2]):this.i.push(h[0],h[1],h[2],h[0],h[2],h[3])}box(e,t,n){const i=ue([e,t]),[r,o,c]=e,[l,a,s]=t,h=[[[r,a,c],[l,a,c],[l,a,s],[r,a,s]],[[r,o,c],[l,o,c],[l,o,s],[r,o,s]],[[r,o,s],[l,o,s],[l,a,s],[r,a,s]],[[r,o,c],[l,o,c],[l,a,c],[r,a,c]],[[l,o,c],[l,o,s],[l,a,s],[l,a,c]],[[r,o,c],[r,o,s],[r,a,s],[r,a,c]]];for(const f of h)this.quad(f,n,{inside:i})}}const U=(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]],J=(u,e)=>u[0]*e[0]+u[1]*e[1]+u[2]*e[2],le=(u,e)=>[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]],Te=u=>Math.hypot(u[0],u[1],u[2]),Q=u=>{const e=Te(u)||1;return[u[0]/e,u[1]/e,u[2]/e]},ue=u=>{const e=[0,0,0];for(const t of u)e[0]+=t[0],e[1]+=t[1],e[2]+=t[2];return e.map(t=>t/u.length)};function Ae(){const u=new N,e=[[-2.27,.36,.64,.74],[-2.18,.26,.76,.86],[-1.9,.22,.84,.91],[-1.2,.22,.9,.93],[-.85,.22,.94,.93],[.4,.22,.96,.94],[1.3,.22,.97,.93],[1.95,.24,.96,.9],[2.2,.3,.9,.84],[2.28,.38,.78,.76]],t=r=>{const[o,c,l,a]=r;return[[-a,c+.1,o],[-a,l-.12,o],[-a+.12,l,o],[a-.12,l,o],[a,l-.12,o],[a,c+.1,o],[a-.1,c,o],[-a+.1,c,o]]};for(let r=0;r+1<e.length;r++){const o=t(e[r]),c=t(e[r+1]),l=(e[r][0]+e[r+1][0])/2,a=(e[r][1]+e[r][2])/2;for(let s=0;s<8;s++){const h=(s+1)%8,f=s>=5?L.TIRE:L.PAINT;u.quad([o[s],o[h],c[h],c[s]],f,{inside:[0,a,l],uv:[[0,0],[1,0],[1,1],[0,1]]})}}for(const[r,o]of[[e[0],-1],[e[e.length-1],1]]){const c=t(r),l=ue(c);for(let a=0;a<8;a++){const s=[l,c[a],c[(a+1)%8],l];u.quad(s,L.PAINT,{n:[0,0,o]})}}const n=[[-.85,.94,.94,.86,.66],[-.1,.95,1.43,.87,.68],[.9,.96,1.42,.87,.68],[1.62,.96,.97,.85,.66]],i=r=>{const[o,c,l,a,s]=r;return[[-a,c,o],[-s,l,o],[s,l,o],[a,c,o]]};for(let r=0;r+1<n.length;r++){const o=i(n[r]),c=i(n[r+1]),l=[0,.9,(n[r][0]+n[r+1][0])/2];for(let a=0;a<3;a++){const h=a===1&&r===1?L.PAINT:L.GLASS;u.quad([o[a],o[a+1],c[a+1],c[a]],h,{inside:l})}}for(const r of[-1,1])u.quad([[r*.875,.955,.35],[r*.875,.955,.45],[r*.685,1.425,.45],[r*.685,1.425,.35]],L.PAINT,{n:[r,.4,0]});for(const r of[-1,1])u.box([r*.45,.6,-2.24],[r*.76,.72,-2.12],L.HEADLIGHT),u.box([r*.5,.74,2.15],[r*.82,.86,2.27],L.TAILLIGHT),u.box([r*.93,.95,-.75],[r*1.05,1.05,-.6],L.PAINT);return u.box([-.42,.42,-2.3],[.42,.56,-2.2],L.TIRE),u.box([-.88,.26,-2.36],[.88,.42,-2.12],L.TIRE),u.box([-.88,.28,2.12],[.88,.44,2.36],L.TIRE),u}function De(){const u=new N,e=18,t=.34,n=.22,i=.12;for(let r=0;r<e;r++){const o=r/e*Math.PI*2,c=(r+1)/e*Math.PI*2,l=(s,h,f)=>[f,Math.cos(s)*h,Math.sin(s)*h],a=[0,Math.cos((o+c)/2),Math.sin((o+c)/2)];u.quad([l(o,t,-i),l(c,t,-i),l(c,t,i),l(o,t,i)],L.TIRE,{n:a,uv:[[r/e*4,0],[(r+1)/e*4,0],[(r+1)/e*4,1],[r/e*4,1]]});for(const s of[-1,1]){u.quad([l(o,t,s*i),l(c,t,s*i),l(c,n,s*i*.9),l(o,n,s*i*.9)],L.TIRE,{n:[s,0,0]});const h=r%3===0?L.CHROME:L.PLAIN;u.quad([l(o,n,s*i*.9),l(c,n,s*i*.9),[s*i*.6,0,0],[s*i*.6,0,0]],(h===L.CHROME,L.CHROME),{n:[s,0,0]})}}return u}function fe(u,e=16,t=10,n=L.CLOTH){const i=new N,r=(l,a)=>Math.sign(l)*Math.pow(Math.abs(l),a),o=(l,a)=>{const s=-Math.PI/2+a/t*Math.PI,h=l/e*Math.PI*2,f=.5*r(Math.cos(s),u)*r(Math.cos(h),u),d=.5*r(Math.sin(s),u),p=.5*r(Math.cos(s),u)*r(Math.sin(h),u),m=2/u-1,b=Q([r(2*f,m),r(2*d,m),r(2*p,m)]);return{p:[f,d,p],n:b,uv:[l/e*2,a/t*2]}},c=i.v.length/9;for(let l=0;l<=t;l++)for(let a=0;a<=e;a++){const s=o(a,l);i.vert(s.p,s.n,s.uv,n)}for(let l=0;l<t;l++)for(let a=0;a<e;a++){const s=c+l*(e+1)+a,h=s+e+1;i.i.push(s,h,s+1,s+1,h,h+1)}for(let l=0;l<i.i.length;l+=3){const[a,s,h]=[i.i[l],i.i[l+1],i.i[l+2]],f=p=>[i.v[p*9],i.v[p*9+1],i.v[p*9+2]],d=le(U(f(s),f(a)),U(f(h),f(a)));J(d,f(a))+J(d,f(s))+J(d,f(h))<0&&(i.i[l+1]=h,i.i[l+2]=s)}return i}function ze(){const u=new N,e=16,t=4e3;for(let n=0;n<e;n++)for(let i=0;i<e;i++){const r=-t+2*t*i/e,o=-t+2*t*(i+1)/e,c=-t+2*t*n/e,l=-t+2*t*(n+1)/e;u.quad([[r,0,c],[o,0,c],[o,0,l],[r,0,l]],L.WATER,{n:[0,1,0]})}return u}const Le={MATTE:39},H=10,Ve=(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]],te=(u,e)=>[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]],he=u=>{const e=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/e,u[1]/e,u[2]/e]},Ne=(u,e)=>[(u[0]+e[0])/2,(u[1]+e[1])/2,(u[2]+e[2])/2];function re(u,e,t,n=12,i=!0){const r=o=>{const[c,l,a,s]=o,h=(l+a)/2,f=(a-l)/2,d=[];for(let p=0;p<n;p++){const m=p/n*Math.PI*2,b=Math.cos(m),g=Math.sin(m);d.push([s*Math.sign(b)*Math.pow(Math.abs(b),.55),h+f*Math.sign(g)*Math.pow(Math.abs(g),.55),c])}return d};for(let o=0;o+1<e.length;o++){const c=r(e[o]),l=r(e[o+1]),a=[0,(e[o][1]+e[o][2]+e[o+1][1]+e[o+1][2])/4,(e[o][0]+e[o+1][0])/2];for(let s=0;s<n;s++){const h=(s+1)%n;u.quad([c[s],c[h],l[h],l[s]],t,{inside:a,uv:[[s/n*3,e[o][0]],[(s+1)/n*3,e[o][0]],[(s+1)/n*3,e[o+1][0]],[s/n*3,e[o+1][0]]]})}}if(i)for(const[o,c]of[[e[0],-1],[e[e.length-1],1]]){const l=r(o),a=[0,(o[1]+o[2])/2,o[0]];for(let s=0;s<n;s++)u.quad([a,l[s],l[(s+1)%n],a],t,{n:[0,0,c]})}}function F(u,e,t,n,i,r,o=!0){const c=he(Ve(t,e)),l=he(Math.abs(c[1])<.9?te(c,[0,1,0]):te(c,[1,0,0])),a=te(c,l),s=(f,d)=>[0,1,2].map(p=>f[p]+(l[p]*Math.cos(d)+a[p]*Math.sin(d))*n),h=Ne(e,t);for(let f=0;f<i;f++){const d=f/i*Math.PI*2,p=(f+1)/i*Math.PI*2;u.quad([s(e,d),s(e,p),s(t,p),s(t,d)],r,{inside:h}),o&&(u.quad([e,s(e,d),s(e,p),e],r,{n:c.map(m=>-m)}),u.quad([t,s(t,d),s(t,p),t],r,{n:c}))}}function Oe(u,e,t,n,i=12,r=8){const o=u.v.length/9;for(let c=0;c<=r;c++)for(let l=0;l<=i;l++){const a=-Math.PI/2+c/r*Math.PI,s=l/i*Math.PI*2,h=[Math.cos(a)*Math.cos(s),Math.sin(a),Math.cos(a)*Math.sin(s)];u.vert([e[0]+h[0]*t[0],e[1]+h[1]*t[1],e[2]+h[2]*t[2]],he([h[0]/t[0],h[1]/t[1],h[2]/t[2]]),[l/i,c/r],n)}for(let c=0;c<r;c++)for(let l=0;l<i;l++){const a=o+c*(i+1)+l,s=a+i+1;u.i.push(a,a+1,s,a+1,s+1,s)}}function Be(u,e,t,n,i,r,o){const c=[e(t,-i,-r),e(n,-i,-r),e(n,i,-r),e(t,i,-r),e(t,-i,r),e(n,-i,r),e(n,i,r),e(t,i,r)],l=[[4,5,6,7],[0,1,2,3],[0,1,5,4],[3,2,6,7],[1,2,6,5],[0,3,7,4]];for(const a of l)u.quad(a.map(s=>c[s]),L.TIRE,{inside:o})}function Ce(){const u=new N,e=Le.MATTE,t=L.TIRE;re(u,[[-5.35,1.08,1.5,.16],[-5,.92,1.85,.44],[-4.2,.8,2.05,.58],[-3,.78,2.12,.62],[-1.5,.8,2.28,.72],[0,.86,2.5,.86],[1.6,.96,2.58,.86],[2.8,1.2,2.45,.6],[3.8,1.55,2.35,.36],[6.5,1.8,2.3,.26],[8.8,1.95,2.3,.19]],e,14),re(u,[[-4.35,1.95,2.02,.42],[-3.7,1.98,2.5,.5],[-2.45,2,2.56,.52],[-2.25,2.05,2.58,.5]],L.GLASS,12),re(u,[[-2.25,2.1,2.72,.5],[-1.1,2.2,2.95,.53],[-.3,2.3,2.95,.5],[.2,2.42,2.55,.42]],L.GLASS,12);for(const i of[-3.05,-2.25,-1.2])u.box([-.54,2,i-.04],[.54,i<-2?2.6:2.98,i+.04],e);for(const i of[-1,1]){F(u,[i*.98,2.25,-.5],[i*.98,2.25,2.3],.46,14,e),F(u,[i*.98,2.25,-.56],[i*.98,2.25,-.5],.36,14,t),F(u,[i*1,2.3,2.3],[i*1.35,2.45,2.9],.22,10,t),u.box([i>0?.7:-2.75,1.52,-.7],[i>0?2.75:-.7,1.66,.5],e),F(u,[i*1.5,1.1,-1.35],[i*1.5,1.1,.65],.32,14,e),u.box([i*1.5-.06,1.42,-.4],[i*1.5+.06,1.55,.2],e);for(let r=0;r<7;r++){const o=r/7*Math.PI*2,c=i*1.5+Math.cos(o)*.18,l=1.1+Math.sin(o)*.18;F(u,[c,l,-1.37],[c,l,-1.33],.06,6,t,!1)}u.box([i*2.42-.05,1.3,-.9],[i*2.42+.05,1.53,.6],e);for(const r of[-.13,.13])for(const o of[1.12,1.38])F(u,[i*2.42+r,o,-1.1],[i*2.42+r,o,.7],.085,8,e),F(u,[i*2.42+r,o,-1.25],[i*2.42+r,o,-1.1],.05,8,t);u.box([i*.6-.06,.4,-1.66],[i*.6+.06,1,-1.54],H),u.box([Math.min(i*.6,i*1.12)-.04,.3,-1.64],[Math.max(i*.6,i*1.12)+.04,.42,-1.56],H),F(u,[i*1,.36,-1.6],[i*1.24,.36,-1.6],.36,16,t)}F(u,[0,2.5,.25],[0,3.35,.25],.2,12,H),u.box([-.35,2.45,-.1],[.35,2.75,.9],e),Oe(u,[0,1.22,-5.38],[.36,.38,.34],t),u.box([-.28,1.15,-5.78],[.28,1.35,-5.62],L.GLASS),F(u,[0,.72,-3.55],[0,.86,-3.55],.24,12,t);const n=[[8.2,2.25],[8.75,4.55],[9.25,4.55],[9.15,1.95]];for(const i of[-1,1])u.quad(n.map(([r,o])=>[i*.08,o,r]),e,{n:[i,0,0]});for(let i=0;i<4;i++){const[r,o]=n[i],[c,l]=n[(i+1)%4];u.quad([[-.08,o,r],[.08,o,r],[.08,l,c],[-.08,l,c]],e,{inside:[0,3.2,8.8]})}return u.box([-1.65,2.02,8.55],[1.65,2.1,9.2],e),u.box([.05,4.1,8.85],[.3,4.4,9.15],e),u.box([-.05,.3,8],[.05,1.95,8.1],H),F(u,[-.1,.25,8.05],[.1,.25,8.05],.25,12,t),u}function Ue(){const u=new N;for(let e=0;e<4;e++){const t=e/4*Math.PI*2,n=Math.cos(t),i=Math.sin(t);Be(u,(r,o,c)=>[n*r-i*o,c,i*r+n*o],.35,7.3,.27,.035,[n*3.8,0,i*3.8])}return F(u,[0,-.15,0],[0,.12,0],.42,12,H),u}function He(){const u=new N;for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.3,n=Math.cos(t),i=Math.sin(t);Be(u,(r,o,c)=>[c,n*r-i*o,i*r+n*o],.12,1.45,.13,.025,[0,n*.8,i*.8])}return F(u,[-.08,0,0],[.08,0,0],.14,10,H),u}function _e(){const u=new N;return u.box([-.17,-.2,-.45],[.17,.08,.25],Le.MATTE),F(u,[0,-.07,-.45],[0,-.07,-1.85],.045,8,H),F(u,[0,-.07,-1],[0,-.07,-1.15],.07,8,L.TIRE),u}const de=`diagnostic(off, derivative_uniformity);\r
// ---- shared declarations -------------------------------------------------\r
struct Frame {\r
  viewProj: mat4x4f,      // jittered\r
  viewProjNJ: mat4x4f,    // un-jittered\r
  prevViewProj: mat4x4f,  // previous un-jittered\r
  invViewProj: mat4x4f,   // inverse of un-jittered\r
  view: mat4x4f,\r
  proj: mat4x4f,          // jittered projection\r
  invProj: mat4x4f,\r
  lightVP: array<mat4x4f, 3>,\r
  camPos: vec4f,     // xyz, w = time (s)\r
  sunDir: vec4f,     // xyz towards sun (or moon at night), w = night factor 0..1\r
  sunColor: vec4f,   // rgb irradiance of the key light, w = exposure\r
  params: vec4f,     // x wetness, y rain, z ssao strength, w env max lod\r
  splits: vec4f,     // cascade far distances (view space)\r
  cascTexel: vec4f,  // world-space texel size per cascade\r
  fog: vec4f,        // density, height falloff, unused, unused\r
  screen: vec4f,     // w, h, 1/w, 1/h\r
  misc: vec4f,       // frame index, spot count, render scale, unused\r
  sun: vec4f,        // true sun direction, w = sun intensity (atmosphere)\r
  moon: vec4f,       // moon direction, w = moon intensity\r
};\r
\r
struct Instance {\r
  model: mat4x4f,\r
  prevModel: mat4x4f,\r
  color: vec4f,   // rgb tint, w = material override (-1 = none)\r
  extra: vec4f,   // x emissive boost (lights) | skinned: skin rgb, w hair index\r
  extra2: vec4f,  // skinned: pants rgb, w = bone base index\r
};\r
\r
const PI = 3.14159265;\r
\r
fn hashu(x: u32) -> u32 {\r
  var v = x * 747796405u + 2891336453u;\r
  let w = ((v >> ((v >> 28u) + 4u)) ^ v) * 277803737u;\r
  return (w >> 22u) ^ w;\r
}\r
fn hash21(i: vec2i, s: u32) -> f32 {\r
  return f32(hashu((u32(i.x) * 73856093u) ^ (u32(i.y) * 19349663u) ^ (s * 83492791u))) / 4294967295.0;\r
}\r
fn vnoise(p: vec2f, s: u32) -> f32 {\r
  let i = vec2i(floor(p)); let f = fract(p); let u = f * f * (3.0 - 2.0 * f);\r
  let a = hash21(i, s); let b = hash21(i + vec2i(1, 0), s);\r
  let c = hash21(i + vec2i(0, 1), s); let d = hash21(i + vec2i(1, 1), s);\r
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
fn luminance(c: vec3f) -> f32 { return dot(c, vec3f(0.2126, 0.7152, 0.0722)); }\r
\r
// Equirectangular environment mapping (sky LUT).\r
fn dirToEquirect(d: vec3f) -> vec2f {\r
  return vec2f(atan2(d.x, -d.z) / (2.0 * PI) + 0.5, acos(clamp(d.y, -1.0, 1.0)) / PI);\r
}\r
fn equirectToDir(uv: vec2f) -> vec3f {\r
  let phi = (uv.x - 0.5) * 2.0 * PI; let th = uv.y * PI;\r
  return vec3f(sin(th) * sin(phi), cos(th), -sin(th) * cos(phi));\r
}\r
\r
fn octEncode(n: vec3f) -> vec2f {\r
  let p = n.xy / (abs(n.x) + abs(n.y) + abs(n.z));\r
  if (n.z < 0.0) { return (1.0 - abs(p.yx)) * select(vec2f(-1.0), vec2f(1.0), p >= vec2f(0.0)); }\r
  return p;\r
}\r
fn octDecode(e: vec2f) -> vec3f {\r
  var n = vec3f(e, 1.0 - abs(e.x) - abs(e.y));\r
  if (n.z < 0.0) { let xy = (1.0 - abs(n.yx)) * select(vec2f(-1.0), vec2f(1.0), n.xy >= vec2f(0.0)); n = vec3f(xy, n.z); }\r
  return normalize(n);\r
}\r
fn interleavedGradientNoise(p: vec2f) -> f32 { return fract(52.9829189 * fract(dot(p, vec2f(0.06711056, 0.00583715)))); }\r
`,qe=`// Scene geometry: depth prepass, shadow pass and the main PBR forward pass.\r
@group(0) @binding(0) var<uniform> F: Frame;\r
@group(0) @binding(1) var<storage, read> inst: array<Instance>;\r
@group(0) @binding(2) var<storage, read> bones: array<mat4x4f>;\r
\r
@group(1) @binding(0) var texA: texture_2d_array<f32>;\r
@group(1) @binding(1) var texB: texture_2d_array<f32>;\r
@group(1) @binding(2) var matSamp: sampler;\r
@group(1) @binding(3) var shadowTex: texture_depth_2d_array;\r
@group(1) @binding(4) var shadowSamp: sampler_comparison;\r
@group(1) @binding(5) var envTex: texture_2d<f32>;\r
@group(1) @binding(6) var envSamp: sampler;\r
@group(1) @binding(7) var aoTex: texture_2d<f32>;\r
@group(1) @binding(8) var hmapTex: texture_2d<f32>;\r
@group(1) @binding(9) var<storage, read> lamps: array<vec4f>;      // xyz pos, w intensity\r
@group(1) @binding(10) var lampGrid: texture_2d<u32>;              // 40x40 cells, 4 lamp indices each (rgba32uint)\r
@group(1) @binding(11) var<storage, read> spots: array<vec4f>;     // pairs: (pos, intensity), (dir, cosCone)\r
\r
struct VIn { @location(0) pos: vec3f, @location(1) nrm: vec3f, @location(2) uv: vec2f, @location(3) mat: u32 };\r
struct VOut {\r
  @builtin(position) @invariant clip: vec4f,\r
  @location(0) wpos: vec3f,\r
  @location(1) nrm: vec3f,\r
  @location(2) uv: vec2f,\r
  @location(3) @interpolate(flat) mat: u32,\r
  @location(4) cur: vec4f,\r
  @location(5) prev: vec4f,\r
  @location(6) @interpolate(flat) ii: u32,\r
};\r
\r
fn cofactor(m: mat4x4f) -> mat3x3f {\r
  let a = m[0].xyz; let b = m[1].xyz; let c = m[2].xyz;\r
  return mat3x3f(cross(b, c), cross(c, a), cross(a, b));\r
}\r
\r
@vertex fn vsMain(v: VIn, @builtin(instance_index) ii: u32) -> VOut {\r
  let I = inst[ii];\r
  let wp = I.model * vec4f(v.pos, 1.0);\r
  let pp = I.prevModel * vec4f(v.pos, 1.0);\r
  var o: VOut;\r
  o.clip = F.viewProj * wp;\r
  o.wpos = wp.xyz;\r
  o.nrm = normalize(cofactor(I.model) * v.nrm);\r
  o.uv = v.uv; o.mat = v.mat; o.ii = ii;\r
  o.cur = F.viewProjNJ * wp;\r
  o.prev = F.prevViewProj * pp;\r
  return o;\r
}\r
\r
// ---- GPU skinning (13 bones per character, current + previous frame matrices)\r
struct VInS { @location(0) pos: vec3f, @location(1) nrm: vec3f, @location(2) uv: vec2f, @location(3) mat: u32, @location(4) j: vec4u, @location(5) w: vec4f };\r
fn skinMat(base: u32, j: vec4u, w: vec4f) -> mat4x4f {\r
  return bones[base + j.x] * w.x + bones[base + j.y] * w.y + bones[base + j.z] * w.z + bones[base + j.w] * w.w;\r
}\r
@vertex fn vsSkinMain(v: VInS, @builtin(instance_index) ii: u32) -> VOut {\r
  let I = inst[ii];\r
  let base = u32(I.extra2.w);\r
  let sk = skinMat(base, v.j, v.w);\r
  let pk = skinMat(base + 13u, v.j, v.w);\r
  let wp = sk * vec4f(v.pos, 1.0);\r
  var o: VOut;\r
  o.clip = F.viewProj * wp;\r
  o.wpos = wp.xyz;\r
  o.nrm = normalize((sk * vec4f(v.nrm, 0.0)).xyz);\r
  o.uv = v.uv; o.mat = v.mat; o.ii = ii;\r
  o.cur = F.viewProjNJ * wp;\r
  o.prev = F.prevViewProj * (pk * vec4f(v.pos, 1.0));\r
  return o;\r
}\r
@vertex fn vsSkinDepth(v: VInS, @builtin(instance_index) ii: u32) -> @builtin(position) @invariant vec4f {\r
  return F.viewProj * (skinMat(u32(inst[ii].extra2.w), v.j, v.w) * vec4f(v.pos, 1.0));\r
}\r
\r
@vertex fn vsDepth(v: VIn, @builtin(instance_index) ii: u32) -> @builtin(position) @invariant vec4f {\r
  return F.viewProj * (inst[ii].model * vec4f(v.pos, 1.0));\r
}\r
\r
// ---- shadow pass ----\r
struct ShadowU { vp: mat4x4f };\r
@group(0) @binding(0) var<uniform> SU: ShadowU;\r
@vertex fn vsShadow(v: VIn, @builtin(instance_index) ii: u32) -> @builtin(position) vec4f {\r
  return SU.vp * (inst[ii].model * vec4f(v.pos, 1.0));\r
}\r
@vertex fn vsSkinShadow(v: VInS, @builtin(instance_index) ii: u32) -> @builtin(position) vec4f {\r
  return SU.vp * (skinMat(u32(inst[ii].extra2.w), v.j, v.w) * vec4f(v.pos, 1.0));\r
}\r
\r
// ---------------------------------------------------------------- lighting helpers\r
fn envSample(d: vec3f, lod: f32) -> vec3f { return textureSampleLevel(envTex, envSamp, dirToEquirect(d), lod).rgb; }\r
\r
fn D_GGX(nh: f32, a: f32) -> f32 { let a2 = a * a; let d = nh * nh * (a2 - 1.0) + 1.0; return a2 / (PI * d * d + 1e-7); }\r
fn V_Smith(nv: f32, nl: f32, a: f32) -> f32 {\r
  let k = a * 0.5; return 0.25 / ((nv * (1.0 - k) + k) * (nl * (1.0 - k) + k) + 1e-5);\r
}\r
fn F_Schlick(f0: vec3f, vh: f32) -> vec3f { return f0 + (1.0 - f0) * pow(1.0 - vh, 5.0); }\r
fn envBRDF(f0: vec3f, rough: f32, nv: f32) -> vec3f {\r
  let c0 = vec4f(-1.0, -0.0275, -0.572, 0.022); let c1 = vec4f(1.0, 0.0425, 1.04, -0.04);\r
  let r = rough * c0 + c1;\r
  let a004 = min(r.x * r.x, exp2(-9.28 * nv)) * r.x + r.y;\r
  let ab = vec2f(-1.04, 1.04) * a004 + r.zw;\r
  return f0 * ab.x + ab.y;\r
}\r
\r
fn shadowFactor(wpos: vec3f, n: vec3f, viewZ: f32) -> f32 {\r
  var ci = 0;\r
  if (viewZ > F.splits.x) { ci = 1; }\r
  if (viewZ > F.splits.y) { ci = 2; }\r
  if (viewZ > F.splits.z) { return 1.0; }\r
  let texel = F.cascTexel[ci];\r
  let p = wpos + n * texel * 1.5 + F.sunDir.xyz * texel * 1.0;\r
  let lp = F.lightVP[ci] * vec4f(p, 1.0);\r
  let uv = lp.xy * vec2f(0.5, -0.5) + 0.5;\r
  if (any(uv < vec2f(0.0)) || any(uv > vec2f(1.0))) { return 1.0; }\r
  let z = lp.z - 0.0005;\r
  let ts = 1.0 / 2048.0;\r
  var s = 0.0;\r
  for (var y = -1; y <= 1; y++) { for (var x = -1; x <= 1; x++) {\r
    s += textureSampleCompareLevel(shadowTex, shadowSamp, uv + vec2f(f32(x), f32(y)) * ts * 1.2, ci, z);\r
  } }\r
  var sh = s / 9.0;\r
  // fade out the last cascade\r
  if (ci == 2) { sh = mix(sh, 1.0, smoothstep(F.splits.z * 0.85, F.splits.z, viewZ)); }\r
  return sh;\r
}\r
\r
struct Surf { albedo: vec3f, rough: f32, metal: f32, n: vec3f, emissive: vec3f, ao: f32, clearcoat: f32 };\r
\r
fn cotangentFrame(N: vec3f, p: vec3f, uv: vec2f) -> mat3x3f {\r
  let dp1 = dpdx(p); let dp2 = dpdy(p); let duv1 = dpdx(uv); let duv2 = dpdy(uv);\r
  let dp2perp = cross(dp2, N); let dp1perp = cross(N, dp1);\r
  let T = dp2perp * duv1.x + dp1perp * duv2.x;\r
  let B = dp2perp * duv1.y + dp1perp * duv2.y;\r
  let invmax = inverseSqrt(max(dot(T, T), dot(B, B)) + 1e-20);\r
  return mat3x3f(T * invmax, B * invmax, N);\r
}\r
\r
fn hashf(x: u32) -> f32 { return f32(hashu(x)) / 4294967295.0; }\r
\r
// Texture layers: 0 asphalt 1 paving 2 grass 3 sand 4 facadeConc 5 facadeGlass 6 brick 7 roof 8 bark 9 leaves 10 metal 11 concrete 12 palm 13 rubber 14 fabric\r
fn material(mat: u32, uvIn: vec2f, wpos: vec3f, Ng: vec3f, I: Instance, TBN: mat3x3f) -> Surf {\r
  var s: Surf; s.metal = 0.0; s.emissive = vec3f(0.0); s.ao = 1.0; s.clearcoat = 0.0;\r
  var id = mat & 255u;\r
  let seed = mat >> 8u;\r
  if (I.color.w >= 0.0) { id = u32(I.color.w); }\r
  var layer = 11; var uv = uvIn; var tint = vec3f(1.0);\r
  var a: vec4f; var b: vec4f;\r
  let night = F.sunDir.w;\r
  let wet = F.params.x;\r
  switch id {\r
    case 0u, 14u: { layer = 0; uv = vec2f(uvIn.x, uvIn.y) * 0.25; }\r
    case 1u: { layer = 1; }\r
    case 2u: { layer = 2; }\r
    case 3u: { layer = 3; }\r
    case 4u: { layer = 4; tint = mix(vec3f(0.85, 0.82, 0.78), vec3f(1.15, 1.1, 1.0), hashf(seed)); }\r
    case 5u: { layer = 5; tint = mix(vec3f(0.8, 0.95, 1.1), vec3f(1.0, 1.0, 0.95), hashf(seed)); }\r
    case 6u: { layer = 6; tint = mix(vec3f(0.85, 0.9, 1.0), vec3f(1.1, 1.0, 0.9), hashf(seed)); }\r
    case 7u: { layer = 7; }\r
    case 8u: { layer = 8; uv = uvIn * vec2f(1.0, 0.5); }\r
    case 9u: { layer = 9; uv = uvIn * 0.6; tint = mix(vec3f(0.8, 1.0, 0.7), vec3f(1.15, 1.05, 0.8), hashf(seed)); }\r
    case 10u: { layer = 10; }\r
    case 12u: { layer = 11; uv = uvIn * 0.5; }\r
    case 13u: { layer = 12; }\r
    case 18u: { layer = 13; }\r
    case 21u: { layer = 14; uv = uvIn * 3.0; }\r
    case 15u: { layer = 14; uv = uvIn * 2.0; }\r
    case 34u: { layer = 15; uv = uvIn * vec2f(1.5, 0.6); }\r
    case 35u: { layer = 16; uv = uvIn * vec2f(1.5, 0.6); }\r
    case 36u: { layer = 17; uv = uvIn * vec2f(2.0, 1.0); }\r
    case 33u, 37u, 38u: { layer = 14; uv = uvIn * 4.0; }\r
    case 26u, 27u: { layer = 10; }\r
    case 28u: { layer = 0; uv = uvIn * 0.25; }\r
    case 29u: { layer = 8; uv = uvIn * vec2f(0.5, 2.0); }\r
    default: { layer = 11; }\r
  }\r
  a = textureSample(texA, matSamp, uv, layer);\r
  b = textureSample(texB, matSamp, uv, layer);\r
  s.albedo = a.rgb * tint; s.rough = a.a; s.metal = b.b;\r
  var nts = vec3f(b.rg * 2.0 - 1.0, 0.0);\r
  nts.z = sqrt(max(1.0 - dot(nts.xy, nts.xy), 0.0));\r
  var mask = b.a;\r
\r
  switch id {\r
    case 0u: { // road markings: uv.x across (m), uv.y along (m)\r
      // tyre tracks: polished darker bands where wheels run\r
      let au = abs(uvIn.x);\r
      let track = (1.0 - smoothstep(0.25, 0.45, abs(au - 1.7))) + (1.0 - smoothstep(0.25, 0.45, abs(au - 3.3)));\r
      s.albedo *= 1.0 - 0.18 * track; s.rough = mix(s.rough, s.rough * 0.8, track);\r
      // oil stains in lane centres\r
      let oil = smoothstep(0.62, 0.8, vnoise(uvIn * vec2f(1.2, 0.35), 41u)) * (1.0 - smoothstep(0.6, 1.2, abs(au - 2.5)));\r
      s.albedo *= 1.0 - 0.35 * oil; s.rough = mix(s.rough, 0.35, oil * 0.6);\r
      // manhole covers\r
      let mp = vec2f(au - 2.5, fract(uvIn.y / 37.0 + f32(seed & 7u) * 0.13) * 37.0 - 18.5);\r
      let md = length(mp);\r
      if (md < 0.36) {\r
        let grid = step(0.5, fract(mp.x * 8.0)) * step(0.5, fract(mp.y * 8.0));\r
        s.albedo = vec3f(0.06, 0.055, 0.05) * (0.8 + 0.4 * grid); s.rough = 0.45; s.metal = 0.7;\r
        nts = vec3f(0.0, 0.0, 1.0);\r
      } else if (md < 0.42) { s.albedo *= 0.6; }\r
      let dash = step(fract(uvIn.y / 6.0), 0.5);\r
      let centre = (1.0 - step(0.08, abs(uvIn.x))) * dash;\r
      let edge = step(4.55, abs(uvIn.x)) * (1.0 - step(4.7, abs(uvIn.x)));\r
      let paint = max(centre, edge) * (0.75 + 0.25 * vnoise(uvIn * 3.0, 3u));\r
      s.albedo = mix(s.albedo, vec3f(0.62, 0.62, 0.6), paint); s.rough = mix(s.rough, 0.55, paint); nts = mix(nts, vec3f(0, 0, 1), paint);\r
    }\r
    case 14u: { // intersection with zebra crossings\r
      let ax = abs(uvIn.x); let az = abs(uvIn.y);\r
      let zx = step(3.0, az) * (1.0 - step(4.9, az)) * step(fract(uvIn.x * 1.1), 0.5) * (1.0 - step(4.4, ax));\r
      let zz = step(3.0, ax) * (1.0 - step(4.9, ax)) * step(fract(uvIn.y * 1.1), 0.5) * (1.0 - step(4.4, az));\r
      let paint = max(zx, zz) * (0.7 + 0.3 * vnoise(uvIn * 2.0, 9u));\r
      s.albedo = mix(s.albedo, vec3f(0.65), paint); s.rough = mix(s.rough, 0.55, paint);\r
    }\r
    case 3u: { // sand: wet near the waterline\r
      let wetSand = 1.0 - smoothstep(0.15, 0.7, wpos.y);\r
      s.albedo *= mix(1.0, 0.55, wetSand); s.rough = mix(s.rough, 0.35, wetSand);\r
    }\r
    case 4u, 6u: { // ground-floor storefronts + lit windows at night\r
      if (uvIn.y > 0.0 && uvIn.y < 1.0) {\r
        let sf = textureSample(texA, matSamp, vec2f(uvIn.x, uvIn.y * 0.8 + 0.1), 5);\r
        let g = step(0.12, fract(uvIn.x)) * step(fract(uvIn.x), 0.94) * step(0.06, uvIn.y) * step(uvIn.y, 0.85);\r
        s.albedo = mix(s.albedo, sf.rgb, g); s.rough = mix(s.rough, 0.05, g); mask = max(mask * (1.0 - g), g * 0.999);\r
        nts = normalize(mix(nts, vec3f(0.0, 0.0, 1.0), g)); // glass is flat: drop the wall's normal map\r
      }\r
    }\r
    case 9u: { s.ao = 0.75; }\r
    case 15u: { // awning fabric: palette colour with stripes\r
      let pal = array<vec3f, 6>(vec3f(0.5, 0.05, 0.04), vec3f(0.05, 0.22, 0.12), vec3f(0.06, 0.1, 0.3), vec3f(0.55, 0.4, 0.08), vec3f(0.15, 0.15, 0.15), vec3f(0.6, 0.6, 0.55));\r
      let c = pal[hashu(seed) % 6u];\r
      let stripe = step(0.5, fract((wpos.x + wpos.z) * 1.2));\r
      s.albedo *= mix(c, mix(c, vec3f(0.85, 0.83, 0.78), 0.7), stripe * step(0.5, hashf(seed + 3u))) * 1.6; s.rough = 0.85;\r
    }\r
    case 26u: { // illuminated shop sign: dark panel with glowing glyph blocks\r
      let pal = array<vec3f, 6>(vec3f(1.0, 0.25, 0.15), vec3f(0.2, 0.7, 1.0), vec3f(1.0, 0.8, 0.3), vec3f(0.3, 1.0, 0.5), vec3f(1.0, 0.3, 0.8), vec3f(0.95, 0.95, 0.9));\r
      let c = pal[hashu(seed) % 6u];\r
      let q = (wpos.xz + wpos.zx) * vec2f(2.2, 2.2) ;\r
      let cellx = floor(q.x + q.y);\r
      let gl = step(0.35, hash21(vec2i(i32(cellx), i32(floor(wpos.y * 4.0))), seed)) * step(0.15, fract(wpos.y - 0.1)) ;\r
      let band = smoothstep(0.08, 0.12, fract((wpos.y + 0.05) * 1.0 + 0.1)) * (1.0 - smoothstep(0.55, 0.6, fract((wpos.y + 0.05) * 1.0 + 0.1)));\r
      let glyph = gl * band;\r
      s.albedo = mix(vec3f(0.05), c * 0.6, glyph); s.rough = 0.3; s.metal = 0.0;\r
      s.emissive = c * glyph * (0.6 + 18.0 * night);\r
      nts = vec3f(0.0, 0.0, 1.0);\r
    }\r
    case 27u: { // traffic signal lens, 24 s cycle shared with the traffic AI\r
      let li = seed & 3u; let axis = (seed >> 2u) & 1u; let par = f32((seed >> 3u) & 1u);\r
      var t = fract(F.camPos.w / 24.0 + 0.25 * par);\r
      if (axis == 1u) { t = fract(t + 0.5); }\r
      var lit = 0u;\r
      if (t < 0.42) { lit = 2u; } else if (t < 0.5) { lit = 1u; }\r
      let cols = array<vec3f, 3>(vec3f(1.0, 0.05, 0.02), vec3f(1.0, 0.55, 0.0), vec3f(0.1, 1.0, 0.45));\r
      let on = select(0.0, 1.0, li == lit);\r
      s.albedo = cols[li] * 0.08; s.rough = 0.1; s.metal = 0.0; nts = vec3f(0.0, 0.0, 1.0);\r
      s.emissive = cols[li] * on * (6.0 + 40.0 * night);\r
    }\r
    case 28u: { // parking lot: asphalt + bay lines\r
      let depth = f32(seed) / 10.0;\r
      let inRow = step(uvIn.y, 5.2) + step(depth - 5.2, uvIn.y);\r
      let lx = abs(fract(uvIn.x / 2.6 + 0.5) - 0.5) * 2.6;\r
      let line = (1.0 - step(0.06, lx)) * min(inRow, 1.0) + (1.0 - step(0.06, abs(uvIn.y - 5.2))) + (1.0 - step(0.06, abs(uvIn.y - (depth - 5.2))));\r
      let paint = min(line, 1.0);\r
      s.albedo = mix(s.albedo * 1.1, vec3f(0.7, 0.7, 0.66), paint); s.rough = mix(s.rough, 0.55, paint);\r
    }\r
    case 29u: { s.albedo *= vec3f(2.2, 1.7, 1.3); s.rough = 0.75; }\r
    case 33u: { // skin: pores (normal), blotchy redness and freckle-scale albedo variation, mesh-space so it never swims\r
      let q = uvIn * vec2f(420.0, 260.0);\r
      let e = 0.35;\r
      let h0 = vnoise(q, 11u); let hx = vnoise(q + vec2f(e, 0.0), 11u); let hy = vnoise(q + vec2f(0.0, e), 11u);\r
      nts = normalize(vec3f((h0 - hx) * 0.35, (h0 - hy) * 0.35, 1.0));\r
      let blotch = vnoise(uvIn * vec2f(8.0, 5.0), 12u);\r
      let fine = vnoise(uvIn * vec2f(40.0, 30.0), 13u);\r
      s.albedo = I.extra.rgb * (0.9 + 0.12 * fine) * mix(vec3f(1.0), vec3f(1.08, 0.94, 0.92), blotch * 0.6);\r
      s.rough = 0.42 + 0.15 * fine; s.metal = 0.0;\r
      // cheap subsurface: light bleeding through thin skin warms the terminator\r
      s.emissive += I.extra.rgb * vec3f(1.0, 0.45, 0.3) * F.sunColor.rgb * 0.015 * max(dot(Ng, F.sunDir.xyz) + 0.4, 0.0);\r
    }\r
    case 38u: { // head: skin + procedural face (u = 0.75 faces forward, v = latitude 0 bottom .. 1 top)\r
      let fine = vnoise(uvIn * vec2f(160.0, 120.0), 13u);\r
      var col = I.extra.rgb * (0.92 + 0.1 * fine);\r
      let du = (uvIn.x - 0.75) * 2.0; let v = uvIn.y;\r
      let ad = abs(du);\r
      // cheeks a little warmer, eye sockets slightly darker\r
      col *= mix(vec3f(1.0), vec3f(1.07, 0.95, 0.93), smoothstep(0.12, 0.0, length(vec2f(ad - 0.17, (v - 0.47) * 1.4))));\r
      col *= 1.0 - 0.18 * smoothstep(0.09, 0.0, length(vec2f(ad - 0.115, (v - 0.54) * 1.5)));\r
      // eyes: sclera, iris, pupil, specular catch-light\r
      let ep = vec2f(ad - 0.115, (v - 0.535) * 1.25);\r
      let eye = smoothstep(0.05, 0.039, length(ep * vec2f(1.0, 1.8)));\r
      let iris = smoothstep(0.026, 0.02, length(ep));\r
      let pupil = smoothstep(0.009, 0.006, length(ep));\r
      col = mix(col, vec3f(0.75, 0.72, 0.68), eye);\r
      let irisCol = mix(vec3f(0.12, 0.07, 0.03), vec3f(0.1, 0.18, 0.25), step(0.7, hashf(u32(I.extra.w * 7.0 + I.color.r * 50.0))));\r
      col = mix(col, irisCol, iris * eye); col = mix(col, vec3f(0.01), pupil * eye);\r
      // eyebrows\r
      let brow = smoothstep(0.012, 0.004, abs(v - 0.595 - 0.04 * (0.11 - abs(ad - 0.11)))) * smoothstep(0.17, 0.15, ad) * smoothstep(0.04, 0.06, ad);\r
      let hp = array<vec3f, 5>(vec3f(0.02, 0.015, 0.01), vec3f(0.12, 0.07, 0.03), vec3f(0.35, 0.22, 0.09), vec3f(0.4, 0.4, 0.4), vec3f(0.06, 0.03, 0.015));\r
      col = mix(col, hp[u32(I.extra.w) % 5u] * 0.8, brow * 0.85);\r
      // lips\r
      let lip = smoothstep(0.012, 0.004, abs(v - 0.36 + 0.15 * du * du)) * smoothstep(0.075, 0.06, ad);\r
      col = mix(col, I.extra.rgb * vec3f(0.85, 0.5, 0.48), lip);\r
      s.albedo = col;\r
      s.rough = mix(0.45 + 0.1 * fine, 0.15, eye) ; s.metal = 0.0;\r
      nts = vec3f(0.0, 0.0, 1.0);\r
      s.emissive += I.extra.rgb * vec3f(1.0, 0.45, 0.3) * F.sunColor.rgb * 0.015 * max(dot(Ng, F.sunDir.xyz) + 0.4, 0.0);\r
    }\r
    case 39u: { // matte military paint with grime / streaks\r
      let grime = vnoise(uvIn * vec2f(6.0, 1.5), 21u) * 0.6 + vnoise(uvIn * vec2f(30.0, 8.0), 22u) * 0.4;\r
      s.albedo = I.color.rgb * (0.78 + 0.32 * grime); s.rough = 0.62 - 0.12 * grime; s.metal = 0.0; nts = vec3f(0.0, 0.0, 1.0);\r
    }\r
    case 40u: { s.albedo = vec3f(0.0); s.rough = 1.0; s.emissive = I.color.rgb * 60.0; nts = vec3f(0.0, 0.0, 1.0); }\r
    case 34u: { // photo cotton, recoloured by the shirt colour (keeps the weave's luminance detail)\r
      let l = luminance(s.albedo) / 0.35;\r
      s.albedo = I.color.rgb * clamp(l, 0.3, 2.0) * 1.1; s.rough = max(s.rough, 0.7);\r
    }\r
    case 35u: { // photo denim: blue pants keep the real denim colour, other colours are re-dyed\r
      let pc = I.extra2.rgb;\r
      let l = luminance(s.albedo) / 0.12;\r
      let isDenim = pc.b > pc.r * 1.6;\r
      s.albedo = select(pc * clamp(l, 0.3, 2.2) * 1.1, s.albedo * (luminance(pc) / 0.09) * 0.9, isDenim);\r
      s.rough = max(s.rough, 0.65);\r
    }\r
    case 36u: { s.albedo = s.albedo * 0.7 + I.extra2.rgb * 0.03; }\r
    case 37u: {\r
      let hp = array<vec3f, 5>(vec3f(0.02, 0.015, 0.01), vec3f(0.12, 0.07, 0.03), vec3f(0.35, 0.22, 0.09), vec3f(0.4, 0.4, 0.4), vec3f(0.06, 0.03, 0.015));\r
      // strands: fine stripes along the scalp direction + a soft sheen\r
      let strand = vnoise(vec2f(uvIn.x * 220.0, uvIn.y * 8.0), 9u);\r
      s.albedo = hp[u32(I.extra.w) % 5u] * (0.65 + 0.6 * strand); s.rough = 0.38 + 0.2 * strand;\r
      nts = normalize(vec3f((strand - 0.5) * 0.6, 0.0, 1.0));\r
    }\r
    case 10u: {\r
      // painted street furniture / equipment colours by seed\r
      let pal = array<vec3f, 8>(vec3f(0.55), vec3f(0.08, 0.2, 0.12), vec3f(0.6, 0.05, 0.03), vec3f(0.05, 0.12, 0.35), vec3f(0.12), vec3f(0.65, 0.5, 0.05), vec3f(0.5, 0.5, 0.48), vec3f(0.2, 0.2, 0.22));\r
      let h = seed % 97u;\r
      if (h >= 40u && h < 100u && h != 61u) {\r
        s.albedo = pal[h % 8u] * (0.7 + 0.5 * a.r); s.metal = 0.2; s.rough = 0.45;\r
        if (h == 70u) { s.albedo = vec3f(0.65, 0.12, 0.04); }\r
        if (h == 40u || h == 41u || h == 90u) { s.albedo = vec3f(0.04, 0.045, 0.05); s.rough = 0.4; }\r
      }\r
    }\r
    case 11u: { s.albedo = vec3f(0.9); s.emissive = vec3f(1.0, 0.82, 0.55) * (40.0 * night + 0.5); s.rough = 0.3; }\r
    case 16u: { s.albedo = I.color.rgb; s.rough = 0.32; s.metal = 0.35; s.clearcoat = 1.0; nts = vec3f(0, 0, 1); }\r
    case 17u: { s.albedo = vec3f(0.02, 0.025, 0.03); s.rough = 0.05; s.metal = 0.0; mask = 1.0; nts = vec3f(0, 0, 1); }\r
    case 19u: { s.albedo = vec3f(0.9); s.rough = 0.12; s.metal = 1.0; nts = vec3f(0, 0, 1); }\r
    case 20u: { s.albedo = I.color.rgb; s.rough = 0.6; s.metal = 0.0; nts = vec3f(0, 0, 1); }\r
    case 21u: { s.albedo *= I.color.rgb * 1.4; }\r
    case 22u: { s.albedo = vec3f(0.9); s.rough = 0.1; s.emissive = vec3f(1.0, 0.95, 0.85) * (2.0 + 60.0 * night) * I.extra.x; nts = vec3f(0, 0, 1); }\r
    case 23u: { s.albedo = vec3f(0.4, 0.02, 0.02); s.rough = 0.2; s.emissive = vec3f(1.0, 0.03, 0.02) * (0.6 + 15.0 * night + 25.0 * I.extra.y); nts = vec3f(0, 0, 1); }\r
    case 24u: { s.albedo = I.color.rgb; s.rough = 0.7; nts = vec3f(0, 0, 1); }\r
    default: {}\r
  }\r
  // windows: glass with reflections + random interior lights at night\r
  // smooth glass coverage (the mask is mip-filtered; a hard threshold flickers at window edges)\r
  let gm = select(0.0, smoothstep(0.35, 0.85, mask), id == 4u || id == 5u || id == 6u);\r
  if (gm > 0.0) {\r
    s.rough = mix(s.rough, 0.04, gm); s.metal = mix(s.metal, 0.0, gm);\r
    nts = normalize(mix(nts, vec3f(0.0, 0.0, 1.0), gm));\r
    let cell = vec2i(floor(uvIn));\r
    let r = hash21(cell, seed);\r
    let lit = step(0.55, r) * night;\r
    let warm = mix(vec3f(1.0, 0.75, 0.45), vec3f(0.75, 0.85, 1.0), step(0.85, r));\r
    let inner = fract(uvIn);\r
    s.emissive += warm * lit * gm * (0.6 + 0.8 * hash21(cell, seed + 1u)) * (0.6 + 0.4 * inner.y) * 3.0;\r
  }\r
  // rain wetness: darken porous albedo, smoother surface, flatter normal on upward faces\r
  let up = smoothstep(0.6, 0.95, Ng.y);\r
  let puddle = smoothstep(0.45, 0.65, vnoise(wpos.xz * 0.35, 77u)) * up;\r
  let wetAmt = wet * max(up * 0.6, puddle);\r
  s.albedo *= mix(1.0, 0.55, wet * (1.0 - s.metal) * (0.4 + 0.6 * up));\r
  s.rough = mix(s.rough, 0.06, wetAmt);\r
  nts = normalize(mix(nts, vec3f(0, 0, 1), wet * puddle));\r
  s.n = normalize(TBN * nts);\r
  return s;\r
}\r
\r
// --- water ---\r
fn waterNormal(p: vec2f, t: f32) -> vec3f {\r
  var n = vec2f(0.0);\r
  let dirs = array<vec2f, 4>(vec2f(1.0, 0.3), vec2f(-0.4, 1.0), vec2f(0.7, -0.8), vec2f(-1.0, -0.2));\r
  let freqs = array<f32, 4>(0.21, 0.37, 0.71, 1.37);\r
  for (var i = 0; i < 4; i++) {\r
    let d = normalize(dirs[i]); let f = freqs[i];\r
    let ph = dot(d, p) * f + t * sqrt(9.8 * f) * 1.0;\r
    n += d * cos(ph) * 0.35 / (1.0 + f * 1.5);\r
  }\r
  n += (vec2f(vnoise(p * 1.7 + t * 0.4, 5u), vnoise(p * 1.7 - t * 0.35, 6u)) - 0.5) * 0.25;\r
  n += (vec2f(vnoise(p * 5.0 - t * 0.9, 7u), vnoise(p * 5.0 + t * 1.1, 8u)) - 0.5) * 0.12;\r
  return normalize(vec3f(-n.x, 1.0, -n.y));\r
}\r
fn terrainAt(x: f32, z: f32) -> f32 {\r
  let p = (vec2f(x, z) + 200.0) / 400.0 * 255.0;\r
  let i = vec2i(clamp(floor(p), vec2f(0.0), vec2f(254.0)));\r
  let f = clamp(p - vec2f(i), vec2f(0.0), vec2f(1.0));\r
  let a = textureLoad(hmapTex, i, 0).r; let b = textureLoad(hmapTex, i + vec2i(1, 0), 0).r;\r
  let c = textureLoad(hmapTex, i + vec2i(0, 1), 0).r; let d = textureLoad(hmapTex, i + vec2i(1, 1), 0).r;\r
  if (abs(x) > 200.0 || abs(z) > 200.0) { return -14.0; }\r
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\r
}\r
\r
fn applyFog(col: vec3f, wpos: vec3f, V: vec3f) -> vec3f {\r
  let dist = length(wpos - F.camPos.xyz);\r
  let dens = F.fog.x; let fall = F.fog.y;\r
  let h0 = F.camPos.y; let dy = wpos.y - h0;\r
  var od = dens * exp(-fall * h0) * dist;\r
  if (abs(dy) > 0.01) { od *= (1.0 - exp(-fall * dy)) / (fall * dy); }\r
  let fogAmt = 1.0 - exp(-od);\r
  let sky = envSample(-V, 3.0);\r
  let sunAmt = pow(max(dot(-V, F.sunDir.xyz), 0.0), 8.0);\r
  let inscatter = sky * 0.9 + F.sunColor.rgb * 0.08 * sunAmt;\r
  return mix(col, inscatter, fogAmt);\r
}\r
\r
fn lampLight(P: vec3f, N: vec3f, V: vec3f, s: Surf, f0: vec3f, a: f32) -> vec3f {\r
  if (F.sunDir.w < 0.01) { return vec3f(0.0); }\r
  let ci = vec2i(clamp(floor((P.xz + 200.0) / 10.0), vec2f(0.0), vec2f(39.0)));\r
  let ids = textureLoad(lampGrid, ci, 0);\r
  var acc = vec3f(0.0);\r
  for (var k = 0; k < 4; k++) {\r
    let id = ids[k];\r
    if (id == 0xFFFFFFFFu) { break; }\r
    let L4 = lamps[id];\r
    let d = L4.xyz - P; let dist2 = dot(d, d);\r
    let L = d * inverseSqrt(dist2);\r
    let nl = max(dot(N, L), 0.0);\r
    if (nl <= 0.0) { continue; }\r
    let win = pow(clamp(1.0 - pow(dist2 / (18.0 * 18.0), 2.0), 0.0, 1.0), 2.0);\r
    // light cone pointing down\r
    let cone = smoothstep(0.1, 0.6, -L.y * -1.0 + 0.0) ;\r
    let att = L4.w * win / (dist2 + 1.0) * (0.3 + 0.7 * smoothstep(-0.2, 0.6, -(-L.y)));\r
    let H = normalize(L + V);\r
    let spec = D_GGX(max(dot(N, H), 0.0), a) * V_Smith(max(dot(N, V), 1e-3), nl, a) * F_Schlick(f0, max(dot(V, H), 0.0));\r
    acc += vec3f(1.0, 0.78, 0.5) * att * nl * ((1.0 - s.metal) * s.albedo / PI + spec);\r
    _ = cone;\r
  }\r
  return acc * F.sunDir.w;\r
}\r
\r
fn spotLights(P: vec3f, N: vec3f, V: vec3f, s: Surf, f0: vec3f, a: f32) -> vec3f {\r
  var acc = vec3f(0.0);\r
  let n = u32(F.misc.y);\r
  for (var k = 0u; k < n; k++) {\r
    let p4 = spots[k * 2u]; let d4 = spots[k * 2u + 1u];\r
    let d = p4.xyz - P; let dist2 = dot(d, d);\r
    if (dist2 > 60.0 * 60.0) { continue; }\r
    let L = d * inverseSqrt(dist2);\r
    let cd = dot(-L, d4.xyz);\r
    let cone = smoothstep(d4.w, d4.w + 0.08, cd);\r
    if (cone <= 0.0) { continue; }\r
    let nl = max(dot(N, L), 0.0);\r
    let H = normalize(L + V);\r
    let spec = D_GGX(max(dot(N, H), 0.0), a) * V_Smith(max(dot(N, V), 1e-3), nl, a) * F_Schlick(f0, max(dot(V, H), 0.0));\r
    acc += vec3f(1.0, 0.95, 0.85) * p4.w * cone / (dist2 + 1.0) * nl * ((1.0 - s.metal) * s.albedo / PI + spec);\r
  }\r
  return acc;\r
}\r
\r
struct FOut { @location(0) color: vec4f, @location(1) vel: vec2f, @location(2) gbuf: vec4f, @location(3) alb: vec4f };\r
\r
fn velocity(cur: vec4f, prev: vec4f) -> vec2f {\r
  let c = cur.xy / cur.w; let p = prev.xy / prev.w;\r
  return (c - p) * vec2f(0.5, -0.5);\r
}\r
\r
@fragment fn fsMain(i: VOut, @builtin(front_facing) ff: bool) -> FOut {\r
  let I = inst[i.ii];\r
  var Ng = normalize(i.nrm);\r
  if (!ff) { Ng = -Ng; }\r
  let V = normalize(F.camPos.xyz - i.wpos);\r
  let viewZ = -(F.view * vec4f(i.wpos, 1.0)).z;\r
  let ao = mix(1.0, textureSample(aoTex, envSamp, i.clip.xy * F.screen.zw).r, F.params.z);\r
  let sunL = F.sunDir.xyz;\r
  var o: FOut;\r
  o.vel = velocity(i.cur, i.prev);\r
\r
  let id = select(i.mat & 255u, u32(I.color.w), I.color.w >= 0.0);\r
  if (id == 25u) {\r
    // ---------------- water ----------------\r
    let t = F.camPos.w;\r
    let depth = max(-terrainAt(i.wpos.x, i.wpos.z), 0.0);\r
    var N = waterNormal(i.wpos.xz, t);\r
    let distFade = smoothstep(80.0, 600.0, length(i.wpos - F.camPos.xyz));\r
    N = normalize(mix(N, vec3f(0.0, 1.0, 0.0), distFade * 0.7));\r
    let R = reflect(-V, N);\r
    let nv = max(dot(N, V), 0.0);\r
    let fres = 0.02 + 0.98 * pow(1.0 - nv, 5.0);\r
    var refl = envSample(vec3f(R.x, abs(R.y), R.z), 0.5);\r
    let H = normalize(sunL + V);\r
    let sh = shadowFactor(i.wpos, vec3f(0.0, 1.0, 0.0), viewZ);\r
    let spec = D_GGX(max(dot(N, H), 0.0), 0.02) * 0.25 * F.sunColor.rgb * sh * fres * 4.0;\r
    let shallow = vec3f(0.06, 0.32, 0.30); let deep = vec3f(0.005, 0.03, 0.05);\r
    let ambient = envSample(vec3f(0.0, 1.0, 0.0), 6.0);\r
    var body = mix(shallow, deep, 1.0 - exp(-depth * 0.35)) * (ambient * 0.8 + F.sunColor.rgb * max(sunL.y, 0.0) * 0.12 * sh);\r
    let foam = (1.0 - smoothstep(0.0, 0.6, depth)) * (0.6 + 0.4 * sin(t * 1.5 + i.wpos.x * 0.5 + i.wpos.z * 0.3)) * smoothstep(0.35, 0.6, vnoise(i.wpos.xz * 1.5 + t * 0.3, 3u));\r
    body = mix(body, (ambient + F.sunColor.rgb * max(sunL.y, 0.0) * sh / PI) * 0.7, foam);\r
    var col = mix(body, refl, fres * (1.0 - foam)) + spec * (1.0 - foam);\r
    col += lampLight(i.wpos, N, V, Surf(vec3f(0.02), 0.05, 0.0, N, vec3f(0.0), 1.0, 0.0), vec3f(0.02), 0.05) * 0.5;\r
    o.color = vec4f(applyFog(col, i.wpos, V), 1.0);\r
    let fogK = exp(-length(i.wpos - F.camPos.xyz) * F.fog.x);\r
    o.gbuf = vec4f(octEncode(N), 0.03, fres * (1.0 - foam) * fogK);\r
    o.alb = vec4f(0.0);\r
    return o;\r
  }\r
\r
  let TBN = cotangentFrame(Ng, i.wpos, i.uv);\r
  let s = material(i.mat, i.uv, i.wpos, Ng, I, TBN);\r
  var N = s.n;\r
  if (dot(N, V) < 0.0) { N = normalize(N + V * (-dot(N, V) + 0.01)); }\r
  let a = max(s.rough * s.rough, 0.002);\r
  let f0 = mix(vec3f(0.04), s.albedo, s.metal);\r
  let nv = max(dot(N, V), 1e-3);\r
  // sun / moon\r
  let nl = max(dot(N, sunL), 0.0);\r
  var direct = vec3f(0.0);\r
  if (nl > 0.0 && dot(Ng, sunL) > -0.05) {\r
    let sh = shadowFactor(i.wpos, Ng, viewZ);\r
    let H = normalize(sunL + V);\r
    let Fs = F_Schlick(f0, max(dot(V, H), 0.0));\r
    let spec = D_GGX(max(dot(N, H), 0.0), a) * V_Smith(nv, nl, a) * Fs;\r
    let kd = (1.0 - Fs) * (1.0 - s.metal);\r
    direct = (kd * s.albedo / PI + spec) * F.sunColor.rgb * nl * sh;\r
    if (s.clearcoat > 0.0) {\r
      let ccF = F_Schlick(vec3f(0.04), max(dot(V, H), 0.0)).x;\r
      direct += D_GGX(max(dot(N, H), 0.0), 0.02) * V_Smith(nv, nl, 0.02) * ccF * F.sunColor.rgb * nl * sh * s.clearcoat;\r
    }\r
  }\r
  // image based lighting from the atmosphere LUT\r
  let maxLod = F.params.w;\r
  let irr = envSample(N, maxLod - 1.0) * 0.9 + envSample(vec3f(0.0, 1.0, 0.0), maxLod - 1.0) * 0.1 * max(N.y, 0.0);\r
  let R = reflect(-V, N);\r
  var Rd = R;\r
  // reflections below the horizon see the (darker) city / ground instead of sky\r
  var horizonOcc = smoothstep(-0.15, 0.1, Rd.y);\r
  Rd.y = max(Rd.y, 0.02);\r
  let pref = envSample(Rd, s.rough * (maxLod - 1.0)) * mix(0.12, 1.0, horizonOcc);\r
  let spec = envBRDF(f0, s.rough, nv);\r
  let skyVis = mix(0.6, 1.0, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));\r
  var ambient = ((1.0 - s.metal) * s.albedo * irr * skyVis + pref * spec) * ao * s.ao;\r
  if (s.clearcoat > 0.0) { ambient += envSample(Rd, 0.3) * mix(0.12, 1.0, horizonOcc) * envBRDF(vec3f(0.04), 0.03, nv).x * ao * s.clearcoat; }\r
  var col = direct + ambient + s.emissive;\r
  col += lampLight(i.wpos, N, V, s, f0, a) * ao;\r
  col += spotLights(i.wpos, N, V, s, f0, a);\r
  o.color = vec4f(applyFog(col, i.wpos, V), 1.0);\r
  let fogK = exp(-length(i.wpos - F.camPos.xyz) * F.fog.x * 1.5);\r
  let specW = luminance(spec) * ao * s.ao + s.clearcoat * envBRDF(vec3f(0.04), 0.03, nv).x * ao;\r
  o.gbuf = vec4f(octEncode(N), s.rough, specW * fogK);\r
  o.alb = vec4f((1.0 - s.metal) * s.albedo * fogK, ao * s.ao);\r
  return o;\r
}\r
`,Ke=`// Physically based single-scattering atmosphere (Rayleigh + Mie) rendered into an equirect LUT,\r
// which doubles as the image-based-lighting environment (mip chain = rough reflections / irradiance).\r
@group(0) @binding(0) var<uniform> F: Frame;\r
@group(1) @binding(0) var srcTex: texture_2d<f32>;\r
@group(1) @binding(1) var srcSamp: sampler;\r
\r
const RE = 6360e3; const RA = 6420e3;\r
const BR = vec3f(5.8e-6, 13.5e-6, 33.1e-6);\r
const BM = 21e-6; const HR = 8000.0; const HM = 1200.0;\r
\r
fn raySphere(ro: vec3f, rd: vec3f, r: f32) -> vec2f {\r
  let b = dot(ro, rd); let c = dot(ro, ro) - r * r; let d = b * b - c;\r
  if (d < 0.0) { return vec2f(-1.0); }\r
  let s = sqrt(d); return vec2f(-b - s, -b + s);\r
}\r
\r
fn atmosphere(rd: vec3f, sun: vec3f, sunI: f32) -> vec3f {\r
  if (sunI <= 0.0) { return vec3f(0.0); }\r
  let ro = vec3f(0.0, RE + 60.0, 0.0);\r
  var tmax = raySphere(ro, rd, RA).y;\r
  let tg = raySphere(ro, rd, RE);\r
  let hitGround = tg.x > 0.0;\r
  if (hitGround) { tmax = tg.x; }\r
  let n = 16; let ds = tmax / f32(n);\r
  var odR = 0.0; var odM = 0.0; var sumR = vec3f(0.0); var sumM = vec3f(0.0);\r
  let mu = dot(rd, sun);\r
  let pR = 3.0 / (16.0 * PI) * (1.0 + mu * mu);\r
  let g = 0.76;\r
  let pM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + mu * mu)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * mu, 1.5));\r
  for (var i = 0; i < n; i++) {\r
    let p = ro + rd * (ds * (f32(i) + 0.5));\r
    let h = length(p) - RE;\r
    let hr = exp(-h / HR) * ds; let hm = exp(-h / HM) * ds;\r
    odR += hr; odM += hm;\r
    let tl = raySphere(p, sun, RA).y;\r
    let dl = tl / 6.0;\r
    var lR = 0.0; var lM = 0.0; var ok = true;\r
    for (var j = 0; j < 6; j++) {\r
      let pl = p + sun * (dl * (f32(j) + 0.5));\r
      let hl = length(pl) - RE;\r
      if (hl < 0.0) { ok = false; break; }\r
      lR += exp(-hl / HR) * dl; lM += exp(-hl / HM) * dl;\r
    }\r
    if (ok) {\r
      let tau = BR * (odR + lR) + BM * 1.1 * (odM + lM);\r
      let att = exp(-tau);\r
      sumR += att * hr; sumM += att * hm;\r
    }\r
  }\r
  var col = sunI * (sumR * BR * pR + sumM * BM * pM);\r
  if (hitGround) {\r
    let tv = exp(-(BR * odR + BM * 1.1 * odM));\r
    let ts = exp(-(BR * HR + BM * 1.1 * HM) / max(sun.y, 0.03));\r
    col += tv * vec3f(0.09, 0.085, 0.08) / PI * sunI * 0.33 * ts * max(sun.y, 0.0);\r
  }\r
  return col;\r
}\r
\r
struct FullOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };\r
@vertex fn vsFull(@builtin(vertex_index) vi: u32) -> FullOut {\r
  let p = vec2f(f32((vi << 1u) & 2u), f32(vi & 2u));\r
  var o: FullOut;\r
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);\r
  o.uv = vec2f(p.x, 1.0 - p.y);\r
  return o;\r
}\r
\r
const SKY_SCALE = 0.55;\r
@fragment fn fsLut(i: FullOut) -> @location(0) vec4f {\r
  let d = equirectToDir(i.uv);\r
  var c = atmosphere(d, F.sun.xyz, F.sun.w) + atmosphere(d, F.moon.xyz, F.moon.w);\r
  c = c * SKY_SCALE + vec3f(0.0006, 0.0009, 0.0018) * F.sunDir.w; // faint night airglow\r
  return vec4f(c, 1.0);\r
}\r
\r
// separable-ish blur while downsampling: wider kernel at each mip approximates GGX prefiltering\r
@fragment fn fsEnvDown(i: FullOut) -> @location(0) vec4f {\r
  let dims = vec2f(textureDimensions(srcTex));\r
  let t = 1.0 / dims;\r
  var c = vec4f(0.0); var w = 0.0;\r
  for (var y = -2; y <= 2; y++) { for (var x = -2; x <= 2; x++) {\r
    let k = exp(-f32(x * x + y * y) / 4.0);\r
    c += textureSampleLevel(srcTex, srcSamp, i.uv + vec2f(f32(x), f32(y)) * t * 1.5, 0.0) * k; w += k;\r
  } }\r
  return c / w;\r
}\r
\r
struct SkyOut { @location(0) color: vec4f, @location(1) vel: vec2f, @location(2) gbuf: vec4f, @location(3) alb: vec4f };\r
@fragment fn fsSky(i: FullOut) -> SkyOut {\r
  let ndc = vec2f(i.uv.x * 2.0 - 1.0, 1.0 - i.uv.y * 2.0);\r
  let wp = F.invViewProj * vec4f(ndc, 1.0, 1.0);\r
  let d = normalize(wp.xyz / wp.w - F.camPos.xyz);\r
  var c = textureSampleLevel(srcTex, srcSamp, dirToEquirect(d), 0.0).rgb;\r
  // sun disc with limb darkening\r
  let sd = dot(d, F.sun.xyz);\r
  let sunR = 0.99996;\r
  if (sd > sunR && F.sun.w > 0.0) {\r
    let tr = exp(-(BR * HR + BM * 1.1 * HM) / max(F.sun.y + 0.02, 0.02));\r
    let limb = 1.0 - pow(1.0 - (sd - sunR) / (1.0 - sunR), 0.5) * 0.0;\r
    c += tr * 2500.0 * limb * smoothstep(sunR, sunR + 0.00001, sd);\r
  }\r
  // moon + stars at night\r
  let night = F.sunDir.w;\r
  if (night > 0.0 && d.y > 0.0) {\r
    let md = dot(d, F.moon.xyz);\r
    c += vec3f(0.9, 0.95, 1.0) * 1.2 * smoothstep(0.99985, 0.99992, md) * night;\r
    c += vec3f(0.6, 0.7, 1.0) * 0.02 * pow(max(md, 0.0), 300.0) * night;\r
    let sp = d / max(abs(d.y), 0.2) * 300.0;\r
    let cell = vec2i(floor(sp.xz));\r
    let h = hash21(cell, 5u);\r
    let f = fract(sp.xz) - 0.5;\r
    let star = step(0.985, h) * smoothstep(0.12, 0.0, length(f)) * (0.5 + 0.5 * sin(F.camPos.w * (2.0 + h * 5.0) + h * 50.0));\r
    c += vec3f(1.0, 0.95, 0.9) * star * 0.25 * night * smoothstep(0.0, 0.2, d.y);\r
  }\r
  var o: SkyOut;\r
  o.color = vec4f(c, 1.0);\r
  o.gbuf = vec4f(0.0); o.alb = vec4f(0.0);\r
  let cc = F.viewProjNJ * vec4f(d, 0.0); let pc = F.prevViewProj * vec4f(d, 0.0);\r
  o.vel = (cc.xy / cc.w - pc.xy / pc.w) * vec2f(0.5, -0.5);\r
  return o;\r
}\r
`,je=`// Post-processing: SSAO, temporal AA, bloom, tonemapping (ACES) + composite.\r
@group(0) @binding(0) var<uniform> F: Frame;\r
@group(1) @binding(0) var t0: texture_2d<f32>;\r
@group(1) @binding(1) var t1: texture_2d<f32>;\r
@group(1) @binding(2) var t2: texture_2d<f32>;\r
@group(1) @binding(3) var depthTex: texture_depth_2d;\r
@group(1) @binding(4) var linSamp: sampler;\r
\r
struct FullOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };\r
@vertex fn vsFull(@builtin(vertex_index) vi: u32) -> FullOut {\r
  let p = vec2f(f32((vi << 1u) & 2u), f32(vi & 2u));\r
  var o: FullOut;\r
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);\r
  o.uv = vec2f(p.x, 1.0 - p.y);\r
  return o;\r
}\r
\r
fn viewPos(uv: vec2f, d: f32) -> vec3f {\r
  let p = F.invProj * vec4f(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0);\r
  return p.xyz / p.w;\r
}\r
fn loadDepth(uv: vec2f) -> f32 {\r
  let dims = vec2i(textureDimensions(depthTex));\r
  let p = clamp(vec2i(uv * vec2f(dims)), vec2i(0), dims - 1);\r
  return textureLoad(depthTex, p, 0);\r
}\r
\r
// ---------------- SSAO (half resolution) ----------------\r
@fragment fn fsSSAO(i: FullOut) -> @location(0) vec4f {\r
  let d = loadDepth(i.uv);\r
  if (d <= 0.0) { return vec4f(1.0); }\r
  let P = viewPos(i.uv, d);\r
  let px = 1.0 / F.screen.xy;\r
  let pr = viewPos(i.uv + vec2f(px.x * 2.0, 0.0), loadDepth(i.uv + vec2f(px.x * 2.0, 0.0)));\r
  let pl = viewPos(i.uv - vec2f(px.x * 2.0, 0.0), loadDepth(i.uv - vec2f(px.x * 2.0, 0.0)));\r
  let pd = viewPos(i.uv + vec2f(0.0, px.y * 2.0), loadDepth(i.uv + vec2f(0.0, px.y * 2.0)));\r
  let pu = viewPos(i.uv - vec2f(0.0, px.y * 2.0), loadDepth(i.uv - vec2f(0.0, px.y * 2.0)));\r
  let dx = select(P - pl, pr - P, abs(pr.z - P.z) < abs(P.z - pl.z));\r
  let dy = select(P - pu, pd - P, abs(pd.z - P.z) < abs(P.z - pu.z));\r
  let N = normalize(cross(dy, dx));\r
  let noise = interleavedGradientNoise(i.pos.xy);\r
  let radius = 1.2;\r
  var occ = 0.0;\r
  let n = 8;\r
  for (var k = 0; k < n; k++) {\r
    let fk = f32(k) + noise;\r
    // spiral hemisphere samples\r
    let a = fk * 2.399963;\r
    let r = sqrt((fk + 0.5) / f32(n));\r
    let z = sqrt(1.0 - r * r);\r
    var t = normalize(cross(N, select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(N.y) > 0.9)));\r
    let b = cross(N, t);\r
    let s = (t * cos(a) * r + b * sin(a) * r + N * z) * radius * (0.25 + 0.75 * fract(fk * 0.618));\r
    let q = P + s;\r
    let c = F.proj * vec4f(q, 1.0);\r
    let suv = vec2f(c.x / c.w * 0.5 + 0.5, 0.5 - c.y / c.w * 0.5);\r
    if (any(suv < vec2f(0.0)) || any(suv > vec2f(1.0))) { continue; }\r
    let sd = loadDepth(suv);\r
    let sp = viewPos(suv, sd);\r
    let range = smoothstep(0.0, 1.0, radius / abs(P.z - sp.z));\r
    occ += select(0.0, 1.0, sp.z >= q.z + 0.05) * range;\r
  }\r
  let ao = clamp(1.0 - occ / f32(n) * 1.3, 0.0, 1.0);\r
  return vec4f(ao, 0.0, 0.0, 1.0);\r
}\r
\r
@fragment fn fsBlurAO(i: FullOut) -> @location(0) vec4f {\r
  let dims = vec2f(textureDimensions(t0));\r
  let c = viewPos(i.uv, loadDepth(i.uv)).z;\r
  var sum = 0.0; var w = 0.0;\r
  for (var y = -2; y <= 2; y++) { for (var x = -2; x <= 2; x++) {\r
    let uv = i.uv + vec2f(f32(x), f32(y)) / dims;\r
    let z = viewPos(uv, loadDepth(uv)).z;\r
    let k = exp(-abs(z - c) * 2.0);\r
    sum += textureSampleLevel(t0, linSamp, uv, 0.0).r * k; w += k;\r
  } }\r
  return vec4f(sum / max(w, 1e-4), 0.0, 0.0, 1.0);\r
}\r
\r
// ---------------- TAA ----------------\r
fn rgb2ycocg(c: vec3f) -> vec3f { return vec3f(0.25 * c.r + 0.5 * c.g + 0.25 * c.b, 0.5 * c.r - 0.5 * c.b, -0.25 * c.r + 0.5 * c.g - 0.25 * c.b); }\r
fn ycocg2rgb(c: vec3f) -> vec3f { return vec3f(c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z); }\r
fn tonemapW(c: vec3f) -> vec3f { return c / (1.0 + luminance(c)); }\r
fn untonemapW(c: vec3f) -> vec3f { return c / max(1.0 - luminance(c), 1e-4); }\r
\r
// t0 = current HDR, t1 = history, t2 = velocity\r
@fragment fn fsTAA(i: FullOut) -> @location(0) vec4f {\r
  let dims = vec2i(textureDimensions(t0));\r
  let p = vec2i(i.pos.xy);\r
  var mn = vec3f(1e9); var mx = vec3f(-1e9); var m1 = vec3f(0.0); var m2 = vec3f(0.0);\r
  var cur = vec3f(0.0);\r
  // velocity of the closest depth in 3x3 (dilation for edges)\r
  var best = 0.0; var bp = p;\r
  for (var y = -1; y <= 1; y++) { for (var x = -1; x <= 1; x++) {\r
    let q = clamp(p + vec2i(x, y), vec2i(0), dims - 1);\r
    let c = rgb2ycocg(tonemapW(textureLoad(t0, q, 0).rgb));\r
    if (x == 0 && y == 0) { cur = c; }\r
    m1 += c; m2 += c * c;\r
    let dd = textureLoad(depthTex, q, 0);\r
    if (dd > best) { best = dd; bp = q; }\r
  } }\r
  let mean = m1 / 9.0; let sigma = sqrt(max(m2 / 9.0 - mean * mean, vec3f(0.0)));\r
  mn = mean - sigma * 1.25; mx = mean + sigma * 1.25;\r
  let vel = textureLoad(t2, bp, 0).xy;\r
  let puv = i.uv - vel;\r
  if (F.misc.x < 1.0 || any(puv < vec2f(0.0)) || any(puv > vec2f(1.0))) { return vec4f(untonemapW(ycocg2rgb(cur)), 1.0); }\r
  // Catmull-Rom-ish history fetch via bilinear (cheap)\r
  var hist = rgb2ycocg(tonemapW(textureSampleLevel(t1, linSamp, puv, 0.0).rgb));\r
  hist = clamp(hist, mn, mx);\r
  let speed = length(vel * vec2f(dims));\r
  let alpha = mix(0.08, 0.25, clamp(speed / 20.0, 0.0, 1.0));\r
  let res = mix(hist, cur, alpha);\r
  let rgb = untonemapW(ycocg2rgb(res));\r
  return vec4f(max(rgb, vec3f(0.0)), 1.0);\r
}\r
\r
// ---------------- Bloom ----------------\r
@fragment fn fsBloomDown(i: FullOut) -> @location(0) vec4f {\r
  let t = 1.0 / vec2f(textureDimensions(t0));\r
  let uv = i.uv;\r
  let a = textureSampleLevel(t0, linSamp, uv + t * vec2f(-2.0, -2.0), 0.0).rgb;\r
  let b = textureSampleLevel(t0, linSamp, uv + t * vec2f(0.0, -2.0), 0.0).rgb;\r
  let c = textureSampleLevel(t0, linSamp, uv + t * vec2f(2.0, -2.0), 0.0).rgb;\r
  let d = textureSampleLevel(t0, linSamp, uv + t * vec2f(-2.0, 0.0), 0.0).rgb;\r
  let e = textureSampleLevel(t0, linSamp, uv, 0.0).rgb;\r
  let f = textureSampleLevel(t0, linSamp, uv + t * vec2f(2.0, 0.0), 0.0).rgb;\r
  let g = textureSampleLevel(t0, linSamp, uv + t * vec2f(-2.0, 2.0), 0.0).rgb;\r
  let h = textureSampleLevel(t0, linSamp, uv + t * vec2f(0.0, 2.0), 0.0).rgb;\r
  let k = textureSampleLevel(t0, linSamp, uv + t * vec2f(2.0, 2.0), 0.0).rgb;\r
  let l = textureSampleLevel(t0, linSamp, uv + t * vec2f(-1.0, -1.0), 0.0).rgb;\r
  let m = textureSampleLevel(t0, linSamp, uv + t * vec2f(1.0, -1.0), 0.0).rgb;\r
  let n = textureSampleLevel(t0, linSamp, uv + t * vec2f(-1.0, 1.0), 0.0).rgb;\r
  let o = textureSampleLevel(t0, linSamp, uv + t * vec2f(1.0, 1.0), 0.0).rgb;\r
  var c0 = e * 0.125 + (a + c + g + k) * 0.03125 + (b + d + f + h) * 0.0625 + (l + m + n + o) * 0.125;\r
  c0 = c0 / (1.0 + luminance(c0) * 0.02); // soft clamp fireflies\r
  return vec4f(min(c0, vec3f(6e4)), 1.0);\r
}\r
@fragment fn fsBloomUp(i: FullOut) -> @location(0) vec4f {\r
  let t = 1.0 / vec2f(textureDimensions(t0));\r
  var c = vec3f(0.0);\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(-1.0, -1.0), 0.0).rgb * 1.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(0.0, -1.0), 0.0).rgb * 2.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(1.0, -1.0), 0.0).rgb * 1.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(-1.0, 0.0), 0.0).rgb * 2.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv, 0.0).rgb * 4.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(1.0, 0.0), 0.0).rgb * 2.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(-1.0, 1.0), 0.0).rgb * 1.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(0.0, 1.0), 0.0).rgb * 2.0;\r
  c += textureSampleLevel(t0, linSamp, i.uv + t * vec2f(1.0, 1.0), 0.0).rgb * 1.0;\r
  return vec4f(c / 16.0, 1.0);\r
}\r
\r
// ---------------- Composite: exposure, bloom, ACES, grading ----------------\r
fn acesFitted(x: vec3f) -> vec3f {\r
  // Stephen Hill's fit of the ACES RRT+ODT\r
  let m1 = mat3x3f(vec3f(0.59719, 0.07600, 0.02840), vec3f(0.35458, 0.90834, 0.13383), vec3f(0.04823, 0.01566, 0.83777));\r
  let m2 = mat3x3f(vec3f(1.60475, -0.10208, -0.00327), vec3f(-0.53108, 1.10813, -0.07276), vec3f(-0.07367, -0.00605, 1.07602));\r
  let v = m1 * x;\r
  let a = v * (v + 0.0245786) - 0.000090537;\r
  let b = v * (0.983729 * v + 0.4329510) + 0.238081;\r
  return clamp(m2 * (a / b), vec3f(0.0), vec3f(1.0));\r
}\r
fn linearToSrgb(c: vec3f) -> vec3f {\r
  return select(1.055 * pow(c, vec3f(1.0 / 2.4)) - 0.055, c * 12.92, c <= vec3f(0.0031308));\r
}\r
// t0 = TAA output, t1 = bloom\r
@fragment fn fsComposite(i: FullOut) -> @location(0) vec4f {\r
  let dims = vec2f(textureDimensions(t0));\r
  // light sharpening to counter TAA softness\r
  let t = 1.0 / dims;\r
  let c = textureSampleLevel(t0, linSamp, i.uv, 0.0).rgb;\r
  let nb = textureSampleLevel(t0, linSamp, i.uv + vec2f(t.x, 0.0), 0.0).rgb + textureSampleLevel(t0, linSamp, i.uv - vec2f(t.x, 0.0), 0.0).rgb\r
         + textureSampleLevel(t0, linSamp, i.uv + vec2f(0.0, t.y), 0.0).rgb + textureSampleLevel(t0, linSamp, i.uv - vec2f(0.0, t.y), 0.0).rgb;\r
  var hdr = max(c + (c - nb * 0.25) * 0.25, vec3f(0.0));\r
  let bloom = textureSampleLevel(t1, linSamp, i.uv, 0.0).rgb;\r
  hdr = mix(hdr, bloom, (0.05 + 0.03 * F.sunDir.w) * F.fog.z);\r
  var col = acesFitted(hdr * F.sunColor.w);\r
  // vignette + subtle grade\r
  let v = i.uv - 0.5;\r
  col *= 1.0 - dot(v, v) * 0.45;\r
  col = pow(col, vec3f(1.0 / 1.0));\r
  // rain streaks (screen-space, two parallax layers)\r
  if (F.params.y > 0.0) {\r
    var streak = 0.0;\r
    for (var l = 0; l < 2; l++) {\r
      let sc = select(vec2f(110.0, 5.0), vec2f(60.0, 3.0), l == 1);\r
      var p = vec2f(i.uv.x + i.uv.y * 0.08, i.uv.y) * sc;\r
      p.y -= F.camPos.w * select(9.0, 6.0, l == 1);\r
      let cell = vec2i(floor(p));\r
      let h = hash21(cell, u32(l) * 31u + 7u);\r
      let f = fract(p);\r
      let x = abs(f.x - (0.2 + 0.6 * h));\r
      let len = 0.35 + 0.4 * hash21(cell, 99u);\r
      streak += smoothstep(0.06, 0.0, x) * smoothstep(0.0, 0.1, f.y) * smoothstep(len, len - 0.15, f.y) * step(0.55, h);\r
    }\r
    col = mix(col, vec3f(0.8, 0.85, 0.9), clamp(streak * 0.18 * F.params.y, 0.0, 0.4));\r
    col *= 1.0 - 0.15 * F.params.y;\r
  }\r
  var srgb = linearToSrgb(col);\r
  srgb += (interleavedGradientNoise(i.pos.xy + F.misc.x * 13.0) - 0.5) / 255.0;\r
  return vec4f(srgb, 1.0);\r
}\r
`,$e=`// Procedural, tileable PBR material textures generated on the GPU at startup.\r
// Output A: rgb = albedo (linear), a = roughness.   Output B: rg = normal.xy*0.5+0.5, b = metalness, a = mask (glass/window).\r
@group(0) @binding(0) var outA: texture_storage_2d_array<rgba8unorm, write>;\r
@group(0) @binding(1) var outB: texture_storage_2d_array<rgba8unorm, write>;\r
// CC0 photo-scanned materials (ambientCG), 3 layers per set: colour, normal (GL), roughness\r
@group(0) @binding(2) var photo: texture_2d_array<f32>;\r
@group(0) @binding(3) var<uniform> PH: vec4f; // x = photos available\r
\r
struct Photo { albedo: vec3f, rough: f32, n: vec3f };\r
fn photoAt(ps: i32, uv: vec2f) -> Photo {\r
  let p = vec2i(fract(uv) * 512.0) % vec2i(512);\r
  var o: Photo;\r
  let c = textureLoad(photo, p, ps * 3, 0).rgb;\r
  o.albedo = pow(c, vec3f(2.2)); // sRGB -> linear\r
  let nn = textureLoad(photo, p, ps * 3 + 1, 0).rgb * 2.0 - 1.0;\r
  o.n = normalize(vec3f(nn.x, -nn.y, max(nn.z, 0.05))); // GL +Y (image up) -> our +v-down convention\r
  o.rough = textureLoad(photo, p, ps * 3 + 2, 0).r;\r
  return o;\r
}\r
\r
const N = 512.0;\r
\r
fn hu(x: u32) -> u32 { var v = x * 747796405u + 2891336453u; let w = ((v >> ((v >> 28u) + 4u)) ^ v) * 277803737u; return (w >> 22u) ^ w; }\r
fn h2(i: vec2i, s: u32) -> f32 { return f32(hu((u32(i.x) * 73856093u) ^ (u32(i.y) * 19349663u) ^ (s * 83492791u))) / 4294967295.0; }\r
fn wrapi(i: vec2i, per: i32) -> vec2i { return ((i % vec2i(per)) + vec2i(per)) % vec2i(per); }\r
// periodic value noise: p in [0, per)\r
fn pn(p: vec2f, per: i32, s: u32) -> f32 {\r
  let i = vec2i(floor(p)); let f = fract(p); let u = f * f * (3.0 - 2.0 * f);\r
  let a = h2(wrapi(i, per), s); let b = h2(wrapi(i + vec2i(1, 0), per), s);\r
  let c = h2(wrapi(i + vec2i(0, 1), per), s); let d = h2(wrapi(i + vec2i(1, 1), per), s);\r
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
fn fbm(uv: vec2f, base: i32, oct: i32, s: u32) -> f32 {\r
  var sum = 0.0; var amp = 0.5; var per = base; var norm = 0.0;\r
  for (var o = 0; o < oct; o++) { sum += amp * pn(uv * f32(per), per, s + u32(o) * 17u); norm += amp; amp *= 0.5; per *= 2; }\r
  return sum / norm;\r
}\r
// periodic voronoi: returns (F1, F2, cell hash)\r
fn vor(uv: vec2f, per: i32, s: u32) -> vec3f {\r
  let p = uv * f32(per); let i = vec2i(floor(p)); let f = fract(p);\r
  var d1 = 9.0; var d2 = 9.0; var id = 0.0;\r
  for (var y = -1; y <= 1; y++) { for (var x = -1; x <= 1; x++) {\r
    let c = vec2i(x, y); let w = wrapi(i + c, per);\r
    let o = vec2f(h2(w, s), h2(w, s + 7u));\r
    let d = length(vec2f(c) + o - f);\r
    if (d < d1) { d2 = d1; d1 = d; id = h2(w, s + 13u); } else if (d < d2) { d2 = d; }\r
  } }\r
  return vec3f(d1, d2, id);\r
}\r
fn box(uv: vec2f, lo: vec2f, hi: vec2f) -> f32 { return step(lo.x, uv.x) * step(uv.x, hi.x) * step(lo.y, uv.y) * step(uv.y, hi.y); }\r
fn sbox(uv: vec2f, lo: vec2f, hi: vec2f, e: f32) -> f32 {\r
  let a = smoothstep(lo - e, lo + e, uv); let b = 1.0 - smoothstep(hi - e, hi + e, uv);\r
  return a.x * a.y * b.x * b.y;\r
}\r
\r
struct G { albedo: vec3f, rough: f32, h: f32, metal: f32, mask: f32 };\r
\r
fn windowBay(uv: vec2f, lo: vec2f, hi: vec2f, wall: vec3f, wallRough: f32, seed: u32, frameCol: vec3f) -> G {\r
  var g: G;\r
  let n = fbm(uv, 4, 5, seed);\r
  let stain = fbm(uv * vec2f(1.0, 0.25), 8, 4, seed + 3u);\r
  g.albedo = wall * (0.85 + 0.3 * n) * mix(1.0, 0.8, smoothstep(0.55, 0.8, stain) * (1.0 - uv.y));\r
  g.rough = wallRough; g.h = 0.5 + 0.05 * n; g.metal = 0.0; g.mask = 0.0;\r
  let fr = 0.025;\r
  let outer = sbox(uv, lo - fr, hi + fr, 0.003);\r
  let inner = sbox(uv, lo, hi, 0.003);\r
  if (outer > 0.5) { g.albedo = frameCol; g.rough = 0.45; g.h = 0.45; g.metal = 0.5; }\r
  if (inner > 0.5) {\r
    // glass with a mullion\r
    let mull = 1.0 - sbox(uv, vec2f((lo.x + hi.x) * 0.5 - 0.008, lo.y), vec2f((lo.x + hi.x) * 0.5 + 0.008, hi.y), 0.002);\r
    g.albedo = mix(frameCol, vec3f(0.02, 0.025, 0.03), mull); g.rough = mix(0.45, 0.04, mull); g.h = 0.3; g.metal = mix(0.5, 0.0, mull); g.mask = mull;\r
  }\r
  // sill\r
  if (box(uv, vec2f(lo.x - 0.04, lo.y - 0.05), vec2f(hi.x + 0.04, lo.y - fr)) > 0.5) { g.albedo = wall * 1.15; g.h = 0.65; g.rough = 0.7; }\r
  return g;\r
}\r
\r
fn gen(layer: i32, uv: vec2f) -> G {\r
  var g: G; g.metal = 0.0; g.mask = 0.0;\r
  switch layer {\r
    case 0: { // asphalt\r
      let n = fbm(uv, 8, 6, 1u); let grit = h2(vec2i(uv * N * 0.5), 2u); let pch = fbm(uv, 2, 3, 3u);\r
      let v = vor(uv, 24, 4u);\r
      g.albedo = vec3f(0.055, 0.056, 0.06) * (0.75 + 0.5 * n) * (0.8 + 0.4 * grit) * mix(1.0, 0.75, smoothstep(0.55, 0.7, pch));\r
      g.albedo += vec3f(0.05) * step(0.93, grit);\r
      let crack = 1.0 - smoothstep(0.0, 0.02, v.y - v.x);\r
      g.albedo *= 1.0 - 0.5 * crack * step(0.6, fbm(uv, 4, 2, 5u));\r
      g.rough = 0.88 - 0.1 * grit; g.h = 0.5 + 0.25 * grit + 0.2 * n - 0.3 * crack;\r
    }\r
    case 1: { // paving tiles 4x4\r
      let t = uv * 4.0; let f = fract(t); let id = vec2i(floor(t));\r
      let grout = min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y));\r
      let tv = h2(id, 9u); let n = fbm(uv, 16, 4, 6u);\r
      g.albedo = vec3f(0.42, 0.40, 0.37) * (0.8 + 0.25 * tv) * (0.85 + 0.3 * n);\r
      let gm = smoothstep(0.015, 0.035, grout);\r
      g.albedo = mix(vec3f(0.18, 0.17, 0.16), g.albedo, gm);\r
      g.rough = mix(0.95, 0.75 + 0.1 * n, gm); g.h = gm * (0.6 + 0.1 * n);\r
    }\r
    case 2: { // grass\r
      let n = fbm(uv, 4, 6, 7u); let blades = h2(vec2i(uv * N), 8u); let clump = fbm(uv, 16, 3, 9u);\r
      g.albedo = mix(vec3f(0.05, 0.11, 0.025), vec3f(0.13, 0.17, 0.05), n) * (0.7 + 0.5 * blades) * (0.8 + 0.4 * clump);\r
      g.albedo = mix(g.albedo, vec3f(0.17, 0.14, 0.08), smoothstep(0.62, 0.8, fbm(uv, 2, 4, 10u)) * 0.6);\r
      g.rough = 0.92; g.h = 0.5 * blades + 0.4 * clump;\r
    }\r
    case 3: { // sand with ripples\r
      let n = fbm(uv, 4, 5, 11u); let grain = h2(vec2i(uv * N), 12u);\r
      let rip = sin((uv.x + 0.15 * fbm(uv, 2, 3, 13u)) * 2.0 * PI * 12.0) * 0.5 + 0.5;\r
      g.albedo = vec3f(0.62, 0.53, 0.38) * (0.85 + 0.2 * n) * (0.9 + 0.2 * grain);\r
      g.rough = 0.95; g.h = 0.12 * rip + 0.25 * grain + 0.35 * n;\r
    }\r
    case 4: { // concrete facade bay with punched window\r
      g = windowBay(uv, vec2f(0.16, 0.28), vec2f(0.84, 0.86), vec3f(0.55, 0.53, 0.5), 0.85, 20u, vec3f(0.12, 0.12, 0.13));\r
    }\r
    case 5: { // glass curtain wall\r
      let n = fbm(uv, 4, 3, 30u);\r
      g.albedo = vec3f(0.03, 0.045, 0.06) * (0.9 + 0.2 * n); g.rough = 0.03; g.metal = 0.0; g.h = 0.4; g.mask = 1.0;\r
      let spandrel = box(uv, vec2f(0.0, 0.0), vec2f(1.0, 0.16));\r
      if (spandrel > 0.5) { g.albedo = vec3f(0.08, 0.09, 0.1); g.rough = 0.25; g.mask = 0.0; g.metal = 0.6; g.h = 0.45; }\r
      let mx = min(abs(uv.x - 0.0), min(abs(uv.x - 1.0), abs(uv.x - 0.5)));\r
      let my = min(abs(uv.y - 0.0), min(abs(uv.y - 1.0), abs(uv.y - 0.16)));\r
      if (mx < 0.018 || my < 0.012) { g.albedo = vec3f(0.35, 0.36, 0.38); g.rough = 0.35; g.metal = 1.0; g.h = 0.6; g.mask = 0.0; }\r
    }\r
    case 6: { // brick facade bay\r
      let rows = 44.0; let cols = 14.0;\r
      var b = uv * vec2f(cols, rows); let row = floor(b.y);\r
      b.x += 0.5 * (row % 2.0);\r
      let f = fract(b); let id = vec2i(floor(b));\r
      let mortar = min(min(f.x, 1.0 - f.x) * 0.25, min(f.y, 1.0 - f.y) * 1.0);\r
      let bv = h2(wrapi(id, 64), 40u);\r
      var col = mix(vec3f(0.36, 0.13, 0.08), vec3f(0.5, 0.22, 0.13), bv) * (0.8 + 0.3 * fbm(uv, 16, 3, 41u));\r
      let mm = smoothstep(0.04, 0.09, mortar);\r
      col = mix(vec3f(0.42, 0.40, 0.36), col, mm);\r
      g = windowBay(uv, vec2f(0.27, 0.27), vec2f(0.73, 0.84), vec3f(1.0), 0.9, 42u, vec3f(0.85, 0.83, 0.78));\r
      if (g.mask < 0.5 && g.metal < 0.1 && g.h < 0.6) { g.albedo = col * g.albedo; g.h = 0.45 + 0.1 * mm; }\r
      // stone lintel\r
      if (box(uv, vec2f(0.24, 0.86), vec2f(0.76, 0.92)) > 0.5) { g.albedo = vec3f(0.6, 0.58, 0.52); g.h = 0.6; g.rough = 0.8; }\r
    }\r
    case 7: { // roof membrane + gravel\r
      let n = fbm(uv, 8, 5, 50u); let grit = h2(vec2i(uv * N), 51u);\r
      g.albedo = vec3f(0.28, 0.27, 0.26) * (0.8 + 0.4 * n) * (0.85 + 0.3 * grit);\r
      let seam = 1.0 - smoothstep(0.0, 0.01, abs(fract(uv.x * 2.0) - 0.5) - 0.48);\r
      g.albedo *= 1.0 - 0.3 * seam; g.rough = 0.9; g.h = 0.5 + 0.3 * grit + 0.2 * seam;\r
    }\r
    case 8: { // bark\r
      let n = fbm(uv * vec2f(1.0, 0.25), 16, 5, 60u); let v = vor(uv * vec2f(1.0, 0.25), 8, 61u);\r
      g.albedo = vec3f(0.16, 0.11, 0.07) * (0.6 + 0.6 * n); g.rough = 0.95; g.h = n * 0.6 + 0.4 * smoothstep(0.0, 0.3, v.y - v.x);\r
    }\r
    case 9: { // leaves (clustered)\r
      let v = vor(uv, 24, 70u); let n = fbm(uv, 8, 4, 71u);\r
      let leaf = smoothstep(0.55, 0.2, v.x);\r
      g.albedo = mix(vec3f(0.02, 0.04, 0.01), mix(vec3f(0.06, 0.12, 0.03), vec3f(0.14, 0.2, 0.05), v.z), leaf) * (0.8 + 0.4 * n);\r
      g.rough = 0.65; g.h = leaf * (0.7 + 0.3 * v.z);\r
    }\r
    case 10: { // galvanised metal / painted steel\r
      let n = fbm(uv * vec2f(1.0, 0.1), 64, 3, 80u); let sp = fbm(uv, 8, 4, 81u);\r
      g.albedo = vec3f(0.55, 0.56, 0.57) * (0.85 + 0.2 * n) * mix(1.0, 0.7, smoothstep(0.6, 0.75, sp));\r
      g.rough = 0.4 + 0.2 * sp; g.metal = 0.85; g.h = 0.5 + 0.1 * n;\r
    }\r
    case 11: { // plain concrete\r
      let n = fbm(uv, 8, 6, 90u); let pores = step(0.985, h2(vec2i(uv * N), 91u));\r
      g.albedo = vec3f(0.48, 0.47, 0.45) * (0.8 + 0.35 * n) * (1.0 - 0.4 * pores); g.rough = 0.85; g.h = 0.5 + 0.2 * n - 0.3 * pores;\r
    }\r
    case 12: { // palm frond (leaflets along v)\r
      let s = abs(fract(uv.y * 18.0) - 0.5); let rib = smoothstep(0.03, 0.0, abs(uv.x - 0.5));\r
      let lf = smoothstep(0.45, 0.3, s) * (1.0 - smoothstep(0.42, 0.5, abs(uv.x - 0.5)));\r
      g.albedo = mix(vec3f(0.05, 0.08, 0.02), vec3f(0.12, 0.17, 0.05), lf) + vec3f(0.08, 0.07, 0.02) * rib;\r
      g.rough = 0.6; g.h = lf * 0.6 + rib * 0.4;\r
    }\r
    case 13: { // tyre rubber with tread\r
      let tread = step(0.5, fract(uv.x * 12.0 + step(0.5, fract(uv.y * 3.0)) * 0.5));\r
      g.albedo = vec3f(0.025); g.rough = 0.85; g.h = 0.4 + 0.3 * tread;\r
    }\r
    default: { // 14 fabric weave\r
      let w = sin(uv.x * N * 0.8) * sin(uv.y * N * 0.8);\r
      let n = fbm(uv, 16, 3, 100u);\r
      g.albedo = vec3f(0.7) * (0.85 + 0.15 * w) * (0.9 + 0.2 * n); g.rough = 0.9; g.h = 0.5 + 0.2 * w;\r
    }\r
  }\r
  return g;\r
}\r
\r
@compute @workgroup_size(8, 8, 1)\r
fn main(@builtin(global_invocation_id) id: vec3u) {\r
  if (id.x >= u32(N) || id.y >= u32(N)) { return; }\r
  let layer = i32(id.z);\r
  let uv = (vec2f(id.xy) + 0.5) / N;\r
  let g = gen(layer, uv);\r
  let e = 1.0 / N;\r
  let hx = gen(layer, fract(uv + vec2f(e, 0.0))).h;\r
  let hy = gen(layer, fract(uv + vec2f(0.0, e))).h;\r
  let strength = select(4.0, 8.0, layer == 0 || layer == 3 || layer == 6 || layer == 8);\r
  // +v in texture space points "up" the face (uv.y grows with world height), so flip y\r
  let n = normalize(vec3f((g.h - hx) * strength, -(g.h - hy) * strength, 1.0));\r
  var alb = g.albedo; var rough = g.rough; var nrm = n;\r
  if (PH.x > 0.5) {\r
    // layer -> photo set: 0 asphalt 1 paving 2 grass 3 sand 4 concrete 5 brick 6 bark 7 gravel 8 metal\r
    var ps = -1; var scale = vec2f(1.0); var full = true; var tint = vec3f(1.0);\r
    switch layer {\r
      case 0: { ps = 0; }\r
      case 1: { ps = 1; }\r
      case 2: { ps = 2; scale = vec2f(2.0); }\r
      case 3: { ps = 3; scale = vec2f(2.0); }\r
      case 11: { ps = 4; scale = vec2f(2.0); }\r
      case 4: { ps = 4; scale = vec2f(2.0, 2.0); full = false; tint = vec3f(1.05); }\r
      case 6: { ps = 5; scale = vec2f(1.5, 1.5); full = false; }\r
      case 8: { ps = 6; scale = vec2f(1.0, 2.0); }\r
      case 7: { ps = 7; scale = vec2f(2.0); }\r
      case 10: { ps = 8; }\r
      case 15: { ps = 9; scale = vec2f(2.0); }\r
      case 16: { ps = 10; scale = vec2f(2.0); }\r
      case 17: { ps = 11; scale = vec2f(2.0); }\r
      default: {}\r
    }\r
    if (ps >= 0) {\r
      let ph = photoAt(ps, uv * scale);\r
      // facades: only plain wall pixels (not glass, frames, sills or lintels)\r
      let wall = full || (g.mask < 0.5 && g.metal < 0.1 && abs(g.h - 0.5) < 0.08);\r
      if (wall) {\r
        alb = ph.albedo * tint; rough = select(max(ph.rough, 0.45), max(ph.rough, 0.25), layer == 17); nrm = ph.n; // dry masonry/ground is never mirror-like\r
        if (layer == 10) { rough = clamp(ph.rough * 0.8, 0.2, 0.8); }\r
      }\r
    }\r
  }\r
  textureStore(outA, id.xy, layer, vec4f(clamp(alb, vec3f(0.0), vec3f(1.0)), rough));\r
  textureStore(outB, id.xy, layer, vec4f(nrm.xy * 0.5 + 0.5, g.metal, g.mask));\r
}\r
\r
// ---- mip generation (2x2 box) ----\r
@group(0) @binding(0) var srcTex: texture_2d_array<f32>;\r
@group(0) @binding(1) var dstA: texture_storage_2d_array<rgba8unorm, write>;\r
@compute @workgroup_size(8, 8, 1)\r
fn mip(@builtin(global_invocation_id) id: vec3u) {\r
  let dims = textureDimensions(dstA);\r
  if (id.x >= dims.x || id.y >= dims.y) { return; }\r
  let p = vec2i(id.xy) * 2; let l = i32(id.z);\r
  let c = (textureLoad(srcTex, p, l, 0) + textureLoad(srcTex, p + vec2i(1, 0), l, 0) + textureLoad(srcTex, p + vec2i(0, 1), l, 0) + textureLoad(srcTex, p + vec2i(1, 1), l, 0)) * 0.25;\r
  textureStore(dstA, id.xy, l, c);\r
}\r
`,We=`// Screen-space reflections + screen-space diffuse GI (half resolution), then a full-res resolve.\r
@group(0) @binding(0) var<uniform> F: Frame;\r
@group(1) @binding(0) var hdrTex: texture_2d<f32>;\r
@group(1) @binding(1) var gbufTex: texture_2d<f32>;   // oct normal.xy, roughness, specular weight\r
@group(1) @binding(2) var albTex: texture_2d<f32>;    // diffuse albedo * (1 - metal), a = ao\r
@group(1) @binding(3) var depthTex: texture_depth_2d;\r
@group(1) @binding(4) var linSamp: sampler;\r
@group(1) @binding(5) var envTex: texture_2d<f32>;\r
@group(1) @binding(6) var envSamp: sampler;\r
\r
struct FullOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };\r
@vertex fn vsFull(@builtin(vertex_index) vi: u32) -> FullOut {\r
  let p = vec2f(f32((vi << 1u) & 2u), f32(vi & 2u));\r
  var o: FullOut;\r
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);\r
  o.uv = vec2f(p.x, 1.0 - p.y);\r
  return o;\r
}\r
\r
fn depthAt(uv: vec2f) -> f32 {\r
  let dims = vec2i(textureDimensions(depthTex));\r
  return textureLoad(depthTex, clamp(vec2i(uv * vec2f(dims)), vec2i(0), dims - 1), 0);\r
}\r
fn worldPos(uv: vec2f, d: f32) -> vec3f {\r
  let p = F.invViewProj * vec4f(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0);\r
  return p.xyz / p.w;\r
}\r
fn toUv(p: vec3f) -> vec3f {\r
  let c = F.viewProjNJ * vec4f(p, 1.0);\r
  return vec3f(c.x / c.w * 0.5 + 0.5, 0.5 - c.y / c.w * 0.5, c.z / c.w);\r
}\r
fn viewDist(p: vec3f) -> f32 { return -(F.view * vec4f(p, 1.0)).z; }\r
\r
// March a world-space ray; returns (uv, hit) where hit = 1 on intersection.\r
fn march(o: vec3f, d: vec3f, maxDist: f32, steps: i32, jitter: f32, thick: f32) -> vec3f {\r
  var t = maxDist / f32(steps) * (0.3 + jitter);\r
  let grow = 1.12;\r
  var dt = t;\r
  var prevT = 0.0;\r
  for (var i = 0; i < steps; i++) {\r
    let p = o + d * t;\r
    let s = toUv(p);\r
    if (any(s.xy < vec2f(0.0)) || any(s.xy > vec2f(1.0)) || s.z <= 0.0) { return vec3f(0.0); }\r
    let sd = depthAt(s.xy);\r
    if (sd > 0.0) {\r
      let scene = viewDist(worldPos(s.xy, sd));\r
      let ray = viewDist(p);\r
      let diff = ray - scene;\r
      if (diff > 0.02 && diff < thick + t * 0.05) {\r
        // binary refinement\r
        var a = prevT; var b = t;\r
        for (var k = 0; k < 4; k++) {\r
          let m = (a + b) * 0.5;\r
          let q = o + d * m; let sq = toUv(q);\r
          let sdq = depthAt(sq.xy);\r
          if (viewDist(q) - viewDist(worldPos(sq.xy, sdq)) > 0.0) { b = m; } else { a = m; }\r
        }\r
        return vec3f(toUv(o + d * b).xy, 1.0);\r
      }\r
    }\r
    prevT = t;\r
    dt *= grow; t += dt;\r
    if (t > maxDist) { break; }\r
  }\r
  return vec3f(0.0);\r
}\r
\r
fn envSample(d: vec3f, lod: f32) -> vec3f { return textureSampleLevel(envTex, envSamp, dirToEquirect(d), lod).rgb; }\r
\r
struct SsOut { @location(0) refl: vec4f, @location(1) gi: vec4f };\r
\r
@fragment fn fsSsfx(i: FullOut) -> SsOut {\r
  var o: SsOut;\r
  o.refl = vec4f(0.0); o.gi = vec4f(0.0);\r
  let d = depthAt(i.uv);\r
  if (d <= 0.0) { return o; }\r
  let gb = textureSampleLevel(gbufTex, linSamp, i.uv, 0.0);\r
  let N = octDecode(gb.xy);\r
  let rough = gb.z; let specW = gb.w;\r
  let P = worldPos(i.uv, d);\r
  let V = normalize(F.camPos.xyz - P);\r
  let dist = length(F.camPos.xyz - P);\r
  let noise = fract(interleavedGradientNoise(i.pos.xy) + F.misc.x * 0.618034); // varies per frame; integrated by fsTemporal\r
  let origin = P + N * (0.03 + dist * 0.002);\r
\r
  // ---------------- reflections\r
  if (specW > 0.02 && rough < 0.3) {\r
    // mirror direction only (no stochastic jitter -> no noise); rough surfaces fade out below\r
    let R = reflect(-V, N);\r
    let h = march(origin, R, 120.0, 32, 0.5, 1.2);\r
    if (h.z > 0.0) {\r
      let edge = smoothstep(0.0, 0.08, min(min(h.x, 1.0 - h.x), min(h.y, 1.0 - h.y)));\r
      let fade = edge * (1.0 - smoothstep(0.12, 0.3, rough)) * smoothstep(-0.2, 0.1, dot(R, V) * -1.0 + 0.6);\r
      // low-pass the reflected image (3x3 taps, ~12 px wide) so fine textures don't alias into flickering specks\r
      let px = 6.0 / vec2f(textureDimensions(hdrTex));\r
      var hit = vec3f(0.0);\r
      for (var yy = -1; yy <= 1; yy++) { for (var xx = -1; xx <= 1; xx++) {\r
        let wgt = select(0.0625, 0.125, xx == 0 || yy == 0) + select(0.0, 0.125, xx == 0 && yy == 0);\r
        hit += textureSampleLevel(hdrTex, linSamp, h.xy + vec2f(f32(xx), f32(yy)) * px, 0.0).rgb * wgt;\r
      } }\r
      hit = hit / (1.0 + luminance(hit) * 0.5); // tame emissive fireflies / high-contrast speckles\r
      // what the forward pass already added from the sky probe for this direction\r
      var Rd = R; let horizonOcc = smoothstep(-0.15, 0.1, Rd.y); Rd.y = max(Rd.y, 0.02);\r
      let env = envSample(Rd, rough * (F.params.w - 1.0)) * mix(0.12, 1.0, horizonOcc);\r
      o.refl = vec4f((hit - env) * specW * fade, fade);\r
    }\r
  }\r
  // ---------------- one-bounce diffuse GI (4 cosine-weighted short rays)\r
  let alb = textureSampleLevel(albTex, linSamp, i.uv, 0.0);\r
  if (dot(alb.rgb, vec3f(1.0)) > 0.01 && dist < 120.0) {\r
    let t = normalize(cross(N, select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(N.y) > 0.9)));\r
    let b = cross(N, t);\r
    var acc = vec3f(0.0);\r
    for (var k = 0; k < 2; k++) {\r
      let u1 = fract(noise + f32(k) * 0.5); let u2 = fract(noise * 7.13 + f32(k) * 0.381966);\r
      let r = sqrt(u1); let ph = u2 * 6.2831;\r
      let dir = normalize(t * (r * cos(ph)) + b * (r * sin(ph)) + N * sqrt(max(1.0 - u1, 0.0)));\r
      let h = march(origin, dir, 6.0, 8, fract(noise * 3.3 + f32(k) * 0.25), 1.0);\r
      if (h.z > 0.0) { let c = textureSampleLevel(hdrTex, linSamp, h.xy, 0.0).rgb; acc += c / (1.0 + luminance(c)); }\r
    }\r
    o.gi = vec4f(alb.rgb * acc * 0.5 * 0.3 * alb.a, 1.0);\r
  }\r
  return o;\r
}\r
\r
// ---- temporal accumulation (denoiser): reproject history with motion vectors, clamp to the local neighbourhood\r
@group(1) @binding(0) var tRefl: texture_2d<f32>;\r
@group(1) @binding(1) var tGi: texture_2d<f32>;\r
@group(1) @binding(2) var tVel: texture_2d<f32>;\r
@group(1) @binding(3) var tDepth: texture_depth_2d;\r
@group(1) @binding(4) var tSamp: sampler;\r
@group(1) @binding(5) var tPrevRefl: texture_2d<f32>;\r
@group(1) @binding(6) var tPrevGi: texture_2d<f32>;\r
fn clampHist(cur: texture_2d<f32>, p: vec2i, dims: vec2i, h: vec3f, k: f32) -> vec3f {\r
  var m1 = vec3f(0.0); var m2 = vec3f(0.0);\r
  for (var y = -1; y <= 1; y++) { for (var x = -1; x <= 1; x++) {\r
    let c = textureLoad(cur, clamp(p + vec2i(x, y), vec2i(0), dims - 1), 0).rgb;\r
    m1 += c; m2 += c * c;\r
  } }\r
  let mean = m1 / 9.0; let sig = sqrt(max(m2 / 9.0 - mean * mean, vec3f(0.0)));\r
  return clamp(h, mean - sig * k, mean + sig * k);\r
}\r
@fragment fn fsTemporal(i: FullOut) -> SsOut {\r
  let dims = vec2i(textureDimensions(tRefl));\r
  let p = vec2i(i.pos.xy);\r
  let cr = textureLoad(tRefl, p, 0); let cg = textureLoad(tGi, p, 0);\r
  let vel = textureSampleLevel(tVel, tSamp, i.uv, 0.0).xy;\r
  let puv = i.uv - vel;\r
  var o: SsOut;\r
  if (F.misc.x < 1.0 || any(puv < vec2f(0.0)) || any(puv > vec2f(1.0))) { o.refl = cr; o.gi = cg; return o; }\r
  let hr = textureSampleLevel(tPrevRefl, tSamp, puv, 0.0);\r
  let hg = textureSampleLevel(tPrevGi, tSamp, puv, 0.0);\r
  let moving = clamp(length(vel * vec2f(dims)) * 0.5, 0.0, 1.0);\r
  // wide clamp keeps the history (smooth) while rejecting disocclusions / ghosts\r
  let r = clampHist(tRefl, p, dims, hr.rgb, 2.0 + 1.0 * (1.0 - moving));\r
  let g = clampHist(tGi, p, dims, hg.rgb, 3.0);\r
  let a = mix(0.08, 0.2, moving);\r
  o.refl = vec4f(mix(r, cr.rgb, a), mix(hr.a, cr.a, a));\r
  o.gi = vec4f(mix(g, cg.rgb, mix(0.05, 0.12, moving)), 1.0);\r
  return o;\r
}\r
\r
// ---- resolve: add half-res SSR/SSGI back to the HDR buffer with depth-aware upsampling\r
@group(1) @binding(0) var rHdr: texture_2d<f32>;\r
@group(1) @binding(1) var rRefl: texture_2d<f32>;\r
@group(1) @binding(2) var rGi: texture_2d<f32>;\r
@group(1) @binding(3) var rDepth: texture_depth_2d;\r
@group(1) @binding(4) var rSamp: sampler;\r
@fragment fn fsResolve(i: FullOut) -> @location(0) vec4f {\r
  let p = vec2i(i.pos.xy);\r
  let base = textureLoad(rHdr, p, 0);\r
  let dims = vec2f(textureDimensions(rRefl));\r
  let t = 1.0 / dims;\r
  let dc = textureLoad(rDepth, p, 0);\r
  if (dc <= 0.0) { return base; }\r
  let zc = 1.0 / max(dc, 1e-6);\r
  var refl = vec3f(0.0); var gi = vec3f(0.0); var w = 0.0; var wg = 0.0;\r
  for (var y = -2; y <= 2; y++) { for (var x = -2; x <= 2; x++) {\r
    let uv = i.uv + vec2f(f32(x), f32(y)) * t;\r
    let fdims = vec2f(textureDimensions(rDepth));\r
    let dd = textureLoad(rDepth, clamp(vec2i(uv * fdims), vec2i(0), vec2i(fdims) - 1), 0);\r
    let z = 1.0 / max(dd, 1e-6);\r
    let k = exp(-abs(z - zc) / (zc * 0.05)) * select(1.0, 2.0, x == 0 && y == 0);\r
    refl += textureSampleLevel(rRefl, rSamp, uv, 0.0).rgb * k;\r
    w += k;\r
    // GI is low frequency: wider (stride 2) depth-aware kernel\r
    let uv2 = i.uv + vec2f(f32(x), f32(y)) * t * 2.5;\r
    let dd2 = textureLoad(rDepth, clamp(vec2i(uv2 * fdims), vec2i(0), vec2i(fdims) - 1), 0);\r
    let k2 = exp(-abs(1.0 / max(dd2, 1e-6) - zc) / (zc * 0.04));\r
    gi += textureSampleLevel(rGi, rSamp, uv2, 0.0).rgb * k2; wg += k2;\r
  } }\r
  refl /= max(w, 1e-4); gi /= max(wg, 1e-4);\r
  let mode = u32(F.fog.w); // 1 both, 2 reflections only, 3 GI only\r
  let kr = select(0.0, 1.0, mode == 1u || mode == 2u); let kg = select(0.0, 1.0, mode == 1u || mode == 3u);\r
  return vec4f(max(base.rgb + refl * kr + gi * kg, vec3f(0.0)), 1.0);\r
}\r
`,V=13,S={PELVIS:0,CHEST:1,HEAD:2,LUA:3,LFA:4,RUA:5,RFA:6,LTH:7,LSH:8,LFT:9,RTH:10,RSH:11,RFT:12},Ye=[-1,0,1,1,3,1,5,0,7,8,0,10,11],pe=[[0,.97,0],[0,1.16,0],[0,1.5,0],[-.19,1.43,0],[-.21,1.15,0],[.19,1.43,0],[.21,1.15,0],[-.095,.93,0],[-.1,.51,0],[-.1,.09,0],[.095,.93,0],[.1,.51,0],[.1,.09,0]],A={SKIN:33,SHIRT:34,PANTS:35,SHOES:36,HAIR:37,FACE:38},D=u=>({j:[u],w:[1]}),O=(u,e,t)=>({j:[u,e],w:[1-t,t]}),C=(u,e,t)=>{const n=Math.min(1,Math.max(0,(t-u)/(e-u)));return n*n*(3-2*n)};class Xe{buf=[];verts=[];idx=[];tube(e,t,n,i){const r=this.verts.length;for(let l=0;l<e.length;l++){const a=e[l],s=e[Math.max(0,l-1)].c,h=e[Math.min(e.length-1,l+1)].c;let f=a.axis??X([h[0]-s[0],h[1]-s[1],h[2]-s[2]]);Ie(f)<1e-6&&(f=[0,1,0]);const d=X(Math.abs(f[0])<.9?Y(f,[1,0,0]):Y(f,[0,0,1])),p=Y(f,d);for(let m=0;m<=t;m++){const b=m/t*Math.PI*2,g=Math.cos(b),w=Math.sin(b),M=[p[0]*g*a.rx+d[0]*w*a.rz,p[1]*g*a.rx+d[1]*w*a.rz,p[2]*g*a.rx+d[2]*w*a.rz],P=X([p[0]*g/a.rx+d[0]*w/a.rz,p[1]*g/a.rx+d[1]*w/a.rz,p[2]*g/a.rx+d[2]*w/a.rz]);this.verts.push({p:[a.c[0]+M[0],a.c[1]+M[1],a.c[2]+M[2]],n:P,uv:[m/t*2,a.c[1]*4],mat:a.mat,inf:a.inf})}}const o=t+1;for(let l=0;l+1<e.length;l++)for(let a=0;a<t;a++){const s=r+l*o+a,h=s+o;this.tri(s,h,s+1),this.tri(s+1,h,h+1)}const c=(l,a)=>{const s=e[l],h=this.verts.length;this.verts.push({p:s.c,n:[0,a,0],uv:[0,0],mat:s.mat,inf:s.inf});for(let f=0;f<t;f++)this.tri(h,r+l*o+f,r+l*o+f+1)};n&&c(0,-1),i&&c(e.length-1,1)}ellipsoid(e,t,n,i,r=14,o=10,c=-1){const l=this.verts.length;for(let a=0;a<=o;a++){const s=-Math.PI/2+a/o*Math.PI,h=Math.sin(s),f=c>-1?Math.max(h,c):h,d=Math.sqrt(Math.max(0,1-f*f));for(let p=0;p<=r;p++){const m=p/r*Math.PI*2,b=[Math.cos(m)*d,f,Math.sin(m)*d];this.verts.push({p:[e[0]+b[0]*t[0],e[1]+b[1]*t[1],e[2]+b[2]*t[2]],n:X([b[0]/t[0],b[1]/t[1],b[2]/t[2]]),uv:[p/r,a/o],mat:i,inf:n})}}for(let a=0;a<o;a++)for(let s=0;s<r;s++){const h=l+a*(r+1)+s,f=h+r+1;this.tri(h,f,h+1),this.tri(h+1,f,f+1)}}tri(e,t,n){const i=l=>this.verts[l].p,r=l=>this.verts[l].n,o=Y(ve(i(t),i(e)),ve(i(n),i(e))),c=[r(e)[0]+r(t)[0]+r(n)[0],r(e)[1]+r(t)[1]+r(n)[1],r(e)[2]+r(t)[2]+r(n)[2]];Qe(o,c)>=0?this.idx.push(e,t,n):this.idx.push(e,n,t)}pack(){const e=new ArrayBuffer(this.verts.length*44),t=new DataView(e);return this.verts.forEach((n,i)=>{const r=i*44;[...n.p,...n.n,...n.uv].forEach((a,s)=>t.setFloat32(r+s*4,a,!0)),t.setUint32(r+32,n.mat,!0);const o=n.w??n.inf.w,c=o.reduce((a,s)=>a+s,0)||1,l=o.map(a=>Math.round(a/c*255));l[0]+=255-l.reduce((a,s)=>a+s,0);for(let a=0;a<4;a++)t.setUint8(r+36+a,n.inf.j[a]??0),t.setUint8(r+40+a,a<l.length?l[a]:0)}),{vb:e,ib:new Uint32Array(this.idx)}}}function Ze(){const u=new Xe,e=14,t=[[.84,.13,.09],[.9,.165,.105],[.98,.17,.11],[1.06,.152,.1],[1.14,.15,.1],[1.24,.17,.11],[1.34,.185,.112],[1.42,.18,.1],[1.47,.12,.08],[1.5,.055,.05],[1.56,.048,.048],[1.6,.045,.045]];u.tube(t.map(([n,i,r])=>({c:[0,n,n>1.3?.005:0],rx:i,rz:r,inf:n<1?D(S.PELVIS):n<1.2?O(S.PELVIS,S.CHEST,C(1,1.2,n)):n<1.5?D(S.CHEST):O(S.CHEST,S.HEAD,C(1.5,1.58,n)),mat:n<1.03?A.PANTS:n<1.49?A.SHIRT:A.SKIN})),e,!0,!1),u.ellipsoid([0,1.675,-.005],[.083,.112,.098],D(S.HEAD),A.FACE,24,18),u.ellipsoid([0,1.705,.008],[.088,.09,.104],D(S.HEAD),A.HAIR,16,8,-.05),u.ellipsoid([0,1.665,-.1],[.014,.025,.02],D(S.HEAD),A.SKIN,6,4);for(const n of[-1,1]){const i=n<0,r=i?S.LUA:S.RUA,o=i?S.LFA:S.RFA,c=i?S.LTH:S.RTH,l=i?S.LSH:S.RSH,a=i?S.LFT:S.RFT,s=[[1.5,.03,.032],[1.485,.05,.053],[1.47,.058,.06],[1.4,.052,.054],[1.3,.045,.047],[1.2,.04,.042],[1.15,.037,.038],[1.06,.038,.04],[.97,.03,.033],[.9,.027,.03]];u.tube(s.map(([f,d,p])=>({c:[n*(.19+(1.47-f)*.035),f,0],rx:d,rz:p,inf:f>1.4?O(S.CHEST,r,C(1.47,1.4,f)):f>1.19?D(r):f>1.11?O(r,o,C(1.19,1.11,f)):D(o),mat:f>1.27?A.SHIRT:A.SKIN})),10,!0,!1),u.ellipsoid([n*.222,.85,-.005],[.026,.062,.042],D(o),A.SKIN,8,6);const h=[[.95,.088,.095],[.86,.083,.088],[.72,.07,.075],[.58,.056,.06],[.51,.052,.055],[.44,.055,.06],[.3,.05,.055],[.16,.038,.042],[.1,.036,.04]];u.tube(h.map(([f,d,p])=>({c:[n*.097,f,f<.5&&f>.25?.008:0],rx:d,rz:p,inf:f>.88?O(S.PELVIS,c,C(.97,.88,f)):f>.56?D(c):f>.46?O(c,l,C(.56,.46,f)):f>.12?D(l):O(l,a,C(.12,.08,f)),mat:A.PANTS})),12,!1,!0),u.ellipsoid([n*.1,.055,-.045],[.048,.058,.125],D(a),A.SHOES,10,6,-.6)}return u}const Je={sub:(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]]};function ve(u,e){return Je.sub(u,e)}function Qe(u,e){return u[0]*e[0]+u[1]*e[1]+u[2]*e[2]}function Y(u,e){return[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]]}function Ie(u){return Math.hypot(u[0],u[1],u[2])}function X(u){const e=Ie(u)||1;return[u[0]/e,u[1]/e,u[2]/e]}function et(u,e,t,n,i){const r=Array.from({length:V},()=>[0,0,0]),o=n===2?0:Math.min(1,t/2.5),c=Math.min(1,Math.max(0,(t-3)/3)),l=Math.sin(e),a=Math.cos(e),s=n===2?0:Math.abs(a)*.035*o*(1+c)-.02*o,h=.05*o+.2*c;r[S.PELVIS]=[-l*.12*o,0,a*.04*o],r[S.CHEST]=[l*.2*o,-h,-a*.03*o],r[S.HEAD]=[-l*.08*o,h*.6,0];for(const p of[-1,1]){const m=p<0,b=p*l*(.5*o+.45*c);r[m?S.LUA:S.RUA]=[0,b,p*(.07+.05*c)],r[m?S.LFA:S.RFA]=[0,.15+.25*o+1*c,0];const g=m?e:e+Math.PI,M=Math.sin(g)*(.45*o+.4*c),P=-Math.max(0,Math.sin(g+1.3))*(.85*o+.8*c)-.03;r[m?S.LTH:S.RTH]=[0,M,0],r[m?S.LSH:S.RSH]=[0,P,0],r[m?S.LFT:S.RFT]=[0,-P*.45-M*.35,0]}n===3&&(r[S.LTH][1]=.35,r[S.RTH][1]=.1,r[S.LSH][1]=-.6,r[S.RSH][1]=-.4),n===2&&(r[S.LUA]=[0,.2,-1.1],r[S.RUA]=[0,-.1,1.2],r[S.LSH][1]=-.3);const f=[],d=new Float32Array(16);for(let p=0;p<V;p++){const m=Ye[p],b=pe[p],g=m>=0?pe[m]:[0,0,0],w=[b[0]-g[0],b[1]-g[1]+(p===0?s:0),b[2]-g[2]],M=k.trs(w,r[p][0],r[p][1],r[p][2],[1,1,1],d);f[p]=k.mul(m>=0?f[m]:u,M);const P=k.trs([-b[0],-b[1],-b[2]],0,0,0);i.set(k.mul(f[p],P),p*16)}}const R={CAR:0,WHEEL:1,SBOX:2,SPHERE:3,WATER:4,HELI:5,ROTOR:6,TROTOR:7,GUN:8},tt=9,ne=18,z=512,me=2048,rt=256,nt=128,se=7,Z=4096,j=44,ge=96,xe=204,be=16,q=6,I="rgba16float";class st{device;gpu;worldVB;worldIB;chunks=[];dynVB;dynIB;meshes=[];frameUB;frameData=new Float32Array(xe);instBuf;instData=new Float32Array(Z*j);shadowUB;boneBuf;boneData=new Float32Array(ge*V*2*16);skinVB;skinIB;skinCount=0;skinFirst=0;skinN=0;skinPending=[];prevBones=new Map;lampBuf;lampGrid;spotBuf;texA;texB;shadowTex;envTex;hmapTex;depth;hdr;vel;aoRaw;ao;hist=[];bloom;gbuf;alb;ssr;ssgi;hdr2;ssfxBGL;tempBGL;ssrHist=[];giHist=[];ssHistIdx=0;lumBuf;lumPending=!1;frameBGL;sceneBGL;shadowBGL;texBGL;postBGL;pipes={};frameBG;sceneBG;shadowBG;linSamp;matSamp;envSamp;cmpSamp;width=0;height=0;renderScale=1;frameIndex=0;histIdx=0;prevVP=k.create();prevModels=new Map;batches=[];instCount=1;pending=[];exposure=1;avgLum=.2;aoEnabled=!0;bloomEnabled=!0;taaEnabled=!0;ssfxEnabled=!0;ssfxMode=1;stats={draws:0,tris:0};gpuMs=0;gpuPending=!1;envFrame=0;constructor(e){this.gpu=e;const t=this.device=e.device;this.frameUB=t.createBuffer({size:xe*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.instBuf=t.createBuffer({size:Z*j*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.shadowUB=t.createBuffer({size:256*3,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.boneBuf=t.createBuffer({size:this.boneData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.spotBuf=t.createBuffer({size:be*32,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lumBuf=t.createBuffer({size:256*64,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),this.shadowTex=t.createTexture({size:[me,me,3],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.envTex=t.createTexture({size:[rt,nt],format:I,mipLevelCount:se,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.linSamp=t.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.matSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",maxAnisotropy:8}),this.envSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"clamp-to-edge"}),this.cmpSamp=t.createSampler({compare:"less",magFilter:"linear",minFilter:"linear"});const n=k.create();this.instData.set(n,0),this.instData.set(n,16),this.instData.set([1,1,1,-1,0,0,0,0,0,0,0,0],32);const i=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r=GPUShaderStage.FRAGMENT;this.frameBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:i,buffer:{type:"uniform"}},{binding:1,visibility:i,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.shadowBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",hasDynamicOffset:!0}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.sceneBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{viewDimension:"2d-array"}},{binding:1,visibility:r,texture:{viewDimension:"2d-array"}},{binding:2,visibility:r,sampler:{}},{binding:3,visibility:r,texture:{sampleType:"depth",viewDimension:"2d-array"}},{binding:4,visibility:r,sampler:{type:"comparison"}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,sampler:{}},{binding:7,visibility:r,texture:{}},{binding:8,visibility:r,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:r,buffer:{type:"read-only-storage"}},{binding:10,visibility:r,texture:{sampleType:"uint"}},{binding:11,visibility:r,buffer:{type:"read-only-storage"}}]}),this.texBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,sampler:{}}]}),this.postBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}}]}),this.ssfxBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,sampler:{}}]}),this.tempBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,texture:{}}]}),this.buildDynamicMeshes(),this.createPipelines()}module(e,t){const n=this.device.createShaderModule({code:de+`
`+e,label:t});return n.getCompilationInfo().then(i=>{for(const r of i.messages)r.type==="error"&&console.error(`[${t}] ${r.lineNum}:${r.linePos} ${r.message}`)}),n}createPipelines(){const e=this.device,t=this.module(qe,"scene"),n=this.module(Ke,"sky"),i=this.module(je,"post"),r=[{arrayStride:36,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"}]}],o=(...f)=>e.createPipelineLayout({bindGroupLayouts:f}),c=o(this.frameBGL,this.sceneBGL);this.pipes.shadow=e.createRenderPipeline({layout:o(this.shadowBGL),vertex:{module:t,entryPoint:"vsShadow",buffers:r},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.prepass=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:r},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.prepassNoCull=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:r},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}});const l=f=>({layout:c,vertex:{module:t,entryPoint:"vsMain",buffers:r},fragment:{module:t,entryPoint:"fsMain",targets:[{format:I},{format:"rg16float"},{format:I},{format:"rgba8unorm"}]},primitive:{cullMode:f},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater-equal"}});this.pipes.main=e.createRenderPipeline(l("back"));const a=[{arrayStride:44,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"},{shaderLocation:4,offset:36,format:"uint8x4"},{shaderLocation:5,offset:40,format:"unorm8x4"}]}];this.pipes.skinMain=e.createRenderPipeline({...l("back"),vertex:{module:t,entryPoint:"vsSkinMain",buffers:a}}),this.pipes.skinDepth=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsSkinDepth",buffers:a},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.skinShadow=e.createRenderPipeline({layout:o(this.shadowBGL),vertex:{module:t,entryPoint:"vsSkinShadow",buffers:a},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.mainNoCull=e.createRenderPipeline(l("none")),this.pipes.sky=e.createRenderPipeline({layout:o(this.frameBGL,this.texBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsSky",targets:[{format:I},{format:"rg16float"},{format:I},{format:"rgba8unorm"}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"equal"}}),this.pipes.lut=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsLut",targets:[{format:I}]}}),this.pipes.envDown=e.createRenderPipeline({layout:o(this.frameBGL,this.texBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsEnvDown",targets:[{format:I}]}});const s=(f,d,p)=>e.createRenderPipeline({layout:o(this.frameBGL,this.postBGL),vertex:{module:i,entryPoint:"vsFull"},fragment:{module:i,entryPoint:f,targets:[{format:d,blend:p}]}});this.pipes.ssao=s("fsSSAO","r8unorm"),this.pipes.blurAO=s("fsBlurAO","r8unorm"),this.pipes.taa=s("fsTAA",I),this.pipes.bloomDown=s("fsBloomDown",I),this.pipes.bloomUp=s("fsBloomUp",I,{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}),this.pipes.composite=s("fsComposite",this.gpu.format);const h=this.module(We,"ssfx");this.pipes.ssfx=e.createRenderPipeline({layout:o(this.frameBGL,this.ssfxBGL),vertex:{module:h,entryPoint:"vsFull"},fragment:{module:h,entryPoint:"fsSsfx",targets:[{format:I},{format:I}]}}),this.pipes.ssTemporal=e.createRenderPipeline({layout:o(this.frameBGL,this.tempBGL),vertex:{module:h,entryPoint:"vsFull"},fragment:{module:h,entryPoint:"fsTemporal",targets:[{format:I},{format:I}]}}),this.pipes.resolve=e.createRenderPipeline({layout:o(this.frameBGL,this.postBGL),vertex:{module:h,entryPoint:"vsFull"},fragment:{module:h,entryPoint:"fsResolve",targets:[{format:I}]}})}buildDynamicMeshes(){const e=[];e[R.CAR]=Ae(),e[R.WHEEL]=De(),e[R.SBOX]=fe(.45,12,8),e[R.SPHERE]=fe(1,14,10),e[R.WATER]=ze(),e[R.HELI]=Ce(),e[R.ROTOR]=Ue(),e[R.TROTOR]=He(),e[R.GUN]=_e();let t=0,n=0;for(const a of e)t+=a.v.length,n+=a.i.length;const i=new Float32Array(t),r=new Uint32Array(n);let o=0,c=0;for(let a=0;a<tt;a++){const s=e[a];i.set(s.v,o),r.set(s.i,c),this.meshes[a]={first:c,count:s.i.length,base:o/9},o+=s.v.length,c+=s.i.length}this.dynVB=this.device.createBuffer({size:i.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.dynIB=this.device.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.dynVB,0,i),this.device.queue.writeBuffer(this.dynIB,0,r);const l=Ze().pack();this.skinVB=this.device.createBuffer({size:l.vb.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.skinIB=this.device.createBuffer({size:l.ib.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.skinVB,0,l.vb),this.device.queue.writeBuffer(this.skinIB,0,l.ib),this.skinCount=l.ib.length}async generateTextures(){const e=this.device,t=Math.log2(z)+1,n=()=>e.createTexture({size:[z,z,ne],format:"rgba8unorm",mipLevelCount:t,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});this.texA=n(),this.texB=n();const i=e.createShaderModule({code:de+`
`+$e,label:"texgen"});i.getCompilationInfo().then(p=>{for(const m of p.messages)m.type==="error"&&console.error(`[texgen] ${m.lineNum}: ${m.message}`)});const r=e.createComputePipeline({layout:"auto",compute:{module:i,entryPoint:"main"}}),o=["Asphalt026C","PavingStones130","Grass004","Ground093C","Concrete034","Bricks076C","Bark014","Gravel023","Metal032","Fabric061","Fabric003","Leather026"],c=e.createTexture({size:[z,z,o.length*3],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});let l=1;try{await Promise.all(o.flatMap((p,m)=>["c","n","r"].map(async(b,g)=>{const w=await fetch(`./textures/${p}_${b}.jpg`);if(!w.ok)throw new Error(`${p}_${b}`);const M=await createImageBitmap(await w.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"});e.queue.copyExternalImageToTexture({source:M},{texture:c,origin:[0,0,m*3+g]},[z,z])})))}catch(p){console.warn("[textures] photo set unavailable, using procedural only",p),l=0}const a=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(a,0,new Float32Array([l,0,0,0]));const s=e.createComputePipeline({layout:"auto",compute:{module:i,entryPoint:"mip"}}),h=e.createCommandEncoder(),f=(p,m)=>p.createView({dimension:"2d-array",baseMipLevel:m,mipLevelCount:1});let d=h.beginComputePass();d.setPipeline(r),d.setBindGroup(0,e.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:f(this.texA,0)},{binding:1,resource:f(this.texB,0)},{binding:2,resource:c.createView({dimension:"2d-array"})},{binding:3,resource:{buffer:a}}]})),d.dispatchWorkgroups(z/8,z/8,ne),d.end();for(const p of[this.texA,this.texB])for(let m=1;m<t;m++){const b=Math.max(1,z>>m);d=h.beginComputePass(),d.setPipeline(s),d.setBindGroup(0,e.createBindGroup({layout:s.getBindGroupLayout(0),entries:[{binding:0,resource:f(p,m-1)},{binding:1,resource:f(p,m)}]})),d.dispatchWorkgroups(Math.ceil(b/8),Math.ceil(b/8),ne),d.end()}e.queue.submit([h.finish()]),await e.queue.onSubmittedWorkDone()}setWorld(e){const t=this.device;this.worldVB=t.createBuffer({size:e.verts.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.worldIB=t.createBuffer({size:e.idx.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.worldVB,0,e.verts),t.queue.writeBuffer(this.worldIB,0,e.idx),this.chunks=[];for(let r=0;r<e.chunks.length;r+=8)this.chunks.push({first:e.chunks[r],count:e.chunks[r+1]});this.hmapTex=t.createTexture({size:[256,256],format:"r32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.hmapTex},e.hmap,{bytesPerRow:256*4},[256,256]);const n=e.lamps.length/4;this.lampBuf=t.createBuffer({size:Math.max(16,e.lamps.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.lampBuf,0,e.lamps);const i=new Uint32Array(40*40*4).fill(4294967295);for(let r=0;r<40;r++)for(let o=0;o<40;o++){const c=-200+o*10+5,l=-200+r*10+5,a=[];for(let s=0;s<n;s++){const h=e.lamps[s*4]-c,f=e.lamps[s*4+2]-l,d=h*h+f*f;d<22*22&&a.push([d,s])}a.sort((s,h)=>s[0]-h[0]);for(let s=0;s<Math.min(4,a.length);s++)i[(r*40+o)*4+s]=a[s][1]}this.lampGrid=t.createTexture({size:[40,40],format:"rgba32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.lampGrid},i,{bytesPerRow:40*16},[40,40]),this.frameBG=t.createBindGroup({layout:this.frameBGL,entries:[{binding:0,resource:{buffer:this.frameUB}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]}),this.shadowBG=t.createBindGroup({layout:this.shadowBGL,entries:[{binding:0,resource:{buffer:this.shadowUB,size:64}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]})}resize(e,t,n){const i=this.gpu.canvas,r=Math.max(1,Math.floor(e*Math.min(n,1.5))),o=Math.max(1,Math.floor(t*Math.min(n,1.5))),c=Math.max(64,Math.floor(r*this.renderScale)),l=Math.max(64,Math.floor(o*this.renderScale));if((i.width!==r||i.height!==o)&&(i.width=r,i.height=o),c===this.width&&l===this.height)return;this.width=c,this.height=l;const a=this.device;for(const d of[this.depth,this.hdr,this.vel,this.aoRaw,this.ao,this.bloom,this.gbuf,this.alb,this.ssr,this.ssgi,this.hdr2,...this.hist,...this.ssrHist,...this.giHist])d?.destroy();const s=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.depth=a.createTexture({size:[c,l],format:"depth32float",usage:s}),this.hdr=a.createTexture({size:[c,l],format:I,usage:s}),this.vel=a.createTexture({size:[c,l],format:"rg16float",usage:s});const h=Math.max(1,c>>1),f=Math.max(1,l>>1);this.aoRaw=a.createTexture({size:[h,f],format:"r8unorm",usage:s}),this.ao=a.createTexture({size:[h,f],format:"r8unorm",usage:s}),this.hist=[0,1].map(()=>a.createTexture({size:[c,l],format:I,usage:s})),this.gbuf=a.createTexture({size:[c,l],format:I,usage:s}),this.alb=a.createTexture({size:[c,l],format:"rgba8unorm",usage:s}),this.hdr2=a.createTexture({size:[c,l],format:I,usage:s}),this.ssr=a.createTexture({size:[c,l],format:I,usage:s}),this.ssgi=a.createTexture({size:[c,l],format:I,usage:s}),this.ssrHist=[0,1].map(()=>a.createTexture({size:[c,l],format:I,usage:s})),this.giHist=[0,1].map(()=>a.createTexture({size:[c,l],format:I,usage:s})),this.bloom=a.createTexture({size:[h,f],format:I,mipLevelCount:q,usage:s|GPUTextureUsage.COPY_SRC}),this.frameIndex=0,this.sceneBG=a.createBindGroup({layout:this.sceneBGL,entries:[{binding:0,resource:this.texA.createView({dimension:"2d-array"})},{binding:1,resource:this.texB.createView({dimension:"2d-array"})},{binding:2,resource:this.matSamp},{binding:3,resource:this.shadowTex.createView({dimension:"2d-array"})},{binding:4,resource:this.cmpSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp},{binding:7,resource:this.ao.createView()},{binding:8,resource:this.hmapTex.createView()},{binding:9,resource:{buffer:this.lampBuf}},{binding:10,resource:this.lampGrid.createView()},{binding:11,resource:{buffer:this.spotBuf}}]})}add(e,t,n,i,r=[1,0,0,0]){this.pending.push({mesh:e,key:t,model:n,color:i,extra:r})}addSkinned(e,t,n,i,r,o){this.skinPending.length<ge&&this.skinPending.push({key:e,mats:t.slice(),shirt:n,skin:i,pants:r,hair:o})}flushInstances(){this.pending.sort((n,i)=>n.mesh-i.mesh),this.batches=[];let e=1;for(const n of this.pending){if(e>=Z)break;const i=e*j;this.instData.set(n.model,i);const r=this.prevModels.get(n.key);this.instData.set(r??n.model,i+16),r?r.set(n.model):this.prevModels.set(n.key,new Float32Array(n.model)),this.instData[i+32]=n.color[0],this.instData[i+33]=n.color[1],this.instData[i+34]=n.color[2],this.instData[i+35]=n.color[3]??-1,this.instData.set(n.extra,i+36),this.instData[i+40]=0,this.instData[i+41]=0,this.instData[i+42]=0,this.instData[i+43]=0;const o=this.batches[this.batches.length-1];o&&o.mesh===n.mesh?o.count++:this.batches.push({mesh:n.mesh,first:e,count:1}),e++}this.skinFirst=e,this.skinN=0;const t=k.create();for(const n of this.skinPending){if(e>=Z)break;const i=this.skinN,r=e*j;this.instData.set(t,r),this.instData.set(t,r+16),this.instData.set([n.shirt[0],n.shirt[1],n.shirt[2],-1,n.skin[0],n.skin[1],n.skin[2],n.hair,n.pants[0],n.pants[1],n.pants[2],i*V*2],r+32);const o=i*V*2*16;this.boneData.set(n.mats,o);const c=this.prevBones.get(n.key);this.boneData.set(c??n.mats,o+V*16),c?c.set(n.mats):this.prevBones.set(n.key,n.mats.slice()),this.skinN++,e++}this.skinPending=[],this.skinN>0&&this.device.queue.writeBuffer(this.boneBuf,0,this.boneData,0,this.skinN*V*2*16),this.instCount=e,this.pending=[],this.device.queue.writeBuffer(this.instBuf,0,this.instData,0,e*j)}render(e){const t=this.device;this.flushInstances();const n=(v,B)=>{let E=0,G=1;for(;v>0;)G/=B,E+=G*(v%B),v=Math.floor(v/B);return E},i=this.frameIndex%8+1,r=this.taaEnabled?(n(i,2)-.5)*2/this.width:0,o=this.taaEnabled?(n(i,3)-.5)*2/this.height:0,c=new Float32Array(e.projNJ);c[8]+=r,c[9]+=o;const l=k.mul(c,e.view),a=k.mul(e.projNJ,e.view),s=this.frameData;s.set(l,0),s.set(a,16),s.set(this.frameIndex===0?a:this.prevVP,32),s.set(k.invert(a),48),s.set(e.view,64),s.set(c,80),s.set(k.invert(c),96);for(let v=0;v<3;v++)s.set(e.lightVP[v],112+v*16);s.set([...e.camPos,e.time],160),s.set([e.sunDir[0],e.sunDir[1],e.sunDir[2],e.night],164),s.set([e.sunColor[0],e.sunColor[1],e.sunColor[2],this.exposure],168),s.set([e.wetness,e.rain,this.aoEnabled?1:0,se-1],172),s.set([...e.splits,0],176),s.set([...e.cascTexel,0],180),s.set([e.fogDensity,.045,this.bloomEnabled?1:0,this.ssfxEnabled?this.ssfxMode:0],184),s.set([this.width,this.height,1/this.width,1/this.height],188);const h=Math.min(be,e.spots.length/8);s.set([this.frameIndex,h,this.renderScale,0],192),s.set(e.sun,196),s.set(e.moon,200),t.queue.writeBuffer(this.frameUB,0,s),h>0&&t.queue.writeBuffer(this.spotBuf,0,new Float32Array(e.spots.slice(0,h*8)));const f=new Float32Array(64*3);for(let v=0;v<3;v++)f.set(e.lightVP[v],v*64);t.queue.writeBuffer(this.shadowUB,0,f),this.prevVP=a,this.stats.draws=0,this.stats.tris=0;const d=t.createCommandEncoder();this.envFrame++%2===0&&this.renderEnv(d);for(let v=0;v<3;v++){const B=d.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.shadowTex.createView({dimension:"2d",baseArrayLayer:v,arrayLayerCount:1}),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});B.setPipeline(this.pipes.shadow),B.setBindGroup(0,this.shadowBG,[v*256]),this.drawWorld(B,e.vis,1<<v+1),this.drawDynamic(B,!1,!0),this.drawSkinned(B,this.pipes.skinShadow),B.end()}{const v=d.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.depth.createView(),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"store"}});v.setBindGroup(0,this.frameBG),v.setPipeline(this.pipes.prepassNoCull),this.drawWorld(v,e.vis,1),this.drawDynamic(v,!0,!1),this.drawSkinned(v,this.pipes.skinDepth),v.end()}this.aoEnabled&&(this.post(d,"ssao",this.aoRaw.createView(),[this.hdr,this.hdr,this.hdr]),this.post(d,"blurAO",this.ao.createView(),[this.aoRaw,this.hdr,this.hdr]));{const v=d.beginRenderPass({colorAttachments:[{view:this.hdr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}},{view:this.vel.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.gbuf.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.alb.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:this.depth.createView(),depthLoadOp:"load",depthStoreOp:"store"}});v.setBindGroup(0,this.frameBG),v.setBindGroup(1,this.sceneBG),v.setPipeline(this.pipes.mainNoCull),this.drawWorld(v,e.vis,1),this.drawDynamic(v,!0,!1),this.drawSkinned(v,this.pipes.skinMain),v.setPipeline(this.pipes.sky),v.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView()},{binding:1,resource:this.envSamp}]})),v.draw(3),v.end()}let p=this.hdr;if(this.ssfxEnabled){const v=t.createBindGroup({layout:this.ssfxBGL,entries:[{binding:0,resource:this.hdr.createView()},{binding:1,resource:this.gbuf.createView()},{binding:2,resource:this.alb.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp}]}),B=d.beginRenderPass({colorAttachments:[{view:this.ssr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.ssgi.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});B.setPipeline(this.pipes.ssfx),B.setBindGroup(0,this.frameBG),B.setBindGroup(1,v),B.draw(3),B.end();const E=this.ssHistIdx,G=1-E;this.ssHistIdx=G;const Fe=t.createBindGroup({layout:this.tempBGL,entries:[{binding:0,resource:this.ssr.createView()},{binding:1,resource:this.ssgi.createView()},{binding:2,resource:this.vel.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.ssrHist[G].createView()},{binding:6,resource:this.giHist[G].createView()}]}),K=d.beginRenderPass({colorAttachments:[{view:this.ssrHist[E].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.giHist[E].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});K.setPipeline(this.pipes.ssTemporal),K.setBindGroup(0,this.frameBG),K.setBindGroup(1,Fe),K.draw(3),K.end(),this.post(d,"resolve",this.hdr2.createView(),[this.hdr,this.ssrHist[E],this.giHist[E]]),p=this.hdr2}const m=this.hist[this.histIdx],b=this.hist[1-this.histIdx];this.histIdx=1-this.histIdx,this.post(d,"taa",m.createView(),[p,b,this.vel]);const g=this.taaEnabled?m:p;let w=g,M=0;for(let v=0;v<q;v++)this.post(d,"bloomDown",this.bloom.createView({baseMipLevel:v,mipLevelCount:1}),[w,this.hdr,this.hdr],[M,0,0],!1),w=this.bloom,M=v;for(let v=q-2;v>=0;v--)this.post(d,"bloomUp",this.bloom.createView({baseMipLevel:v,mipLevelCount:1}),[this.bloom,this.hdr,this.hdr],[v+1,0,0],!0);const P=Math.max(1,this.width>>1>>q-1),x=Math.max(1,this.height>>1>>q-1),y=!this.lumPending&&x<=64&&P*8<=256;if(y&&d.copyTextureToBuffer({texture:this.bloom,mipLevel:q-1},{buffer:this.lumBuf,bytesPerRow:256},[P,x]),this.post(d,"composite",this.gpu.context.getCurrentTexture().createView(),[g,this.bloom,this.hdr],[0,0,0]),t.queue.submit([d.finish()]),!this.gpuPending){this.gpuPending=!0;const v=performance.now();t.queue.onSubmittedWorkDone().then(()=>{this.gpuMs=this.gpuMs*.8+(performance.now()-v)*.2,this.gpuPending=!1})}y&&this.readLuminance(P,x),this.frameIndex++}readLuminance(e,t){this.lumPending=!0,this.lumBuf.mapAsync(GPUMapMode.READ).then(()=>{const n=new Uint16Array(this.lumBuf.getMappedRange());let i=0,r=0;for(let o=0;o<t;o++)for(let c=0;c<e;c++){const l=o*128+c*4,a=.2126*ie(n[l])+.7152*ie(n[l+1])+.0722*ie(n[l+2]),s=1-Math.abs((c+.5)/e-.5),h=1-Math.abs((o+.5)/t-.5),f=s*h;i+=Math.log(Math.max(a,1e-4))*f,r+=f}this.lumBuf.unmap(),this.avgLum=Math.exp(i/Math.max(r,1e-4)),this.lumPending=!1}).catch(()=>{this.lumPending=!1})}adaptExposure(e){const t=Math.min(16,Math.max(.12,.2/Math.max(this.avgLum,1e-4))),n=1-Math.exp(-e*(t>this.exposure?1.2:2.5));this.exposure+=(t-this.exposure)*n}renderEnv(e){let t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:0,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});t.setPipeline(this.pipes.lut),t.setBindGroup(0,this.frameBG),t.draw(3),t.end();for(let n=1;n<se;n++)t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:n,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]}),t.setPipeline(this.pipes.envDown),t.setBindGroup(0,this.frameBG),t.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView({baseMipLevel:n-1,mipLevelCount:1})},{binding:1,resource:this.linSamp}]})),t.draw(3),t.end()}post(e,t,n,i,r=[0,0,0],o=!1){const c=i.map((s,h)=>s.createView({baseMipLevel:r[h]??0,mipLevelCount:1})),l=this.device.createBindGroup({layout:this.postBGL,entries:[{binding:0,resource:c[0]},{binding:1,resource:c[1]},{binding:2,resource:c[2]},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp}]}),a=e.beginRenderPass({colorAttachments:[{view:n,loadOp:o?"load":"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});a.setPipeline(this.pipes[t]),a.setBindGroup(0,this.frameBG),a.setBindGroup(1,l),a.draw(3),a.end()}drawWorld(e,t,n){if(this.worldVB){e.setVertexBuffer(0,this.worldVB),e.setIndexBuffer(this.worldIB,"uint32");for(let i=0;i<this.chunks.length;i++){if(t&&t.length===this.chunks.length&&!(t[i]&n))continue;const r=this.chunks[i];e.drawIndexed(r.count,1,r.first,0,0),this.stats.draws++,this.stats.tris+=r.count/3}}}drawSkinned(e,t){this.skinN!==0&&(e.setPipeline(t),e.setVertexBuffer(0,this.skinVB),e.setIndexBuffer(this.skinIB,"uint32"),e.drawIndexed(this.skinCount,this.skinN,0,0,this.skinFirst),this.stats.draws++,this.stats.tris+=this.skinCount/3*this.skinN)}drawDynamic(e,t,n){e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32");for(const i of this.batches){const r=this.meshes[i.mesh];e.drawIndexed(r.count,i.count,r.first,r.base,i.first),this.stats.draws++,this.stats.tris+=r.count/3*i.count}if(t&&!n){const i=this.meshes[R.WATER];e.drawIndexed(i.count,1,i.first,i.base,0),this.stats.draws++}}}function ie(u){const e=u&32768?-1:1,t=u>>10&31,n=u&1023;return t===0?e*Math.pow(2,-14)*(n/1024):t===31?n?NaN:e*(1/0):e*Math.pow(2,t-15)*(1+n/1024)}const Re=[[.78,.55,.42],[.55,.36,.25],[.32,.2,.13],[.9,.7,.58],[.66,.46,.33]],it=[[.6,.08,.06],[.08,.2,.45],[.75,.75,.72],[.12,.12,.13],[.15,.4,.2],[.8,.6,.15],[.45,.3,.55],[.25,.5,.65]],at=[[.08,.1,.18],[.15,.13,.1],[.3,.28,.22],[.05,.05,.05],[.35,.38,.45]],ee=[[.03,.02,.015],[.2,.12,.05],[.45,.32,.15],[.5,.5,.5]];function ot(u){const e=n=>Math.abs(Math.sin(u*12.9898+n*78.233)*43758.5453)%1,t=(n,i)=>n[Math.floor(e(i)*n.length)%n.length];return{skin:t(Re,1),shirt:t(it,2),pants:t(at,3),hair:t(ee,4),shoes:[.04,.04,.045],height:.92+e(5)*.16}}const ct={skin:Re[0],shirt:[.85,.85,.82],pants:[.1,.13,.22],hair:ee[0],height:1},ye=new Float32Array(V*16),lt=u=>ee.indexOf(u.hair)>=0?ee.indexOf(u.hair):0;function we(u,e,t,n,i,r,o,c){const l=k.create(),a=c.height;o===2?(k.trs([t[0],t[1]+.12,t[2]],n,-Math.PI/2,0,[a,a,a],l),k.mul(l,k.trs([0,-.97,0],0,0,0),l)):k.trs(t,n,0,0,[a,a,a],l),et(l,i,r,o,ye),u.addSkinned(e,ye,c.shirt,c.skin,c.pants,lt(c))}class ut{ctx=null;master;rotorBus;chop;chopLfo;chopDepth;tailLfo;turbine=[];turbineGain;noise;lowpass;constructor(){const e=()=>{this.init(),this.ctx?.resume()};addEventListener("pointerdown",e),addEventListener("keydown",e)}init(){if(this.ctx)return;const e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.8,this.master.connect(e.destination),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const t=this.noise.getChannelData(0);for(let d=0;d<t.length;d++)t[d]=Math.random()*2-1;this.rotorBus=e.createGain(),this.rotorBus.gain.value=0,this.lowpass=e.createBiquadFilter(),this.lowpass.type="lowpass",this.lowpass.frequency.value=2500,this.rotorBus.connect(this.lowpass).connect(this.master);const n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=110,i.Q.value=.9;const r=e.createBiquadFilter();r.type="lowshelf",r.frequency.value=90,r.gain.value=10,this.chop=e.createGain(),this.chop.gain.value=.55,this.chopLfo=e.createOscillator(),this.chopLfo.type="sawtooth",this.chopLfo.frequency.value=0,this.chopDepth=e.createGain(),this.chopDepth.gain.value=.55,this.chopLfo.connect(this.chopDepth).connect(this.chop.gain),n.connect(i).connect(r).connect(this.chop).connect(this.rotorBus);const o=e.createGain();o.gain.value=0;const c=e.createOscillator();c.type="sine",c.frequency.value=38,this.chopLfo.connect(o.gain),c.connect(o).connect(this.rotorBus);const l=e.createBufferSource();l.buffer=this.noise,l.loop=!0,l.playbackRate.value=.93;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=700,a.Q.value=2.5;const s=e.createGain();s.gain.value=.12,this.tailLfo=e.createOscillator(),this.tailLfo.type="square",this.tailLfo.frequency.value=0;const h=e.createGain();h.gain.value=.08,this.tailLfo.connect(h).connect(s.gain),l.connect(a).connect(s).connect(this.rotorBus),this.turbineGain=e.createGain(),this.turbineGain.gain.value=0;const f=e.createBiquadFilter();f.type="highpass",f.frequency.value=900;for(const d of[0,7]){const p=e.createOscillator();p.type="sawtooth",p.frequency.value=400,p.detune.value=d,p.connect(f),p.start(),this.turbine.push(p)}f.connect(this.turbineGain).connect(this.master),n.start(),l.start(),c.start(),this.chopLfo.start(),this.tailLfo.start()}updateRotor(e,t,n){const i=this.ctx;if(!i)return;const r=i.currentTime,o=1/(1+Math.max(0,t-6)/22),c=4*4.9*e;this.chopLfo.frequency.setTargetAtTime(c,r,.1),this.tailLfo.frequency.setTargetAtTime(4*23*e,r,.1),this.rotorBus.gain.setTargetAtTime(Math.min(1,e*1.3)*o*.9,r,.1);for(const l of this.turbine)l.frequency.setTargetAtTime(380+1500*e,r,.3);this.turbineGain.gain.setTargetAtTime(e*.025*o*(n?1.6:1),r,.2),this.lowpass.frequency.setTargetAtTime(n?1200:600+3e3*o,r,.2)}shot(e){const t=this.ctx;if(!t)return;const n=t.currentTime,i=1/(1+Math.max(0,e-5)/30),r=t.createBufferSource();r.buffer=this.noise,r.playbackRate.value=1+Math.random()*.2;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1400+Math.random()*400,o.Q.value=.6;const c=t.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.9*i,n+.004),c.gain.exponentialRampToValueAtTime(.001,n+.11),r.connect(o).connect(c).connect(this.master),r.start(n,Math.random()*1.5,.15);const l=t.createOscillator();l.type="sine",l.frequency.setValueAtTime(110,n),l.frequency.exponentialRampToValueAtTime(42,n+.1);const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.8*i,n+.005),a.gain.exponentialRampToValueAtTime(.001,n+.14),l.connect(a).connect(this.master),l.start(n),l.stop(n+.16)}impact(e){const t=this.ctx;if(!t)return;const n=t.currentTime,i=.5/(1+e/25),r=t.createBufferSource();r.buffer=this.noise;const o=t.createBiquadFilter();o.type="highpass",o.frequency.value=2500;const c=t.createGain();c.gain.setValueAtTime(i,n),c.gain.exponentialRampToValueAtTime(.001,n+.06),r.connect(o).connect(c).connect(this.master),r.start(n,Math.random(),.07)}}const ke=()=>!!document.documentElement.requestFullscreen&&document.fullscreenEnabled!==!1;async function Se(){try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),await screen.orientation.lock?.("landscape")}catch{}}const ht=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;class ft{constructor(e){this.input=e;const t=document.createElement("style");t.textContent=`
      #touch { position: fixed; inset: 0; pointer-events: none; z-index: 5; user-select: none; -webkit-user-select: none; }
      #touch .stick { position: absolute; left: 28px; bottom: 28px; width: 132px; height: 132px; border-radius: 50%;
        background: rgba(255,255,255,.10); border: 2px solid rgba(255,255,255,.35); pointer-events: auto; touch-action: none; }
      #touch .knob { position: absolute; left: 41px; top: 41px; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,.55); }
      #touch .look { position: absolute; right: 0; top: 0; width: 60%; height: 100%; pointer-events: auto; touch-action: none; }
      #touch .btn { position: absolute; width: 64px; height: 64px; border-radius: 50%; display: none; align-items: center; justify-content: center;
        background: rgba(20,24,32,.45); border: 2px solid rgba(255,255,255,.45); color: #fff; font: 600 13px system-ui; pointer-events: auto;
        touch-action: none; text-shadow: 0 1px 2px #000; }
      #touch .btn.on, #touch .btn:active { background: rgba(255,255,255,.35); }
      #touch .btn.small { width: 48px; height: 48px; font-size: 11px; }
    `,document.head.appendChild(t),this.root.id="touch";const n=document.createElement("div");n.className="look",this.stick.className="stick",this.knob.className="knob",this.stick.appendChild(this.knob),this.root.append(n,this.stick),document.body.appendChild(this.root);const i=document.createElement("div");i.className="btn small",i.textContent="全画面",i.style.cssText="display:flex; right:16px; top:64px;",i.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),document.fullscreenElement?document.exitFullscreen?.():Se()}),this.root.appendChild(i);const r=()=>{i.style.display=ke()?"flex":"none",i.textContent=document.fullscreenElement?"戻す":"全画面"};document.addEventListener("fullscreenchange",r),r();const o=()=>{!document.fullscreenElement&&ke()&&Se(),removeEventListener("pointerup",o,!0)};addEventListener("pointerup",o,!0);const c=[["ジャンプ","Space",24,120,["foot"]],["走る","ShiftLeft",100,40,["foot"],!0],["乗る","KeyF",24,200,["foot"]],["降りる","KeyF",24,200,["car","heli"]],["ブレーキ","Space",24,120,["car"]],["上昇","Space",24,120,["heli"]],["下降","ShiftLeft",100,40,["heli"]],["射撃",void 0,110,120,["heli"]],["左旋回","KeyQ",190,40,["heli"],!1,!0],["右旋回","KeyE",250,40,["heli"],!1,!0],["視点","KeyV",24,40,["foot","car","heli"],!1,!0],["時間","KeyT",16,280,["foot","car","heli"],!1,!0]];for(const[s,h,f,d,p,m,b]of c){const g=document.createElement("div");g.className="btn"+(b?" small":""),g.textContent=s,g.style.right=f+"px",g.style.bottom=d+"px";const w={el:g,code:h,toggle:m,modes:p};g.addEventListener("pointerdown",P=>{P.preventDefault(),P.stopPropagation();try{g.setPointerCapture(P.pointerId)}catch{}if(!h){this.fire=!0;return}m?(w.on=!w.on,g.classList.toggle("on",w.on),this.setKey(h,!!w.on)):this.setKey(h,!0)});const M=P=>{if(P.preventDefault(),!h){this.fire=!1;return}m||this.setKey(h,!1)};g.addEventListener("pointerup",M),g.addEventListener("pointercancel",M),this.root.appendChild(g),this.btns.push(w)}this.stick.addEventListener("pointerdown",s=>{s.preventDefault();try{this.stick.setPointerCapture(s.pointerId)}catch{}this.stickId=s.pointerId;const h=this.stick.getBoundingClientRect();this.stickOrigin=[h.left+h.width/2,h.top+h.height/2],this.moveStick(s.clientX,s.clientY)}),this.stick.addEventListener("pointermove",s=>{s.pointerId===this.stickId&&this.moveStick(s.clientX,s.clientY)});const l=s=>{s.pointerId===this.stickId&&(this.stickId=null,this.moveStick(...this.stickOrigin))};this.stick.addEventListener("pointerup",l),this.stick.addEventListener("pointercancel",l),n.addEventListener("pointerdown",s=>{s.preventDefault();try{n.setPointerCapture(s.pointerId)}catch{}this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]}),n.addEventListener("pointermove",s=>{s.pointerId===this.lookId&&(this.input.mouseDX+=(s.clientX-this.lookLast[0])*1.6,this.input.mouseDY+=(s.clientY-this.lookLast[1])*1.6,this.lookLast=[s.clientX,s.clientY])});const a=s=>{s.pointerId===this.lookId&&(this.lookId=null)};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),this.setMode("foot")}root=document.createElement("div");stick=document.createElement("div");knob=document.createElement("div");stickId=null;lookId=null;stickOrigin=[0,0];lookLast=[0,0];btns=[];fire=!1;mode="foot";setKey(e,t){t?(this.input.keys.has(e)||this.input.pressed.add(e),this.input.keys.add(e)):this.input.keys.delete(e)}moveStick(e,t){let i=e-this.stickOrigin[0],r=t-this.stickOrigin[1];const o=Math.hypot(i,r);o>56&&(i*=56/o,r*=56/o),this.knob.style.transform=`translate(${i}px, ${r}px)`;const c=i/56,l=-r/56;this.input.touchAxis=[Math.abs(c)>.15?c:0,Math.abs(l)>.15?l:0],this.setKey("KeyD",c>.35),this.setKey("KeyA",c<-.35),this.setKey("KeyW",l>.35),this.setKey("KeyS",l<-.35)}setMode(e){if(!(e===this.mode&&this.btns[0].el.style.display)){this.mode=e;for(const t of this.btns){const n=t.modes.includes(e);t.el.style.display=n?"flex":"none",!n&&t.toggle&&t.on&&(t.on=!1,t.el.classList.remove("on"),t.code&&this.setKey(t.code,!1))}}}}const ae=[.055,.065,.045],$=16,W=16,Pe=8,Me=[[.85,.85,.83],[.02,.02,.025],[.45,.46,.48],[.55,.03,.02],[.03,.12,.45],[.03,.2,.08],[.8,.55,.02],[.18,.18,.19],[.02,.04,.12],[.25,.02,.04],[.8,.25,.02],[.02,.3,.3]],oe=62*Math.PI/180,ce=[.1,14,45,150];class pt{constructor(e,t){this.gpu=e,this.stats=t,this.r=new st(e),this.input=new Ge(e.canvas),this.worker=new Worker(new URL(""+new URL("worker-CLQobAZb.js",import.meta.url).href,import.meta.url),{type:"module"});for(let i=0;i<64;i++)this.looks.push(ot(i+1));const n=new URLSearchParams(location.search);n.get("t")&&(this.tod=parseFloat(n.get("t"))),n.get("cam")==="free"&&(this.camMode="free"),n.get("scale")&&(this.r.renderScale=parseFloat(n.get("scale")),this.dynRes=!1),window.game=this,(this.mobile||n.get("touch")==="1")&&(this.mobile=!0,this.touch=new ft(this.input),n.get("scale")||(this.r.renderScale=.7),this.r.ssfxEnabled=!1,document.getElementById("crosshair").style.display="block")}r;input;worker;state=null;vis=null;nchunks=0;workerMs=0;waiting=!1;camMode="third";camYaw=0;camPitch=-.15;camDist=4.5;camPos=[0,20,30];freePos=[0,30,60];smoothCamDist=4.5;lastMouse=0;tod=16.2;timeScale=60;paused=!1;rain=!1;wet=0;time=0;looks=[];hud=document.getElementById("hud");help=document.getElementById("help");speedEl=document.getElementById("speed");promptEl=document.getElementById("prompt");hudTimer=0;sfx=new ut;tracers=[];heliOff=0;touch=null;mobile=ht();worldInfo="";lastFrame=performance.now();dynRes=!0;slowTime=0;fastTime=0;async start(){const e=document.getElementById("loading");e.textContent="Generating materials…";const t=this.r.generateTextures();e.textContent="Generating world (WASM worker)…";const n=await new Promise(i=>{this.worker.onmessage=r=>{r.data.type==="world"&&i(r.data)},this.worker.postMessage({type:"init",seed:1337})});await t,this.r.setWorld(n),this.nchunks=n.chunks.length/8,this.worldInfo=`world: ${n.buildings} buildings, ${n.props} props, ${(n.idx.length/3/1e3).toFixed(0)}k tris, ${this.nchunks} chunks, gen ${n.genMs.toFixed(0)} ms`,this.worker.onmessage=i=>{i.data.type==="state"&&(this.state=i.data.state,this.vis=i.data.vis,this.workerMs=i.data.ms,this.waiting=!1)},e.style.display="none",this.mobile&&(this.help.style.display="none"),this.help.textContent=["クリック: マウス操作  WASD: 移動  Shift: 走る  Space: ジャンプ / ハンドブレーキ","F: 車/ヘリに乗る・降りる  V: 一人称/三人称  C: フリーカメラ  R: リセット","ヘリ: Space 上昇 / Shift 下降  W/S 前後傾  A/D 左右傾  Q/E 旋回  左クリック: 機関砲 (マウスで照準)","T: 時間早送り  P: 時間停止  1-4: 朝/昼/夕/夜  G: 雨  O: SSAO  B: ブルーム  K: TAA  J: SSR/SSGI  -/=: 解像度"].join(`
`),requestAnimationFrame(this.frame)}frame=e=>{const t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e,this.stats.push(t),this.time+=t,this.update(t),requestAnimationFrame(this.frame)};handleKeys(e){const t=this.input;t.hit("KeyV")&&(this.camMode=this.camMode==="first"?"third":"first"),t.hit("KeyC")&&(this.camMode==="free"?this.camMode="third":(this.camMode="free",this.freePos=[...this.camPos])),t.hit("KeyP")&&(this.paused=!this.paused),t.hit("Digit1")&&(this.tod=8),t.hit("Digit2")&&(this.tod=13),t.hit("Digit3")&&(this.tod=17.45),t.hit("Digit4")&&(this.tod=22.5),t.hit("KeyG")&&(this.rain=!this.rain),t.hit("KeyO")&&(this.r.aoEnabled=!this.r.aoEnabled),t.hit("KeyB")&&(this.r.bloomEnabled=!this.r.bloomEnabled),t.hit("KeyK")&&(this.r.taaEnabled=!this.r.taaEnabled),t.hit("KeyJ")&&(this.r.ssfxEnabled=!this.r.ssfxEnabled),t.hit("Minus")&&(this.r.renderScale=Math.max(.4,this.r.renderScale-.1),this.dynRes=!1),t.hit("Equal")&&(this.r.renderScale=Math.min(1.5,this.r.renderScale+.1),this.dynRes=!1);const n=t.down("KeyT")?1800:this.timeScale;this.paused||(this.tod=(this.tod+e*n/3600)%24),this.wet=_(this.wet+(this.rain?e/6:-e/25),0,1)}update(e){const t=this.input;if(this.handleKeys(e),this.dynRes){const x=this.stats.ms;x>1e3/32?(this.slowTime+=e,this.fastTime=0):x<1e3/50?(this.fastTime+=e,this.slowTime=0):this.slowTime=this.fastTime=0,this.slowTime>1&&(this.r.renderScale=Math.max(.5,this.r.renderScale-.1),this.slowTime=0),this.fastTime>1.5&&this.r.renderScale<1&&(this.r.renderScale=Math.min(1,this.r.renderScale+.1),this.fastTime=0)}this.r.resize(this.gpu.canvas.clientWidth,this.gpu.canvas.clientHeight,devicePixelRatio);const n=this.state,i=n?n[6]>=0:!1,r=n?n[14]>.5:!1;n&&(this.heliOff=$+n[9]*W+n[10]*Pe);const o=this.heliOff;this.touch?.setMode(r?"heli":i?"car":"foot"),(t.mouseDX||t.mouseDY)&&(this.lastMouse=this.time),this.camYaw-=t.mouseDX*.0025,this.camPitch=_(this.camPitch-t.mouseDY*.0025,-1.45,1.2),t.wheel&&(this.camDist=_(this.camDist+t.wheel*.6,2,14));let c=[0,2,0];if(n){const x=[n[0],n[1],n[2]];if(i){const y=$+n[6]*W;if(c=[n[y],n[y+1]+1.6,n[y+2]],this.camMode==="third"&&this.time-this.lastMouse>1.2){const v=n[y+3],B=Math.abs(n[y+10]),E=1-Math.exp(-e*(1+B*.15));let G=v-this.camYaw;G=Math.atan2(Math.sin(G),Math.cos(G)),this.camYaw+=G*E,this.camPitch+=(-.2-this.camPitch)*E}}else if(r){if(c=[n[o],n[o+1]+2.6,n[o+2]],this.camMode==="third"&&this.time-this.lastMouse>1.5){const y=1-Math.exp(-e*1.2);let v=n[o+3]-this.camYaw;v=Math.atan2(Math.sin(v),Math.cos(v)),this.camYaw+=v*y,this.camPitch+=(-.18-this.camPitch)*y}}else c=[x[0],x[1]+1.6,x[2]]}const l=[-Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),-Math.cos(this.camYaw)*Math.cos(this.camPitch)];let a;const s=r?this.camDist+10:i?this.camDist+3:this.camDist;if(this.camMode==="free"){const x=(t.down("ShiftLeft")?60:15)*e,y=[Math.cos(this.camYaw),0,-Math.sin(this.camYaw)];this.freePos=T.add(this.freePos,T.scale(l,t.axis("KeyS","KeyW")*x)),this.freePos=T.add(this.freePos,T.scale(y,t.axis("KeyA","KeyD")*x)),this.freePos[1]+=t.axis("KeyQ","KeyE")*x,a=this.freePos}else if(this.camMode==="first"&&n)if(r){const x=k.trs([n[o],n[o+1],n[o+2]],n[o+3],n[o+4],n[o+5]),y=k.transformPoint(x,[0,2.62,-1.35]);a=[y[0],y[1],y[2]]}else if(i){const x=$+n[6]*W,y=n[x+3];a=[n[x]+Math.cos(y)*-.38+-Math.sin(y)*.05,n[x+1]+1.22,n[x+2]-Math.sin(y)*-.38+-Math.cos(y)*.05]}else a=[n[0]-Math.sin(n[3])*.12,n[1]+1.66,n[2]-Math.cos(n[3])*.12];else{const x=n?n[8]:100,y=Math.min(s,Math.max(.6,x-.25));this.smoothCamDist=y<this.smoothCamDist?y:Ee(this.smoothCamDist,y,1-Math.exp(-e*3)),a=T.sub(c,T.scale(l,this.smoothCamDist))}this.camPos=a;const h=T.add(a,l),f=k.lookAt(a,h,[0,1,0]),d=this.r.width/this.r.height,p=k.perspectiveRevZ(oe,d,.1),m=this.skyState(),b=m.night>.5?m.moon:m.sun,g=[],w=[];for(let x=0;x<3;x++){const{vp:y,tx:v}=this.cascade(a,l,d,ce[x],ce[x+1],b);g.push(y),w.push(v)}if(n&&!this.waiting){const x=new Float32Array(32),y=this.camMode==="free";x[0]=y?0:t.axis("KeyA","KeyD"),x[1]=y?0:t.axis("KeyS","KeyW"),x[2]=this.camMode==="first"&&!i?this.camYaw:this.camYaw,x[3]=!y&&t.down("Space")?1:0,x[4]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,x[5]=!y&&(t.down("KeyF")||t.down("Enter"))?1:0,x[6]=!y&&(t.down("KeyW")||t.down("ArrowUp"))?1:0,x[7]=!y&&(t.down("KeyS")||t.down("ArrowDown"))?1:0,x[8]=y?0:(t.down("KeyA")||t.down("ArrowLeft")?1:0)-(t.down("KeyD")||t.down("ArrowRight")?1:0),x[9]=!y&&t.down("Space")?1:0,x[10]=t.down("KeyR")?1:0,x.set(c,11),x.set(T.scale(l,-1),14),x[17]=this.camMode==="third"?s:0,x[18]=y?1:0,x[19]=this.time,r&&!y&&(x[20]=t.down("Space")?1:0,x[21]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,x[22]=(t.down("KeyQ")?1:0)-(t.down("KeyE")?1:0),x[23]=t.locked&&t.mouseDown||(this.touch?.fire??!1)?1:0,x.set(l,24));const v=new Float32Array(64);v.set(k.mul(k.perspectiveRevZ(oe*1.25,d*1.1,.1),f),0);for(let B=0;B<3;B++)v.set(g[B],16*(B+1));this.waiting=!0,this.worker.postMessage({type:"tick",dt:e,input:x,views:v,nviews:4,nchunks:this.nchunks})}else if(!n&&!this.waiting){this.waiting=!0;const x=new Float32Array(64);x.set(k.mul(p,f),0),this.worker.postMessage({type:"tick",dt:0,input:new Float32Array(32),views:x,nviews:1,nchunks:this.nchunks})}const M=[];n&&(this.emitDynamic(n,a,m.night,M),this.emitHeli(n,a,e,M,r));const P={view:f,proj:p,projNJ:p,camPos:a,lightVP:g,splits:ce.slice(1),cascTexel:w,sunDir:b,night:m.night,sunColor:m.keyColor,sun:[...m.sun,m.sun[1]>-.2?20:0],moon:[...m.moon,.04*m.night],wetness:this.wet,rain:this.rain?1:0,time:this.time,fogDensity:.0016+this.wet*.004,vis:this.vis,spots:M};this.r.render(P),this.r.adaptExposure(e),this.hudUpdate(e,n,i),t.endFrame()}skyState(){const e=(this.tod-6)/24*Math.PI*2,t=.55,n=T.norm([Math.cos(e),Math.sin(e)*Math.cos(t),Math.sin(e)*Math.sin(t)*.8+.25]),i=T.norm([-n[0]*.9+.2,Math.max(-n[1],.25),-n[2]+.3]),r=_((.06-n[1])/.16,0,1),o=Math.max(n[1],-.02),c=Math.asin(_(o,-1,1))*180/Math.PI,l=1/(Math.max(o,0)+.50572*Math.pow(Math.max(c,0)+6.07995,-1.6364)),a=[58e-7*8e3,135e-7*8e3,331e-7*8e3],s=21e-6*1.1*1200,h=_((n[1]+.04)/.08,0,1),f=7.5,d=a.map(b=>Math.exp(-(b+s)*l)*f*h),p=[.05,.065,.1],m=r>.5?p.map(b=>b*(r-.5)*2):d;return{sun:n,moon:i,night:r,keyColor:m}}cascade(e,t,n,i,r,o){const c=Math.tan(oe/2),l=(i+r)/2,a=c*r,s=a*n,h=T.add(e,T.scale(t,l+(s*s+a*a)/(2*(r-i))*0)),f=Math.hypot(r-l,s,a),d=Math.ceil(f*1.04*4)/4,p=Math.abs(o[1])>.98?[0,0,1]:[0,1,0],m=k.lookAt([0,0,0],T.scale(o,-1),p),b=k.transformPoint(m,h),g=2*d/2048,w=Math.floor(b[0]/g)*g,M=Math.floor(b[1]/g)*g,P=k.ortho(w-d,w+d,M-d,M+d,-b[2]-450,-b[2]+d+30);return{vp:k.mul(P,m),tx:g}}emitDynamic(e,t,n,i){const r=this.r,o=e[9],c=e[10],l=e[6];for(let a=0;a<o;a++){const s=$+a*W,h=[e[s],e[s+1],e[s+2]],f=e[s+3],d=h[0]-t[0],p=h[2]-t[2],m=Math.hypot(d,p);if(m>260)continue;const b=k.trs(h,f,e[s+4],e[s+5]),g=Me[e[s+8]%Me.length],w=e[s+11]>0,M=w?Math.max(n,.05):0;r.add(R.CAR,1e4+a*10,b,[g[0],g[1],g[2],-1],[M>.06?1:0,e[s+9],0,0]);for(let P=0;P<4;P++){const x=P<2,y=P%2===0?-.8:.8,v=k.mul(b,k.trs([y,.34,x?-1.35:1.35],x?e[s+6]:0,-e[s+7],0));r.add(R.WHEEL,1e4+a*10+1+P,v,[1,1,1,-1])}if(e[s+11]===2&&m<80){const P=k.mul(b,k.trs([-.38,1.12,.12],0,0,0,[.2,.24,.22])),x=this.looks[a%this.looks.length];r.add(R.SPHERE,1e4+a*10+6,P,[x.skin[0],x.skin[1],x.skin[2],20])}if(n>.2&&w&&i.length<16*8&&(m<70||a===l)){const P=[-Math.sin(f),-.12,-Math.cos(f)];i.push(h[0]+P[0]*2.4,h[1]+.7,h[2]+P[2]*2.4,1100,...T.norm(P),.82)}}for(let a=0;a<c;a++){const s=$+o*W+a*Pe,h=[e[s],e[s+1],e[s+2]];Math.hypot(h[0]-t[0],h[2]-t[2])>150||we(r,2e5+a*20,h,e[s+3],e[s+4],e[s+7],e[s+5],this.looks[(e[s+6]|0)%this.looks.length])}l<0&&e[14]<.5&&this.camMode!=="first"&&we(r,9e5,[e[0],e[1],e[2]],e[3],e[4],e[5],e[7]>0?0:3,ct)}emitHeli(e,t,n,i,r){const o=this.r,c=this.heliOff,l=[e[c],e[c+1],e[c+2]],a=k.trs(l,e[c+3],e[c+4],e[c+5]),s=[ae[0],ae[1],ae[2],-1];o.add(R.HELI,7e5,a,s),o.add(R.ROTOR,700001,k.mul(a,k.trs([0,3.47,.25],e[c+6],0,0)),s),o.add(R.TROTOR,700002,k.mul(a,k.trs([.36,4.25,9],0,e[c+8],0)),s);const h=k.mul(a,k.trs([0,.72,-3.55],e[c+9],e[c+10],0));o.add(R.GUN,700003,h,s);const f=e[c+11]>.5,d=k.transformPoint(h,[0,-.07,-1.95]);if(f){o.add(R.SPHERE,700004,k.trs([d[0],d[1],d[2]],Math.random()*6,0,0,[.5,.5,.9]),[1,.55,.15,40]);const g=T.norm(T.sub([d[0],d[1],d[2]],[h[12],h[13],h[14]]));i.length<15*8&&i.push(d[0],d[1],d[2],900,g[0],g[1],g[2],-.2)}const p=e[c+16]|0;for(let g=0;g<p;g++){const w=c+17+g*7,M=[e[w],e[w+1],e[w+2]],P=[e[w+3],e[w+4],e[w+5]];this.tracers.push({from:M,to:P,t:0,kind:e[w+6]}),this.sfx.shot(T.len(T.sub(M,t)))}const m=600;let b=0;this.tracers=this.tracers.filter(g=>{g.t+=n;const w=T.len(T.sub(g.to,g.from)),M=g.t*m,P=T.scale(T.sub(g.to,g.from),1/Math.max(w,.001));if(M<w){const y=Math.min(7,w-M),v=T.add(g.from,T.scale(P,M+y*.5)),B=Math.atan2(-P[0],-P[2]),E=Math.asin(Math.max(-1,Math.min(1,P[1])));return o.add(R.SBOX,71e4+b++%64,k.trs(v,B,E,0,[.07,.07,y]),[1,.45,.08,40]),!0}const x=(M-w)/m;if(x<.09&&g.kind!==3){g.snd||(g.snd=!0,this.sfx.impact(T.len(T.sub(g.to,t))));const y=.6+x*8,v=g.kind===1?[1,.75,.35]:g.kind===2?[.6,.05,.03]:[1,.6,.25];return o.add(R.SPHERE,72e4+b++%64,k.trs(g.to,0,0,0,[y,y,y]),[v[0]*.6,v[1]*.6,v[2]*.6,40]),!0}return x<.1}),this.sfx.updateRotor(e[c+7],T.len(T.sub(l,t)),r&&this.camMode==="first")}hudUpdate(e,t,n){if(this.hudTimer+=e,t&&t[14]>.5){const c=this.heliOff;this.speedEl.textContent=`${(t[c+13]*3.6).toFixed(0)} km/h  ALT ${t[c+14].toFixed(0)} m`,this.promptEl.textContent=t[c+7]<.95?`ローター始動中… ${(t[c+7]*100).toFixed(0)}%`:t[c+12]>.5?"F: 降りる":""}else t&&(n?(this.speedEl.textContent=`${Math.abs(t[12]).toFixed(0)} km/h`,this.promptEl.textContent=Math.abs(t[12])<14?"F: 降りる":""):(this.speedEl.textContent="",this.promptEl.textContent=this.camMode==="free"?"":t[15]>.5?"F: ヘリに乗る":t[11]>=0?"F: 車に乗る":""));if(this.hudTimer<.25)return;this.hudTimer=0;const i=Math.floor(this.tod),r=Math.floor((this.tod-i)*60),o=this.stats;if(this.mobile){this.hud.textContent=`FPS ${this.stats.fps.toFixed(0)}  ${this.r.width}x${this.r.height}`;return}this.hud.textContent=[`FPS ${o.fps.toFixed(1)}  frame ${o.ms.toFixed(1)} ms (worst ${o.worst.toFixed(1)})  gpu ${this.r.gpuMs.toFixed(1)} ms  worker ${this.workerMs.toFixed(2)} ms`,`render ${this.r.width}x${this.r.height} (scale ${this.r.renderScale.toFixed(1)}${this.dynRes?" auto":""})  draws ${this.r.stats.draws}  tris ${(this.r.stats.tris/1e3).toFixed(0)}k`,`time ${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}${this.paused?" (paused)":""}  exposure ${this.r.exposure.toFixed(2)}  ${this.rain?"rain":"clear"} wet ${this.wet.toFixed(2)}`,`cam ${this.camMode}  pos ${this.camPos.map(c=>c.toFixed(1)).join(", ")}  ${t&&t[14]>.5?"flying":n?"driving":"on foot"}`,`AO ${this.r.aoEnabled?"on":"off"}  bloom ${this.r.bloomEnabled?"on":"off"}  TAA ${this.r.taaEnabled?"on":"off"}  SSR/SSGI ${this.r.ssfxEnabled?"on":"off"}`,this.worldInfo,this.gpu.adapterName].join(`
`)}}export{pt as Game};
