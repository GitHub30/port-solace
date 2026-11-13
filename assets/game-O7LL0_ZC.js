import{m as S,c as H,v as M,l as Ue}from"./index-BcbBE1fD.js";class Ve{keys=new Set;pressed=new Set;mouseDX=0;mouseDY=0;wheel=0;mouseDown=!1;locked=!1;touchAxis=[0,0];constructor(e){addEventListener("keydown",t=>{this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),(t.code==="Space"||t.code==="Tab")&&t.preventDefault()}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),e.addEventListener("click",()=>{this.locked||e.requestPointerLock?.()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e}),addEventListener("mousemove",t=>{(this.locked||this.mouseDown)&&(this.mouseDX+=t.movementX,this.mouseDY+=t.movementY)}),e.addEventListener("mousedown",()=>this.mouseDown=!0),addEventListener("mouseup",()=>this.mouseDown=!1),addEventListener("wheel",t=>{this.wheel+=Math.sign(t.deltaY)},{passive:!0})}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}axis(e,t){return e==="KeyA"&&t==="KeyD"&&this.touchAxis[0]!==0?this.touchAxis[0]:e==="KeyS"&&t==="KeyW"&&this.touchAxis[1]!==0?this.touchAxis[1]:(this.down(t)?1:0)-(this.down(e)?1:0)}endFrame(){this.pressed.clear(),this.mouseDX=this.mouseDY=0,this.wheel=0}}const F={PAINT:16,GLASS:17,TIRE:18,CHROME:19,CLOTH:21,HEADLIGHT:22,TAILLIGHT:23,PLAIN:24,WATER:25};class _{v=[];i=[];u32=new Uint32Array(1);f32=new Float32Array(this.u32.buffer);vert(e,t,n,a){return this.u32[0]=a,this.v.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],this.f32[0]),this.v.length/9-1}quad(e,t,n={}){const a=K(e[1],e[0]),r=K(e[2],e[0]);let o=re(fe(a,r));ze(o)<1e-8&&(o=re(fe(K(e[2],e[0]),K(e[3],e[0]))));let l=n.n;if(!l&&n.inside){const h=he(e);l=K(h,n.inside)}let c=!1;l&&te(o,l)<0&&(c=!0,o=o.map(h=>-h));const i=n.n?re(n.n):o,s=n.uv??[[0,0],[1,0],[1,1],[0,1]],f=e.map((h,v)=>this.vert(h,i,s[v],t));c?this.i.push(f[0],f[2],f[1],f[0],f[3],f[2]):this.i.push(f[0],f[1],f[2],f[0],f[2],f[3])}box(e,t,n){const a=he([e,t]),[r,o,l]=e,[c,i,s]=t,f=[[[r,i,l],[c,i,l],[c,i,s],[r,i,s]],[[r,o,l],[c,o,l],[c,o,s],[r,o,s]],[[r,o,s],[c,o,s],[c,i,s],[r,i,s]],[[r,o,l],[c,o,l],[c,i,l],[r,i,l]],[[c,o,l],[c,o,s],[c,i,s],[c,i,l]],[[r,o,l],[r,o,s],[r,i,s],[r,i,l]]];for(const h of f)this.quad(h,n,{inside:a})}}const K=(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]],te=(u,e)=>u[0]*e[0]+u[1]*e[1]+u[2]*e[2],fe=(u,e)=>[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]],ze=u=>Math.hypot(u[0],u[1],u[2]),re=u=>{const e=ze(u)||1;return[u[0]/e,u[1]/e,u[2]/e]},he=u=>{const e=[0,0,0];for(const t of u)e[0]+=t[0],e[1]+=t[1],e[2]+=t[2];return e.map(t=>t/u.length)};function Ce(){const u=new _,e=[[-2.27,.36,.64,.74],[-2.18,.26,.76,.86],[-1.9,.22,.84,.91],[-1.2,.22,.9,.93],[-.85,.22,.94,.93],[.4,.22,.96,.94],[1.3,.22,.97,.93],[1.95,.24,.96,.9],[2.2,.3,.9,.84],[2.28,.38,.78,.76]],t=r=>{const[o,l,c,i]=r;return[[-i,l+.1,o],[-i,c-.12,o],[-i+.12,c,o],[i-.12,c,o],[i,c-.12,o],[i,l+.1,o],[i-.1,l,o],[-i+.1,l,o]]};for(let r=0;r+1<e.length;r++){const o=t(e[r]),l=t(e[r+1]),c=(e[r][0]+e[r+1][0])/2,i=(e[r][1]+e[r][2])/2;for(let s=0;s<8;s++){const f=(s+1)%8,h=s>=5?F.TIRE:F.PAINT;u.quad([o[s],o[f],l[f],l[s]],h,{inside:[0,i,c],uv:[[0,0],[1,0],[1,1],[0,1]]})}}for(const[r,o]of[[e[0],-1],[e[e.length-1],1]]){const l=t(r),c=he(l);for(let i=0;i<8;i++){const s=[c,l[i],l[(i+1)%8],c];u.quad(s,F.PAINT,{n:[0,0,o]})}}const n=[[-.85,.94,.94,.86,.66],[-.1,.95,1.43,.87,.68],[.9,.96,1.42,.87,.68],[1.62,.96,.97,.85,.66]],a=r=>{const[o,l,c,i,s]=r;return[[-i,l,o],[-s,c,o],[s,c,o],[i,l,o]]};for(let r=0;r+1<n.length;r++){const o=a(n[r]),l=a(n[r+1]),c=[0,.9,(n[r][0]+n[r+1][0])/2];for(let i=0;i<3;i++){const f=i===1&&r===1?F.PAINT:F.GLASS;u.quad([o[i],o[i+1],l[i+1],l[i]],f,{inside:c})}}for(const r of[-1,1])u.quad([[r*.875,.955,.35],[r*.875,.955,.45],[r*.685,1.425,.45],[r*.685,1.425,.35]],F.PAINT,{n:[r,.4,0]});for(const r of[-1,1])u.box([r*.45,.6,-2.24],[r*.76,.72,-2.12],F.HEADLIGHT),u.box([r*.5,.74,2.15],[r*.82,.86,2.27],F.TAILLIGHT),u.box([r*.93,.95,-.75],[r*1.05,1.05,-.6],F.PAINT);return u.box([-.42,.42,-2.3],[.42,.56,-2.2],F.TIRE),u.box([-.88,.26,-2.36],[.88,.42,-2.12],F.TIRE),u.box([-.88,.28,2.12],[.88,.44,2.36],F.TIRE),u}function _e(){const u=new _,e=18,t=.34,n=.22,a=.12;for(let r=0;r<e;r++){const o=r/e*Math.PI*2,l=(r+1)/e*Math.PI*2,c=(s,f,h)=>[h,Math.cos(s)*f,Math.sin(s)*f],i=[0,Math.cos((o+l)/2),Math.sin((o+l)/2)];u.quad([c(o,t,-a),c(l,t,-a),c(l,t,a),c(o,t,a)],F.TIRE,{n:i,uv:[[r/e*4,0],[(r+1)/e*4,0],[(r+1)/e*4,1],[r/e*4,1]]});for(const s of[-1,1]){u.quad([c(o,t,s*a),c(l,t,s*a),c(l,n,s*a*.9),c(o,n,s*a*.9)],F.TIRE,{n:[s,0,0]});const f=r%3===0?F.CHROME:F.PLAIN;u.quad([c(o,n,s*a*.9),c(l,n,s*a*.9),[s*a*.6,0,0],[s*a*.6,0,0]],(f===F.CHROME,F.CHROME),{n:[s,0,0]})}}return u}function xe(u,e=16,t=10,n=F.CLOTH){const a=new _,r=(c,i)=>Math.sign(c)*Math.pow(Math.abs(c),i),o=(c,i)=>{const s=-Math.PI/2+i/t*Math.PI,f=c/e*Math.PI*2,h=.5*r(Math.cos(s),u)*r(Math.cos(f),u),v=.5*r(Math.sin(s),u),p=.5*r(Math.cos(s),u)*r(Math.sin(f),u),d=2/u-1,x=re([r(2*h,d),r(2*v,d),r(2*p,d)]);return{p:[h,v,p],n:x,uv:[c/e*2,i/t*2]}},l=a.v.length/9;for(let c=0;c<=t;c++)for(let i=0;i<=e;i++){const s=o(i,c);a.vert(s.p,s.n,s.uv,n)}for(let c=0;c<t;c++)for(let i=0;i<e;i++){const s=l+c*(e+1)+i,f=s+e+1;a.i.push(s,f,s+1,s+1,f,f+1)}for(let c=0;c<a.i.length;c+=3){const[i,s,f]=[a.i[c],a.i[c+1],a.i[c+2]],h=p=>[a.v[p*9],a.v[p*9+1],a.v[p*9+2]],v=fe(K(h(s),h(i)),K(h(f),h(i)));te(v,h(i))+te(v,h(s))+te(v,h(f))<0&&(a.i[c+1]=f,a.i[c+2]=s)}return a}function He(){const u=new _,e=16,t=4e3;for(let n=0;n<e;n++)for(let a=0;a<e;a++){const r=-t+2*t*a/e,o=-t+2*t*(a+1)/e,l=-t+2*t*n/e,c=-t+2*t*(n+1)/e;u.quad([[r,0,l],[o,0,l],[o,0,c],[r,0,c]],F.WATER,{n:[0,1,0]})}return u}const Ae={MATTE:39},$=10,qe=(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]],se=(u,e)=>[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]],de=u=>{const e=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/e,u[1]/e,u[2]/e]},je=(u,e)=>[(u[0]+e[0])/2,(u[1]+e[1])/2,(u[2]+e[2])/2];function ie(u,e,t,n=12,a=!0){const r=o=>{const[l,c,i,s]=o,f=(c+i)/2,h=(i-c)/2,v=[];for(let p=0;p<n;p++){const d=p/n*Math.PI*2,x=Math.cos(d),w=Math.sin(d);v.push([s*Math.sign(x)*Math.pow(Math.abs(x),.55),f+h*Math.sign(w)*Math.pow(Math.abs(w),.55),l])}return v};for(let o=0;o+1<e.length;o++){const l=r(e[o]),c=r(e[o+1]),i=[0,(e[o][1]+e[o][2]+e[o+1][1]+e[o+1][2])/4,(e[o][0]+e[o+1][0])/2];for(let s=0;s<n;s++){const f=(s+1)%n;u.quad([l[s],l[f],c[f],c[s]],t,{inside:i,uv:[[s/n*3,e[o][0]],[(s+1)/n*3,e[o][0]],[(s+1)/n*3,e[o+1][0]],[s/n*3,e[o+1][0]]]})}}if(a)for(const[o,l]of[[e[0],-1],[e[e.length-1],1]]){const c=r(o),i=[0,(o[1]+o[2])/2,o[0]];for(let s=0;s<n;s++)u.quad([i,c[s],c[(s+1)%n],i],t,{n:[0,0,l]})}}function A(u,e,t,n,a,r,o=!0){const l=de(qe(t,e)),c=de(Math.abs(l[1])<.9?se(l,[0,1,0]):se(l,[1,0,0])),i=se(l,c),s=(h,v)=>[0,1,2].map(p=>h[p]+(c[p]*Math.cos(v)+i[p]*Math.sin(v))*n),f=je(e,t);for(let h=0;h<a;h++){const v=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2;u.quad([s(e,v),s(e,p),s(t,p),s(t,v)],r,{inside:f}),o&&(u.quad([e,s(e,v),s(e,p),e],r,{n:l.map(d=>-d)}),u.quad([t,s(t,v),s(t,p),t],r,{n:l}))}}function Ke(u,e,t,n,a=12,r=8){const o=u.v.length/9;for(let l=0;l<=r;l++)for(let c=0;c<=a;c++){const i=-Math.PI/2+l/r*Math.PI,s=c/a*Math.PI*2,f=[Math.cos(i)*Math.cos(s),Math.sin(i),Math.cos(i)*Math.sin(s)];u.vert([e[0]+f[0]*t[0],e[1]+f[1]*t[1],e[2]+f[2]*t[2]],de([f[0]/t[0],f[1]/t[1],f[2]/t[2]]),[c/a,l/r],n)}for(let l=0;l<r;l++)for(let c=0;c<a;c++){const i=o+l*(a+1)+c,s=i+a+1;u.i.push(i,i+1,s,i+1,s+1,s)}}function De(u,e,t,n,a,r,o){const l=[e(t,-a,-r),e(n,-a,-r),e(n,a,-r),e(t,a,-r),e(t,-a,r),e(n,-a,r),e(n,a,r),e(t,a,r)],c=[[4,5,6,7],[0,1,2,3],[0,1,5,4],[3,2,6,7],[1,2,6,5],[0,3,7,4]];for(const i of c)u.quad(i.map(s=>l[s]),F.TIRE,{inside:o})}function $e(){const u=new _,e=Ae.MATTE,t=F.TIRE;ie(u,[[-5.35,1.08,1.5,.16],[-5,.92,1.85,.44],[-4.2,.8,2.05,.58],[-3,.78,2.12,.62],[-1.5,.8,2.28,.72],[0,.86,2.5,.86],[1.6,.96,2.58,.86],[2.8,1.2,2.45,.6],[3.8,1.55,2.35,.36],[6.5,1.8,2.3,.26],[8.8,1.95,2.3,.19]],e,14),ie(u,[[-4.35,1.95,2.02,.42],[-3.7,1.98,2.5,.5],[-2.45,2,2.56,.52],[-2.25,2.05,2.58,.5]],F.GLASS,12),ie(u,[[-2.25,2.1,2.72,.5],[-1.1,2.2,2.95,.53],[-.3,2.3,2.95,.5],[.2,2.42,2.55,.42]],F.GLASS,12);for(const a of[-3.05,-2.25,-1.2])u.box([-.54,2,a-.04],[.54,a<-2?2.6:2.98,a+.04],e);for(const a of[-1,1]){A(u,[a*.98,2.25,-.5],[a*.98,2.25,2.3],.46,14,e),A(u,[a*.98,2.25,-.56],[a*.98,2.25,-.5],.36,14,t),A(u,[a*1,2.3,2.3],[a*1.35,2.45,2.9],.22,10,t),u.box([a>0?.7:-2.75,1.52,-.7],[a>0?2.75:-.7,1.66,.5],e),A(u,[a*1.5,1.1,-1.35],[a*1.5,1.1,.65],.32,14,e),u.box([a*1.5-.06,1.42,-.4],[a*1.5+.06,1.55,.2],e);for(let r=0;r<7;r++){const o=r/7*Math.PI*2,l=a*1.5+Math.cos(o)*.18,c=1.1+Math.sin(o)*.18;A(u,[l,c,-1.37],[l,c,-1.33],.06,6,t,!1)}u.box([a*2.42-.05,1.3,-.9],[a*2.42+.05,1.53,.6],e);for(const r of[-.13,.13])for(const o of[1.12,1.38])A(u,[a*2.42+r,o,-1.1],[a*2.42+r,o,.7],.085,8,e),A(u,[a*2.42+r,o,-1.25],[a*2.42+r,o,-1.1],.05,8,t);u.box([a*.6-.06,.4,-1.66],[a*.6+.06,1,-1.54],$),u.box([Math.min(a*.6,a*1.12)-.04,.3,-1.64],[Math.max(a*.6,a*1.12)+.04,.42,-1.56],$),A(u,[a*1,.36,-1.6],[a*1.24,.36,-1.6],.36,16,t)}A(u,[0,2.5,.25],[0,3.35,.25],.2,12,$),u.box([-.35,2.45,-.1],[.35,2.75,.9],e),Ke(u,[0,1.22,-5.38],[.36,.38,.34],t),u.box([-.28,1.15,-5.78],[.28,1.35,-5.62],F.GLASS),A(u,[0,.72,-3.55],[0,.86,-3.55],.24,12,t);const n=[[8.2,2.25],[8.75,4.55],[9.25,4.55],[9.15,1.95]];for(const a of[-1,1])u.quad(n.map(([r,o])=>[a*.08,o,r]),e,{n:[a,0,0]});for(let a=0;a<4;a++){const[r,o]=n[a],[l,c]=n[(a+1)%4];u.quad([[-.08,o,r],[.08,o,r],[.08,c,l],[-.08,c,l]],e,{inside:[0,3.2,8.8]})}return u.box([-1.65,2.02,8.55],[1.65,2.1,9.2],e),u.box([.05,4.1,8.85],[.3,4.4,9.15],e),u.box([-.05,.3,8],[.05,1.95,8.1],$),A(u,[-.1,.25,8.05],[.1,.25,8.05],.25,12,t),u}function Ye(){const u=new _;for(let e=0;e<4;e++){const t=e/4*Math.PI*2,n=Math.cos(t),a=Math.sin(t);De(u,(r,o,l)=>[n*r-a*o,l,a*r+n*o],.35,7.3,.27,.035,[n*3.8,0,a*3.8])}return A(u,[0,-.15,0],[0,.12,0],.42,12,$),u}function We(){const u=new _;for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.3,n=Math.cos(t),a=Math.sin(t);De(u,(r,o,l)=>[l,n*r-a*o,a*r+n*o],.12,1.45,.13,.025,[0,n*.8,a*.8])}return A(u,[-.08,0,0],[.08,0,0],.14,10,$),u}function Xe(){const u=new _;return u.box([-.17,-.2,-.45],[.17,.08,.25],Ae.MATTE),A(u,[0,-.07,-.45],[0,-.07,-1.85],.045,8,$),A(u,[0,-.07,-1],[0,-.07,-1.15],.07,8,F.TIRE),u}const be=`diagnostic(off, derivative_uniformity);\r
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
`,Ze=`// Scene geometry: depth prepass, shadow pass and the main PBR forward pass.\r
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
// ray tracing (rtcore.wgsl): BVH nodes, triangles, per-frame TLAS. Used when F.splits.w (render mode) > 0\r
@group(1) @binding(12) var<storage, read> rtNodes: array<vec4f>;\r
@group(1) @binding(13) var<storage, read> rtTris: array<vec4f>;\r
@group(1) @binding(14) var<storage, read> rtTlas: array<vec4f>;\r
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
// Sun/moon visibility: cascaded shadow maps (raster) or an inline ray query against the BVH (RT / PT modes).\r
// ii >= F.cascTexel.w marks skinned characters, whose own ellipsoid proxies must not shadow them.\r
fn sunShadow(wpos: vec3f, n: vec3f, viewZ: f32, pix: vec2f, ii: u32) -> f32 {\r
  if (F.splits.w < 0.5) { return shadowFactor(wpos, n, viewZ); }\r
  let skip = select(0u, RT_PROXY, f32(ii) >= F.cascTexel.w);\r
  let fi = F.misc.x;\r
  let u = vec2f(fract(interleavedGradientNoise(pix) + fi * 0.618034), fract(interleavedGradientNoise(pix.yx + 23.0) + fi * 0.381966));\r
  let L = rtConeDir(F.sunDir.xyz, 0.008, u);\r
  let o = wpos + n * (0.015 + max(viewZ, 0.0) * 0.0012);\r
  return select(1.0, 0.0, rtOccluded(o, L, 2000.0, skip));\r
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
    // 取り込んだ街 (?map=namba): 41 外壁 / 42 ガラス / 43 店舗ガラス / 44 窓枠 は seed に sRGB の色、45 は白線のないアスファルト\r
    case 41u, 42u, 43u: { layer = 11; }\r
    case 44u: { layer = 10; }\r
    case 45u: { layer = 0; uv = uvIn * 0.25; }\r
    case 46u: { layer = 10; }                    // 看板\r
    case 47u: { layer = 0; uv = uvIn * 0.25; }   // 路面標示 (下地のアスファルトの凹凸を残す)\r
    case 48u: { layer = 11; uv = uvIn * vec2f(0.5, 0.16); } // 側溝 (uv.x = 壁沿いの距離 m, uv.y = 幅 0..1)\r
    case 49u: { layer = 10; uv = uvIn * 0.3; }   // マンホール (uv = 中心 0、半径 1)\r
    case 50u: { layer = 0; uv = uvIn * 0.25 + vec2f(0.37, 0.71); } // 補修跡のアスファルト\r
    case 51u: { layer = 10; uv = uvIn * 0.5; }   // シャッター (uv = 壁沿い m, 高さ m)\r
    case 52u: { layer = 11; uv = uvIn * 0.35; }  // タイル貼りの外壁 (uv = 壁沿い/3, 高さ/3)\r
    case 53u: { layer = 10; uv = uvIn * 0.5; }   // 金属パネルの外壁\r
    case 54u: { layer = 11; uv = uvIn * 0.35; }  // モザイクタイルの外壁\r
    case 55u: { layer = 11; uv = uvIn * 0.2; }   // エアコンの室外機 (前面 uv 0..1、側面は 2)\r
    case 57u: { layer = 11; uv = uvIn * 0.35; }  // サイディング (木造の家)\r
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
    case 46u: { // 看板: 解析した地の色 + 架空の文字ブロック (実在の文字やロゴは描かない)。夜は内照式で光る\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      let lum = dot(c, vec3f(0.2126, 0.7152, 0.0722));\r
      let ink = select(vec3f(0.95, 0.94, 0.9), vec3f(0.03, 0.03, 0.04), lum > 0.35);\r
      let q = uvIn * vec2f(3.2, 3.2);\r
      let cellc = vec2i(floor(q));\r
      let fq = fract(q);\r
      let inMargin = step(0.12, fract(uvIn.x)) * step(fract(uvIn.x), 0.88) * step(0.15, fract(uvIn.y)) * step(fract(uvIn.y), 0.85);\r
      let gl = step(0.4, hash21(cellc, seed)) * step(0.14, fq.x) * step(fq.x, 0.86) * step(0.12, fq.y) * step(fq.y, 0.88) * inMargin;\r
      s.albedo = mix(c, ink, gl * 0.9); s.rough = 0.35; s.metal = 0.0; nts = vec3f(0.0, 0.0, 1.0);\r
      s.emissive = mix(c, ink, gl) * (0.15 + 7.0 * night);\r
    }\r
    case 47u: { // 路面標示: 白 / 黄のペイント\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      s.albedo = c * (0.8 + 0.2 * a.r / max(dot(a.rgb, vec3f(0.333)), 0.05) * 0.5); s.rough = 0.55; s.metal = 0.0;\r
    }\r
    case 48u: { // 側溝: コンクリート蓋 (60 cm 割り) と 6 m ごとの鋼製グレーチング\r
      let along = uvIn.x;\r
      let grate = step(fract(along / 6.0), 0.1);\r
      let seam = 1.0 - step(fract(along / 0.6), 0.03) * 0.6;\r
      let edge = smoothstep(0.0, 0.08, uvIn.y) * smoothstep(1.0, 0.92, uvIn.y);\r
      let bars = step(0.42, fract(along * 16.0)) * step(0.12, uvIn.y) * step(uvIn.y, 0.88);\r
      let lid = s.albedo * 0.9 * seam * mix(0.55, 1.0, edge);\r
      s.albedo = mix(lid, mix(vec3f(0.015), vec3f(0.11, 0.105, 0.1), bars), grate);\r
      s.metal = mix(s.metal, 0.75, grate * bars); s.rough = mix(s.rough, 0.5, grate);\r
    }\r
    case 49u: { // マンホール: 縁 + 格子状の滑り止め模様の鋳鉄\r
      let r = length(uvIn);\r
      let p = uvIn * 6.0;\r
      let dia = abs(fract(p.x + p.y) - 0.5) + abs(fract(p.x - p.y) - 0.5);\r
      let raised = step(0.55, dia);\r
      let rim = step(0.86, r);\r
      let ring = step(0.36, r) * step(r, 0.42);\r
      s.albedo = vec3f(0.07, 0.068, 0.065) * mix(1.0, 1.9, max(max(raised * (1.0 - rim), rim * 0.8), ring)) * (0.8 + 0.4 * a.r);\r
      s.metal = 0.55; s.rough = mix(0.65, 0.35, raised); nts = normalize(mix(nts, vec3f(0, 0, 1), 0.6));\r
    }\r
    case 51u: { // シャッター: 9 cm ピッチの波板 (法線で凹凸)、下端の座板、薄い汚れ\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      let ph = fract(uvIn.y / 0.09);\r
      let slope = cos(ph * 6.2832);\r
      nts = normalize(vec3f(0.0, slope * 0.55, 1.0));\r
      let bottom = 1.0 - step(0.12, uvIn.y) * 1.0;\r
      let grime = mix(0.78, 1.0, smoothstep(0.0, 1.2, uvIn.y));\r
      s.albedo = mix(c * (0.92 + 0.08 * slope) * grime, vec3f(0.12), bottom * 0.7);\r
      s.metal = 0.45; s.rough = 0.42 + 0.2 * (1.0 - grime);\r
    }\r
    case 52u: { // タイル貼り: 二丁掛タイル (227x60 mm、目地 6 mm) の馬目地。遠くでは目地を平均色に溶かしてちらつきを防ぐ\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      var q = vec2f(uvIn.x * 3.0 / 0.233, -uvIn.y * 3.0 / 0.066);\r
      q.x += 0.5 * floor(q.y);\r
      let cellT = vec2i(floor(q));\r
      let f = fract(q);\r
      let fw = fwidth(q);\r
      let fade = clamp(1.0 - max(fw.x * 6.0, fw.y * 2.0), 0.0, 1.0);\r
      let grout = (1.0 - step(0.026, f.x) * step(f.x, 0.974) * step(0.09, f.y) * step(f.y, 0.91)) * fade;\r
      let tv = 0.86 + 0.28 * hash21(cellT, seed);\r
      s.albedo = mix(c * mix(1.0, tv, fade), vec3f(0.55, 0.54, 0.52) * dot(c, vec3f(0.6)) + 0.12, grout * 0.85);\r
      s.rough = mix(0.55, 0.85, grout); s.metal = 0.0;\r
      nts = normalize(mix(vec3f(0.0, 0.0, 1.0), nts, 0.25));\r
    }\r
    case 53u: { // 金属パネル: 0.9 m ごとの縦目地とリブ\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      let x = uvIn.x * 3.0;\r
      let seam = 1.0 - (1.0 - smoothstep(0.0, 0.015, fract(x / 0.9))) * 0.7;\r
      let rib = cos(fract(x / 0.15) * 6.2832);\r
      s.albedo = c * seam * (0.95 + 0.05 * rib); s.metal = 0.35; s.rough = 0.4;\r
      nts = normalize(vec3f(rib * 0.25, 0.0, 1.0));\r
    }\r
    case 45u: { // 街のアスファルト: 経年で骨材が出た明るい灰色 (新しい舗装の黒より明るく、少し彩度を落とす)\r
      s.albedo = mix(vec3f(dot(s.albedo, vec3f(0.3333))), s.albedo, 0.55) * 3.0;\r
    }\r
    case 54u: { // モザイクタイル: 45 mm 角 (目地 5 mm) の格子。遠くでは平均色に溶かす\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      let q = vec2f(uvIn.x, -uvIn.y) * 3.0 / 0.05;\r
      let f = fract(q);\r
      let fw = fwidth(q);\r
      let fade = clamp(1.0 - max(fw.x, fw.y) * 3.0, 0.0, 1.0);\r
      let grout = (1.0 - step(0.1, f.x) * step(0.1, f.y)) * fade;\r
      let tv = 0.88 + 0.24 * hash21(vec2i(floor(q)), seed);\r
      s.albedo = mix(c * mix(1.0, tv, fade), c * 0.75 + 0.08, grout * 0.7);\r
      s.rough = mix(0.35, 0.8, grout); s.metal = 0.0;\r
      nts = normalize(mix(vec3f(0.0, 0.0, 1.0), nts, 0.2));\r
    }\r
    case 55u: { // エアコンの室外機: 白い樹脂の箱、前面右寄りに丸いファンのグリル\r
      s.albedo = vec3f(0.78, 0.78, 0.76) * (0.9 + 0.1 * a.r); s.rough = 0.5; s.metal = 0.0;\r
      nts = vec3f(0.0, 0.0, 1.0);\r
      if (uvIn.x <= 1.0) {\r
        let d = length((uvIn - vec2f(0.6, 0.5)) * vec2f(1.29, 1.0));\r
        let inFan = 1.0 - step(0.36, d);\r
        let ring = step(0.5, fract(d * 22.0));\r
        s.albedo = mix(s.albedo, mix(vec3f(0.05), vec3f(0.42), ring), inFan);\r
        let vent = step(0.08, uvIn.x) * step(uvIn.x, 0.2) * step(0.5, fract(uvIn.y * 14.0));\r
        s.albedo *= 1.0 - vent * 0.4;\r
      }\r
    }\r
    case 57u: { // サイディング: 18 cm ピッチの横張り (重ねの段で陰影)、3.6 m ごとの縦目地\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      let y = -uvIn.y * 3.0;\r
      let lap = fract(y / 0.18);\r
      let joint = 1.0 - (1.0 - step(0.006, fract(uvIn.x * 3.0 / 3.6))) * 0.5;\r
      s.albedo = c * (0.82 + 0.18 * lap) * joint; s.rough = 0.6; s.metal = 0.0;\r
      nts = normalize(vec3f(0.0, -0.35 * (1.0 - lap) + 0.1, 1.0));\r
    }\r
    case 50u: { // 補修跡: 周囲より新しい (濃い) / 古い (明るい) アスファルト\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      s.albedo = mix(vec3f(dot(s.albedo, vec3f(0.3333))), s.albedo, 0.55) * 3.0;\r
      s.albedo *= c * 1.25; s.rough = clamp(s.rough * mix(0.85, 1.1, c.r), 0.3, 1.0);\r
    }\r
    case 41u, 42u, 43u, 44u: {\r
      let c = pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));\r
      if (id == 41u) { // 外壁: 解析した色 × コンクリートの濃淡\r
        // 塗装・吹付けの外壁: 色むらは控えめにし、コンクリートの凹凸もほぼ平らにする (岩肌に見えないように)\r
        s.albedo = c * clamp(0.92 + 0.35 * (dot(a.rgb, vec3f(0.3333)) - 0.45), 0.85, 1.12);\r
        nts = normalize(mix(nts, vec3f(0.0, 0.0, 1.0), 0.75));\r
      } else if (id == 44u) { // 窓枠: 塗装した金属\r
        s.albedo = c; s.metal = 0.6; s.rough = 0.4;\r
      } else { // ガラス (下の窓処理で反射と夜の室内灯)\r
        s.albedo = c * 0.35; mask = 1.0;\r
        if (id == 43u) { s.emissive += vec3f(1.0, 0.85, 0.6) * (0.4 + 6.0 * night); }\r
        if (id == 42u) {\r
          // 窓 1 枚ごと (uv の整数部 = 窓、小数部 = 窓の中の位置): アルミサッシ、引き違いの召し合わせ、カーテン、型板ガラス\r
          let wc = vec2i(floor(uvIn));\r
          let p = fract(uvIn);\r
          let r0 = hash21(wc, 11u); let r1 = hash21(wc, 12u); let r2 = hash21(wc, 13u); let r3 = hash21(wc, 14u);\r
          let sash = 1.0 - step(0.035, p.x) * step(p.x, 0.965) * step(0.04, p.y) * step(p.y, 0.96);\r
          let meet = 1.0 - step(0.018, abs(p.x - 0.5));\r
          let frame = max(sash, meet);\r
          if (r0 < 0.18) {\r
            // 型板ガラス: 白っぽく拡散、映り込みは弱い\r
            s.albedo = vec3f(0.62, 0.64, 0.66) * (0.9 + 0.1 * vnoise(p * 40.0, 3u)); s.rough = 0.55; mask = 0.45;\r
          } else if (r1 < 0.72) {\r
            // カーテン: 左右から引いた幅はばらばら、ひだの陰影\r
            let cl = r2 * 0.48; let cr = r3 * 0.48;\r
            let cur = step(p.x, cl) + step(1.0 - cr, p.x);\r
            let pal = array<vec3f, 4>(vec3f(0.86, 0.85, 0.82), vec3f(0.8, 0.74, 0.63), vec3f(0.66, 0.67, 0.68), vec3f(0.7, 0.75, 0.8));\r
            let cc = pal[u32(hash21(wc, 15u) * 3.99)] * (0.88 + 0.12 * sin(p.x * 70.0));\r
            s.albedo = mix(s.albedo, cc * 0.75, min(cur, 1.0)); mask = mix(1.0, 0.62, min(cur, 1.0));\r
          }\r
          // サッシの色: 建物ごとにシルバーかブロンズ\r
          let al = select(vec3f(0.62, 0.63, 0.65), vec3f(0.17, 0.14, 0.11), hashf(seed) > 0.6);\r
          s.albedo = mix(s.albedo, al, frame); s.metal = mix(s.metal, 0.8, frame); s.rough = mix(s.rough, 0.35, frame);\r
          mask = mix(mask, 0.0, frame);\r
        }\r
      }\r
    }\r
    default: {}\r
  }\r
  // windows: glass with reflections + random interior lights at night\r
  // smooth glass coverage (the mask is mip-filtered; a hard threshold flickers at window edges)\r
  let gm = select(0.0, smoothstep(0.35, 0.85, mask), id == 4u || id == 5u || id == 6u || id == 42u || id == 43u);\r
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
    let sh = sunShadow(i.wpos, vec3f(0.0, 1.0, 0.0), viewZ, i.clip.xy, i.ii);\r
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
    let sh = sunShadow(i.wpos, Ng, viewZ, i.clip.xy, i.ii);\r
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
  var irr = envSample(N, maxLod - 1.0) * 0.9 + envSample(vec3f(0.0, 1.0, 0.0), maxLod - 1.0) * 0.1 * max(N.y, 0.0);\r
  // 地面・向かいの壁からの照り返し (平均反射率 0.22 の地面が日光を受けて返す光): 横・下向きの面の影を持ち上げる\r
  irr += F.sunColor.rgb * max(F.sunDir.y, 0.0) * 0.22 / PI * (0.5 - 0.5 * N.y) * 0.6;\r
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
`,Je=`// Physically based single-scattering atmosphere (Rayleigh + Mie) rendered into an equirect LUT,
// which doubles as the image-based-lighting environment (mip chain = rough reflections / irradiance).
@group(0) @binding(0) var<uniform> F: Frame;
@group(1) @binding(0) var srcTex: texture_2d<f32>;
@group(1) @binding(1) var srcSamp: sampler;

const RE = 6360e3; const RA = 6420e3;
const BR = vec3f(5.8e-6, 13.5e-6, 33.1e-6);
const BM = 21e-6; const HR = 8000.0; const HM = 1200.0;

fn raySphere(ro: vec3f, rd: vec3f, r: f32) -> vec2f {
  let b = dot(ro, rd); let c = dot(ro, ro) - r * r; let d = b * b - c;
  if (d < 0.0) { return vec2f(-1.0); }
  let s = sqrt(d); return vec2f(-b - s, -b + s);
}

fn atmosphere(rd: vec3f, sun: vec3f, sunI: f32) -> vec3f {
  if (sunI <= 0.0) { return vec3f(0.0); }
  let ro = vec3f(0.0, RE + 60.0, 0.0);
  var tmax = raySphere(ro, rd, RA).y;
  let tg = raySphere(ro, rd, RE);
  let hitGround = tg.x > 0.0;
  if (hitGround) { tmax = tg.x; }
  let n = 16; let ds = tmax / f32(n);
  var odR = 0.0; var odM = 0.0; var sumR = vec3f(0.0); var sumM = vec3f(0.0);
  let mu = dot(rd, sun);
  let pR = 3.0 / (16.0 * PI) * (1.0 + mu * mu);
  let g = 0.76;
  let pM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + mu * mu)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
  for (var i = 0; i < n; i++) {
    let p = ro + rd * (ds * (f32(i) + 0.5));
    let h = length(p) - RE;
    let hr = exp(-h / HR) * ds; let hm = exp(-h / HM) * ds;
    odR += hr; odM += hm;
    let tl = raySphere(p, sun, RA).y;
    let dl = tl / 6.0;
    var lR = 0.0; var lM = 0.0; var ok = true;
    for (var j = 0; j < 6; j++) {
      let pl = p + sun * (dl * (f32(j) + 0.5));
      let hl = length(pl) - RE;
      if (hl < 0.0) { ok = false; break; }
      lR += exp(-hl / HR) * dl; lM += exp(-hl / HM) * dl;
    }
    if (ok) {
      let tau = BR * (odR + lR) + BM * 1.1 * (odM + lM);
      let att = exp(-tau);
      sumR += att * hr; sumM += att * hm;
    }
  }
  var col = sunI * (sumR * BR * pR + sumM * BM * pM);
  if (hitGround) {
    let tv = exp(-(BR * odR + BM * 1.1 * odM));
    let ts = exp(-(BR * HR + BM * 1.1 * HM) / max(sun.y, 0.03));
    col += tv * vec3f(0.09, 0.085, 0.08) / PI * sunI * 0.33 * ts * max(sun.y, 0.0);
  }
  return col;
}

struct FullOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vsFull(@builtin(vertex_index) vi: u32) -> FullOut {
  let p = vec2f(f32((vi << 1u) & 2u), f32(vi & 2u));
  var o: FullOut;
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);
  o.uv = vec2f(p.x, 1.0 - p.y);
  return o;
}

const SKY_SCALE = 0.55;
@fragment fn fsLut(i: FullOut) -> @location(0) vec4f {
  let d = equirectToDir(i.uv);
  var c = atmosphere(d, F.sun.xyz, F.sun.w) + atmosphere(d, F.moon.xyz, F.moon.w);
  c = c * SKY_SCALE + vec3f(0.0006, 0.0009, 0.0018) * F.sunDir.w; // faint night airglow
  // 曇天 (F.misc.w = 曇り具合 0..1): 雲が日光を散乱して空全体が明るい灰色に光る。CIE 標準曇天空 (天頂は地平の約 3 倍)
  let oc = F.misc.w;
  if (oc > 0.0) {
    let zen = atmosphere(vec3f(0.0, 1.0, 0.0), F.sun.xyz, F.sun.w) * SKY_SCALE;
    let lz = dot(zen, vec3f(0.2126, 0.7152, 0.0722));
    var deck = vec3f(0.94, 0.96, 1.0) * lz * 6.0 * (1.0 + 2.0 * max(d.y, 0.0)) / 3.0;
    if (d.y < 0.0) { deck *= 0.45; } // 下半球は地面・建物からの反射
    c = mix(c, deck, oc);
  }
  return vec4f(c, 1.0);
}

// separable-ish blur while downsampling: wider kernel at each mip approximates GGX prefiltering
@fragment fn fsEnvDown(i: FullOut) -> @location(0) vec4f {
  let dims = vec2f(textureDimensions(srcTex));
  let t = 1.0 / dims;
  var c = vec4f(0.0); var w = 0.0;
  for (var y = -2; y <= 2; y++) { for (var x = -2; x <= 2; x++) {
    let k = exp(-f32(x * x + y * y) / 4.0);
    c += textureSampleLevel(srcTex, srcSamp, i.uv + vec2f(f32(x), f32(y)) * t * 1.5, 0.0) * k; w += k;
  } }
  return c / w;
}

struct SkyOut { @location(0) color: vec4f, @location(1) vel: vec2f, @location(2) gbuf: vec4f, @location(3) alb: vec4f };
@fragment fn fsSky(i: FullOut) -> SkyOut {
  let ndc = vec2f(i.uv.x * 2.0 - 1.0, 1.0 - i.uv.y * 2.0);
  let wp = F.invViewProj * vec4f(ndc, 1.0, 1.0);
  let d = normalize(wp.xyz / wp.w - F.camPos.xyz);
  var c = textureSampleLevel(srcTex, srcSamp, dirToEquirect(d), 0.0).rgb;
  // sun disc with limb darkening
  let sd = dot(d, F.sun.xyz);
  let sunR = 0.99996;
  if (sd > sunR && F.sun.w > 0.0) {
    let tr = exp(-(BR * HR + BM * 1.1 * HM) / max(F.sun.y + 0.02, 0.02));
    let limb = 1.0 - pow(1.0 - (sd - sunR) / (1.0 - sunR), 0.5) * 0.0;
    c += tr * 2500.0 * limb * smoothstep(sunR, sunR + 0.00001, sd) * (1.0 - F.misc.w); // 曇天では太陽の円盤が見えない
  }
  // moon + stars at night
  let night = F.sunDir.w;
  if (night > 0.0 && d.y > 0.0) {
    let md = dot(d, F.moon.xyz);
    c += vec3f(0.9, 0.95, 1.0) * 1.2 * smoothstep(0.99985, 0.99992, md) * night;
    c += vec3f(0.6, 0.7, 1.0) * 0.02 * pow(max(md, 0.0), 300.0) * night;
    let sp = d / max(abs(d.y), 0.2) * 300.0;
    let cell = vec2i(floor(sp.xz));
    let h = hash21(cell, 5u);
    let f = fract(sp.xz) - 0.5;
    let star = step(0.985, h) * smoothstep(0.12, 0.0, length(f)) * (0.5 + 0.5 * sin(F.camPos.w * (2.0 + h * 5.0) + h * 50.0));
    c += vec3f(1.0, 0.95, 0.9) * star * 0.25 * night * smoothstep(0.0, 0.2, d.y);
  }
  var o: SkyOut;
  o.color = vec4f(c, 1.0);
  o.gbuf = vec4f(0.0); o.alb = vec4f(0.0);
  let cc = F.viewProjNJ * vec4f(d, 0.0); let pc = F.prevViewProj * vec4f(d, 0.0);
  o.vel = (cc.xy / cc.w - pc.xy / pc.w) * vec2f(0.5, -0.5);
  return o;
}
`,Qe=`// Post-processing: SSAO, temporal AA, bloom, tonemapping (ACES) + composite.\r
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
`,et=`// Procedural, tileable PBR material textures generated on the GPU at startup.\r
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
`,tt=`// Screen-space reflections + screen-space diffuse GI (half resolution), then a full-res resolve.\r
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
`,ye=`// ---- Software ray tracing core: two-level BVH traversal (static world BLAS + per-frame TLAS of dynamic instances).
// The including module declares:
//   rtNodes: array<vec4f>  node = (min.xyz, leftFirst) (max.xyz, count)   count > 0 -> leaf
//   rtTris:  array<vec4f>  tri  = (v0.xyz, mat) (e1.xyz, -) (e2.xyz, -)
//   rtTlas:  array<vec4f>  [0] = (nodeCount, instBase), nodes from [1], instance records (5 vec4) from instBase
const RT_NONE = 0xffffffffu;
const RT_STACK = 40u;
const RT_FAR = 1e30;
const RT_PROXY = 1u;     // character stand-in (secondary rays only)
const RT_NOSHADOW = 2u;  // emitters (tracers, lamps) never occlude

struct BHit { t: f32, tri: u32 };
struct RHit { t: f32, tri: u32, inst: u32, n: vec3f, mat: u32, color: vec4f };

fn rtSlab(bmin: vec3f, bmax: vec3f, o: vec3f, inv: vec3f, tmax: f32) -> f32 {
  let t0 = (bmin - o) * inv; let t1 = (bmax - o) * inv;
  let tn = max(max(min(t0.x, t1.x), min(t0.y, t1.y)), min(t0.z, t1.z));
  let tf = min(min(max(t0.x, t1.x), max(t0.y, t1.y)), max(t0.z, t1.z));
  if (tf >= max(tn, 0.0) && tn < tmax) { return tn; }
  return RT_FAR;
}

fn rtSafeInv(d: vec3f) -> vec3f {
  let e = 1e-12;
  let s = select(vec3f(-e), vec3f(e), d >= vec3f(0.0));
  return 1.0 / select(d, s, abs(d) < vec3f(e));
}

// Closest (or any) hit inside one BLAS. Ray need not be normalized; t is in ray parameter units.
fn rtTraceBlas(root: u32, o: vec3f, d: vec3f, tmax: f32, anyHit: bool) -> BHit {
  var best = BHit(tmax, RT_NONE);
  let inv = rtSafeInv(d);
  if (rtSlab(rtNodes[root * 2u].xyz, rtNodes[root * 2u + 1u].xyz, o, inv, tmax) >= RT_FAR) { return best; }
  var stack: array<u32, RT_STACK>;
  var sp = 0u;
  var node = root;
  for (var guard = 0; guard < 4096; guard++) {
    let a = rtNodes[node * 2u]; let b = rtNodes[node * 2u + 1u];
    let cnt = bitcast<u32>(b.w); let lf = bitcast<u32>(a.w);
    if (cnt > 0u) {
      for (var k = 0u; k < cnt; k++) {
        let ti = lf + k;
        let v0 = rtTris[ti * 3u]; let e1 = rtTris[ti * 3u + 1u].xyz; let e2 = rtTris[ti * 3u + 2u].xyz;
        let h = cross(d, e2); let det = dot(e1, h);
        if (abs(det) < 1e-12) { continue; }
        let f = 1.0 / det; let s = o - v0.xyz;
        let u = f * dot(s, h);
        if (u < 0.0 || u > 1.0) { continue; }
        let q = cross(s, e1); let v = f * dot(d, q);
        if (v < 0.0 || u + v > 1.0) { continue; }
        let t = f * dot(e2, q);
        if (t > 1e-5 && t < best.t) {
          best = BHit(t, ti);
          if (anyHit) { return best; }
        }
      }
      if (sp == 0u) { break; }
      sp--; node = stack[sp];
      continue;
    }
    let c0 = lf; let c1 = lf + 1u;
    var t0 = rtSlab(rtNodes[c0 * 2u].xyz, rtNodes[c0 * 2u + 1u].xyz, o, inv, best.t);
    var t1 = rtSlab(rtNodes[c1 * 2u].xyz, rtNodes[c1 * 2u + 1u].xyz, o, inv, best.t);
    var cn = c0; var cf = c1;
    if (t1 < t0) { let tt = t0; t0 = t1; t1 = tt; cn = c1; cf = c0; }
    if (t0 >= RT_FAR) {
      if (sp == 0u) { break; }
      sp--; node = stack[sp];
      continue;
    }
    node = cn;
    if (t1 < RT_FAR && sp < RT_STACK) { stack[sp] = cf; sp++; }
  }
  return best;
}

fn rtInstXf(base: u32, p: vec4f) -> vec3f {
  return vec3f(dot(rtTlas[base], p), dot(rtTlas[base + 1u], p), dot(rtTlas[base + 2u], p));
}

// Full scene query. skipMask: instance flags to ignore (e.g. RT_PROXY for rays leaving a character).
fn rtTrace(o: vec3f, d: vec3f, tmax: f32, anyHit: bool, skipMask: u32) -> RHit {
  var r: RHit;
  r.t = tmax; r.tri = RT_NONE; r.inst = RT_NONE; r.mat = 0u; r.color = vec4f(1.0, 1.0, 1.0, -1.0); r.n = vec3f(0.0, 1.0, 0.0);
  let w = rtTraceBlas(0u, o, d, tmax, anyHit);
  if (w.tri != RT_NONE) { r.t = w.t; r.tri = w.tri; if (anyHit) { return r; } }
  // dynamic instances
  let hdr = rtTlas[0];
  let nn = bitcast<u32>(hdr.x); let instBase = bitcast<u32>(hdr.y);
  if (nn > 0u) {
    let inv = rtSafeInv(d);
    var stack: array<u32, 24>;
    var sp = 0u; var node = 0u;
    for (var guard = 0; guard < 2048; guard++) {
      let a = rtTlas[1u + node * 2u]; let b = rtTlas[2u + node * 2u];
      var pop = true;
      if (rtSlab(a.xyz, b.xyz, o, inv, r.t) < RT_FAR) {
        let lf = bitcast<u32>(a.w);
        if (bitcast<u32>(b.w) > 0u) {
          let ib = instBase + lf * 5u;
          let im = rtTlas[ib + 3u];
          if ((bitcast<u32>(im.y) & skipMask) == 0u) {
            let lo = rtInstXf(ib, vec4f(o, 1.0)); let ld = rtInstXf(ib, vec4f(d, 0.0));
            let h = rtTraceBlas(bitcast<u32>(im.x), lo, ld, r.t, anyHit);
            if (h.tri != RT_NONE) {
              r.t = h.t; r.tri = h.tri; r.inst = lf;
              if (anyHit) { return r; }
            }
          }
        } else {
          node = lf;
          if (sp < 24u) { stack[sp] = lf + 1u; sp++; }
          pop = false;
        }
      }
      if (pop) { if (sp == 0u) { break; } sp--; node = stack[sp]; }
    }
  }
  if (r.tri != RT_NONE) {
    let v0 = rtTris[r.tri * 3u];
    r.mat = bitcast<u32>(v0.w);
    var n = cross(rtTris[r.tri * 3u + 1u].xyz, rtTris[r.tri * 3u + 2u].xyz);
    if (r.inst != RT_NONE) {
      let ib = instBase + r.inst * 5u;
      // normal matrix = transpose(inverse linear part): rows of the inverse combine the local normal
      n = rtTlas[ib].xyz * n.x + rtTlas[ib + 1u].xyz * n.y + rtTlas[ib + 2u].xyz * n.z;
      r.color = rtTlas[ib + 4u];
    }
    r.n = normalize(n);
    if (dot(r.n, d) > 0.0) { r.n = -r.n; }
  }
  return r;
}

fn rtOccluded(o: vec3f, d: vec3f, tmax: f32, skipMask: u32) -> bool {
  return rtTrace(o, d, tmax, true, skipMask | RT_NOSHADOW).tri != RT_NONE;
}

// Sample a direction inside the sun's cone (angular radius \`rad\`) for soft shadows.
fn rtConeDir(L: vec3f, rad: f32, u: vec2f) -> vec3f {
  let t = normalize(cross(L, select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(L.y) > 0.9)));
  let b = cross(L, t);
  let r = sqrt(u.x) * rad; let ph = u.y * 6.2831853;
  return normalize(L + t * (r * cos(ph)) + b * (r * sin(ph)));
}
`,rt=`// Ray-traced / path-traced indirect lighting (compute, reduced resolution).
// Primary visibility comes from the rasterized G-buffer; from each visible surface we trace rays
// against the two-level BVH (rtcore.wgsl):
//   mode 1 (ray tracing):  1 reflection ray + 1 diffuse GI ray, one bounce, sun shadow ray at the hit,
//                          short temporal accumulation
//   mode 2 (path tracing): multi-bounce diffuse + glossy paths with next-event estimation to the sun,
//                          Russian roulette, long (progressive) accumulation that converges while the camera is still
// The output replaces the raster pipeline's IBL estimate the same way SSR/SSGI do (difference terms
// added back in ssfx.wgsl fsResolve).
@group(0) @binding(0) var<uniform> F: Frame;
@group(1) @binding(0) var<storage, read> rtNodes: array<vec4f>;
@group(1) @binding(1) var<storage, read> rtTris: array<vec4f>;
@group(1) @binding(2) var<storage, read> rtTlas: array<vec4f>;
@group(1) @binding(3) var texA: texture_2d_array<f32>;
@group(1) @binding(4) var matSamp: sampler;          // repeat U / clamp V (equirect env + material mip tail)
@group(1) @binding(5) var envTex: texture_2d<f32>;
@group(1) @binding(6) var depthTex: texture_depth_2d;
@group(1) @binding(7) var gbufTex: texture_2d<f32>;
@group(1) @binding(8) var albTex: texture_2d<f32>;
@group(1) @binding(9) var velTex: texture_2d<f32>;
@group(1) @binding(10) var prevRefl: texture_2d<f32>;   // rgba32float: rgb, a = view depth
@group(1) @binding(11) var prevGi: texture_2d<f32>;     // rgba32float: rgb, a = history length
@group(1) @binding(12) var outRefl: texture_storage_2d<rgba32float, write>;
@group(1) @binding(13) var outGi: texture_storage_2d<rgba32float, write>;
@group(1) @binding(14) var dispRefl: texture_storage_2d<rgba16float, write>;
@group(1) @binding(15) var dispGi: texture_storage_2d<rgba16float, write>;
struct RtParams { mode: u32, maxHist: f32, bounces: u32, frame: u32 };
@group(1) @binding(16) var<uniform> RP: RtParams;

fn envSample(d: vec3f, lod: f32) -> vec3f { return textureSampleLevel(envTex, matSamp, dirToEquirect(d), lod).rgb; }

// ---- random numbers (PCG per pixel + frame)
var<private> rngState: u32;
fn rnd() -> f32 { rngState = hashu(rngState); return f32(rngState >> 8u) / 16777216.0; }
fn rnd2() -> vec2f { return vec2f(rnd(), rnd()); }

fn basis(n: vec3f) -> mat3x3f {
  let t = normalize(cross(n, select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(n.y) > 0.9)));
  return mat3x3f(t, cross(n, t), n);
}
fn cosineDir(n: vec3f, u: vec2f) -> vec3f {
  let r = sqrt(u.x); let ph = u.y * 6.2831853;
  return normalize(basis(n) * vec3f(r * cos(ph), r * sin(ph), sqrt(max(1.0 - u.x, 0.0))));
}
// GGX visible-normal-ish lobe: perturb the mirror direction by a roughness-scaled cosine lobe
fn glossyDir(R: vec3f, n: vec3f, rough: f32, u: vec2f) -> vec3f {
  let a = rough * rough;
  var d = normalize(mix(R, cosineDir(R, u), clamp(a * 1.2, 0.0, 1.0)));
  if (dot(d, n) < 0.02) { d = normalize(d - n * (dot(d, n) - 0.02)); }
  return d;
}

fn skyRadiance(d: vec3f) -> vec3f {
  var dd = d;
  let ho = smoothstep(-0.15, 0.1, dd.y);
  dd.y = max(dd.y, 0.02);
  return envSample(dd, 1.5) * mix(0.12, 1.0, ho);
}

struct HitSurf { albedo: vec3f, emissive: vec3f, mirror: f32 };

fn srgbSeed(seed: u32) -> vec3f {
  return pow(vec3f(f32(seed & 255u), f32((seed >> 8u) & 255u), f32((seed >> 16u) & 255u)) / 255.0, vec3f(2.2));
}

// Average material response at a ray hit (mip-tail albedo of the material layer + per-id overrides).
fn hitSurface(h: RHit, P: vec3f) -> HitSurf {
  var s: HitSurf; s.emissive = vec3f(0.0); s.mirror = 0.0;
  var id = h.mat & 255u; let seed = h.mat >> 8u;
  if (h.color.w >= 0.0) { id = u32(h.color.w); }
  let night = F.sunDir.w;
  var layer = 11;
  switch id {
    case 0u, 14u, 28u, 45u, 47u, 50u: { layer = 0; }
    case 1u: { layer = 1; } case 2u: { layer = 2; } case 3u: { layer = 3; }
    case 4u: { layer = 4; } case 5u: { layer = 5; } case 6u: { layer = 6; } case 7u: { layer = 7; }
    case 8u, 29u: { layer = 8; } case 9u: { layer = 9; }
    case 10u, 26u, 27u, 44u, 46u, 49u, 51u, 53u: { layer = 10; }
    case 13u: { layer = 12; } case 18u: { layer = 13; }
    case 15u, 21u, 33u, 37u, 38u: { layer = 14; }
    case 34u: { layer = 15; } case 35u: { layer = 16; } case 36u: { layer = 17; }
    default: { layer = 11; }
  }
  s.albedo = textureSampleLevel(texA, matSamp, vec2f(0.5), layer, 9.0).rgb;
  let c = srgbSeed(seed);
  switch id {
    case 41u, 52u, 54u, 57u, 53u, 51u: { s.albedo = c; }
    case 44u: { s.albedo = c * 0.8; }
    case 42u: { s.albedo = c * 0.3; s.mirror = 0.25; s.emissive = vec3f(1.0, 0.78, 0.5) * night * 0.45; }
    case 43u: { s.albedo = c * 0.3; s.mirror = 0.2; s.emissive = vec3f(1.0, 0.85, 0.6) * (0.4 + 6.0 * night) * 0.6; }
    case 46u: { s.albedo = c; s.emissive = c * (0.15 + 7.0 * night) * 0.5; }
    case 47u: { s.albedo = c * 0.8; }
    case 45u, 50u: { s.albedo = mix(vec3f(dot(s.albedo, vec3f(0.3333))), s.albedo, 0.55) * 3.0; }
    case 4u, 5u, 6u: { s.emissive = vec3f(1.0, 0.78, 0.5) * night * 0.6; }
    case 11u: { s.albedo = vec3f(0.9); s.emissive = vec3f(1.0, 0.82, 0.55) * (40.0 * night + 0.5); }
    case 26u: { s.albedo = vec3f(0.08); s.emissive = vec3f(1.0, 0.7, 0.5) * (0.6 + 18.0 * night) * 0.3; }
    case 16u, 20u, 24u, 39u: { s.albedo = h.color.rgb; }
    case 21u: { s.albedo *= h.color.rgb * 1.4; }
    case 17u: { s.albedo = vec3f(0.02); s.mirror = 0.5; }
    case 18u: { s.albedo = vec3f(0.03); }
    case 19u: { s.albedo = vec3f(0.6); s.mirror = 0.6; }
    case 22u: { s.albedo = vec3f(0.9); s.emissive = vec3f(1.0, 0.95, 0.85) * (2.0 + 60.0 * night); }
    case 23u: { s.albedo = vec3f(0.4, 0.02, 0.02); s.emissive = vec3f(1.0, 0.03, 0.02) * (0.6 + 15.0 * night); }
    case 40u: { s.albedo = vec3f(0.0); s.emissive = h.color.rgb * 60.0; }
    case 25u: { s.albedo = vec3f(0.01, 0.03, 0.04); s.mirror = 0.9; }
    default: {}
  }
  s.albedo = clamp(s.albedo * mix(1.0, 0.55, F.params.x), vec3f(0.0), vec3f(0.95));
  return s;
}

// Closest hit including the sea plane (y = 0).
fn traceClosest(o: vec3f, d: vec3f, skip: u32) -> RHit {
  var h = rtTrace(o, d, 3000.0, false, skip);
  if (d.y < 0.0 && o.y > 0.0) {
    let tw = -o.y / d.y;
    if (tw < h.t) { h.t = tw; h.tri = 0u; h.inst = RT_NONE; h.n = vec3f(0.0, 1.0, 0.0); h.mat = 25u; h.color = vec4f(1.0, 1.0, 1.0, -1.0); }
  }
  return h;
}

// Direct light from the key light (sun or moon) at a hit, with a shadow ray.
fn sunNEE(P: vec3f, n: vec3f, albedo: vec3f) -> vec3f {
  let L = rtConeDir(F.sunDir.xyz, 0.01, rnd2());
  let nl = dot(n, L);
  if (nl <= 0.0) { return vec3f(0.0); }
  if (rtOccluded(P + n * 0.03, L, 2000.0, 0u)) { return vec3f(0.0); }
  return albedo / PI * F.sunColor.rgb * nl;
}

// Radiance arriving at o from direction d (path continues for \`bounces\` diffuse bounces).
fn radiance(oIn: vec3f, dIn: vec3f, bounces: u32, skip: u32) -> vec3f {
  var o = oIn; var d = dIn;
  var L = vec3f(0.0); var thr = vec3f(1.0);
  var sk = skip;
  for (var b = 0u; b <= bounces; b++) {
    let h = traceClosest(o, d, sk);
    sk = 0u;
    if (h.tri == RT_NONE) { L += thr * skyRadiance(d); break; }
    let P = o + d * h.t;
    let s = hitSurface(h, P);
    L += thr * s.emissive;
    if (h.mat == 25u) {
      // sea: Fresnel mirror + dark body colour, terminate
      let fres = 0.02 + 0.98 * pow(1.0 - max(-d.y, 0.0), 5.0);
      L += thr * (skyRadiance(reflect(d, h.n)) * fres + s.albedo * envSample(vec3f(0.0, 1.0, 0.0), 6.0));
      break;
    }
    L += thr * sunNEE(P, h.n, s.albedo);
    if (b == bounces) {
      // end of the path: one-sample-free estimate of the remaining bounces from the sky probe
      L += thr * s.albedo * envSample(h.n, F.params.w - 1.0) * 0.6;
      break;
    }
    // continue: mirror-like materials reflect, everything else bounces diffusely (cosine sampling: thr *= albedo)
    o = P + h.n * 0.02;
    if (rnd() < s.mirror) { d = reflect(d, h.n); }
    else { d = cosineDir(h.n, rnd2()); thr *= s.albedo; }
    // Russian roulette after the first bounce
    if (b >= 1u) {
      let p = clamp(max(thr.x, max(thr.y, thr.z)), 0.05, 0.95);
      if (rnd() > p) { break; }
      thr /= p;
    }
  }
  // clamp fireflies (emissive signs / lamps hit by rare paths)
  let l = luminance(L);
  return L * min(1.0, 40.0 / max(l, 1e-4));
}

fn worldPos(uv: vec2f, d: f32) -> vec3f {
  let p = F.invViewProj * vec4f(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0);
  return p.xyz / p.w;
}

// Bilinear history fetch that ignores taps whose stored depth disagrees with the reprojected surface.
struct Hist { refl: vec3f, gi: vec3f, n: f32 };
fn fetchHistory(puv: vec2f, expectZ: f32) -> Hist {
  var o: Hist; o.refl = vec3f(0.0); o.gi = vec3f(0.0); o.n = 0.0;
  let dims = vec2i(textureDimensions(prevGi));
  let fp = puv * vec2f(dims) - 0.5;
  let i0 = vec2i(floor(fp)); let f = fract(fp);
  var wsum = 0.0;
  for (var k = 0; k < 4; k++) {
    let off = vec2i(k & 1, k >> 1);
    let q = i0 + off;
    if (any(q < vec2i(0)) || any(q >= dims)) { continue; }
    let r = textureLoad(prevRefl, q, 0); let g = textureLoad(prevGi, q, 0);
    if (abs(r.a - expectZ) > expectZ * 0.04 + 0.05) { continue; }
    let w = select(1.0 - f.x, f.x, off.x == 1) * select(1.0 - f.y, f.y, off.y == 1);
    o.refl += r.rgb * w; o.gi += g.rgb * w; o.n += g.a * w; wsum += w;
  }
  if (wsum < 0.05) { o.n = 0.0; return o; }
  o.refl /= wsum; o.gi /= wsum; o.n = o.n / wsum * min(wsum * 1.5, 1.0);
  return o;
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let od = textureDimensions(outGi);
  if (gid.x >= od.x || gid.y >= od.y) { return; }
  let p = vec2i(gid.xy);
  let fd = vec2i(textureDimensions(depthTex));
  let scale = vec2i(max(fd / vec2i(od), vec2i(1)));
  // rotate through the full-resolution pixels covered by this cell
  let k = i32(RP.frame % u32(scale.x * scale.y));
  let fp = min(p * scale + vec2i(k % scale.x, k / scale.x), fd - 1);
  let uv = (vec2f(fp) + 0.5) / vec2f(fd);
  rngState = hashu(u32(p.x) * 1973u + u32(p.y) * 9277u + RP.frame * 26699u) | 1u;

  let d = textureLoad(depthTex, fp, 0);
  if (d <= 0.0) {
    textureStore(outRefl, p, vec4f(0.0)); textureStore(outGi, p, vec4f(0.0));
    textureStore(dispRefl, p, vec4f(0.0)); textureStore(dispGi, p, vec4f(0.0));
    return;
  }
  let gb = textureLoad(gbufTex, fp, 0);
  let alb = textureLoad(albTex, fp, 0);
  let N = octDecode(gb.xy);
  let rough = gb.z; let specW = gb.w;
  let P = worldPos(uv, d);
  let V = normalize(F.camPos.xyz - P);
  let dist = length(F.camPos.xyz - P);
  let origin = P + N * (0.02 + dist * 0.0015);
  // character proxies (ellipsoids) are only for shadows / later bounces: rays leaving the G-buffer skip them
  let skip = RT_PROXY;
  let pt = RP.mode == 2u;

  // ---------------- reflection (specular lobe)
  var refl = vec3f(0.0);
  if (specW > 0.01 && (pt || rough < 0.55)) {
    let R = reflect(-V, N);
    let dir = select(R, glossyDir(R, N, rough, rnd2()), pt || rough > 0.08);
    let Li = radiance(origin, dir, select(0u, RP.bounces, pt), skip);
    // what the raster pass already added from the sky probe for this lobe
    var Rd = R; let horizonOcc = smoothstep(-0.15, 0.1, Rd.y); Rd.y = max(Rd.y, 0.02);
    let env = envSample(Rd, rough * (F.params.w - 1.0)) * mix(0.12, 1.0, horizonOcc);
    refl = (Li - env) * specW;
  }
  // ---------------- diffuse indirect (true sky visibility = ray-traced AO + colour bleeding)
  var gi = vec3f(0.0);
  if (dot(alb.rgb, vec3f(1.0)) > 0.003) {
    let nrays = select(1u, 2u, pt);
    var acc = vec3f(0.0);
    for (var r = 0u; r < nrays; r++) {
      acc += radiance(origin, cosineDir(N, rnd2()), select(0u, RP.bounces, pt), skip);
    }
    acc /= f32(nrays);
    // the raster pass already added albedo * irradiance(sky probe) * sky visibility * ao: replace it
    let maxLod = F.params.w;
    var irr = envSample(N, maxLod - 1.0) * 0.9 + envSample(vec3f(0.0, 1.0, 0.0), maxLod - 1.0) * 0.1 * max(N.y, 0.0);
    irr += F.sunColor.rgb * max(F.sunDir.y, 0.0) * 0.22 / PI * (0.5 - 0.5 * N.y) * 0.6;
    let skyVis = mix(0.6, 1.0, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));
    gi = alb.rgb * (acc - irr * skyVis * alb.a);
  }

  // ---------------- temporal accumulation (reprojected with motion vectors, depth-validated)
  let vel = textureLoad(velTex, fp, 0).xy;
  let puv = uv - vel;
  let viewZ = (F.viewProjNJ * vec4f(P, 1.0)).w;
  let prevZ = (F.prevViewProj * vec4f(P, 1.0)).w;
  var n = 0.0; var hr = refl; var hg = gi;
  if (F.misc.x >= 1.0 && all(puv >= vec2f(0.0)) && all(puv <= vec2f(1.0))) {
    let h = fetchHistory(puv, prevZ);
    n = min(h.n, RP.maxHist - 1.0);
    if (n > 0.0) { hr = h.refl; hg = h.gi; }
  }
  n += 1.0;
  let a = 1.0 / n;
  let outR = mix(hr, refl, a); let outG = mix(hg, gi, a);
  textureStore(outRefl, p, vec4f(outR, viewZ));
  textureStore(outGi, p, vec4f(outG, n));
  textureStore(dispRefl, p, vec4f(outR, 1.0));
  textureStore(dispGi, p, vec4f(outG, 1.0));
}
`,ve=1024,pe=5,nt=1+ve*4+ve*pe;function st(u,e){const t=new Uint32Array(e.buffer,e.byteOffset,e.length),n=Math.min(u.length,ve);if(n===0)return t[0]=0,t[1]=0,1;const a=1+2*(2*n-1);t[0]=2*n-1,t[1]=a,t[2]=0,t[3]=0;const r=new Uint32Array(n);for(let i=0;i<n;i++)r[i]=i;const o=(i,s)=>u[i].box[s]+u[i].box[s+3];let l=0;const c=(i,s,f)=>{const h=(1+f*2)*4;let v=1/0,p=1/0,d=1/0,x=-1/0,w=-1/0,T=-1/0;for(let I=i;I<s;I++){const m=u[r[I]].box;v=Math.min(v,m[0]),p=Math.min(p,m[1]),d=Math.min(d,m[2]),x=Math.max(x,m[3]),w=Math.max(w,m[4]),T=Math.max(T,m[5])}if(e[h]=v,e[h+1]=p,e[h+2]=d,e[h+4]=x,e[h+5]=w,e[h+6]=T,s-i===1){t[h+3]=r[i],t[h+7]=1;return}const g=[x-v,w-p,T-d],y=g[0]>=g[1]&&g[0]>=g[2]?0:g[1]>=g[2]?1:2,G=Array.from(r.subarray(i,s)).sort((I,m)=>o(I,y)-o(m,y));r.set(G,i);const b=i+s>>1,k=l;l+=2,t[h+3]=k,t[h+7]=0,c(i,b,k),c(b,s,k+1)};l=1,c(0,n,0);for(let i=0;i<n;i++){const s=(a+i*pe)*4,f=u[i].inv;e[s]=f[0],e[s+1]=f[4],e[s+2]=f[8],e[s+3]=f[12],e[s+4]=f[1],e[s+5]=f[5],e[s+6]=f[9],e[s+7]=f[13],e[s+8]=f[2],e[s+9]=f[6],e[s+10]=f[10],e[s+11]=f[14],t[s+12]=u[i].root,t[s+13]=u[i].flags,t[s+14]=0,t[s+15]=0,e.set(u[i].color,s+16)}return a+n*pe}const N=13,B={PELVIS:0,CHEST:1,HEAD:2,LUA:3,LFA:4,RUA:5,RFA:6,LTH:7,LSH:8,LFT:9,RTH:10,RSH:11,RFT:12},it=[-1,0,1,1,3,1,5,0,7,8,0,10,11],we=[[0,.97,0],[0,1.16,0],[0,1.5,0],[-.19,1.43,0],[-.21,1.15,0],[.19,1.43,0],[.21,1.15,0],[-.095,.93,0],[-.1,.51,0],[-.1,.09,0],[.095,.93,0],[.1,.51,0],[.1,.09,0]],O={SKIN:33,SHIRT:34,PANTS:35,SHOES:36,HAIR:37,FACE:38},U=u=>({j:[u],w:[1]}),q=(u,e,t)=>({j:[u,e],w:[1-t,t]}),j=(u,e,t)=>{const n=Math.min(1,Math.max(0,(t-u)/(e-u)));return n*n*(3-2*n)};class at{buf=[];verts=[];idx=[];tube(e,t,n,a){const r=this.verts.length;for(let c=0;c<e.length;c++){const i=e[c],s=e[Math.max(0,c-1)].c,f=e[Math.min(e.length-1,c+1)].c;let h=i.axis??ee([f[0]-s[0],f[1]-s[1],f[2]-s[2]]);Ne(h)<1e-6&&(h=[0,1,0]);const v=ee(Math.abs(h[0])<.9?Q(h,[1,0,0]):Q(h,[0,0,1])),p=Q(h,v);for(let d=0;d<=t;d++){const x=d/t*Math.PI*2,w=Math.cos(x),T=Math.sin(x),g=[p[0]*w*i.rx+v[0]*T*i.rz,p[1]*w*i.rx+v[1]*T*i.rz,p[2]*w*i.rx+v[2]*T*i.rz],y=ee([p[0]*w/i.rx+v[0]*T/i.rz,p[1]*w/i.rx+v[1]*T/i.rz,p[2]*w/i.rx+v[2]*T/i.rz]);this.verts.push({p:[i.c[0]+g[0],i.c[1]+g[1],i.c[2]+g[2]],n:y,uv:[d/t*2,i.c[1]*4],mat:i.mat,inf:i.inf})}}const o=t+1;for(let c=0;c+1<e.length;c++)for(let i=0;i<t;i++){const s=r+c*o+i,f=s+o;this.tri(s,f,s+1),this.tri(s+1,f,f+1)}const l=(c,i)=>{const s=e[c],f=this.verts.length;this.verts.push({p:s.c,n:[0,i,0],uv:[0,0],mat:s.mat,inf:s.inf});for(let h=0;h<t;h++)this.tri(f,r+c*o+h,r+c*o+h+1)};n&&l(0,-1),a&&l(e.length-1,1)}ellipsoid(e,t,n,a,r=14,o=10,l=-1){const c=this.verts.length;for(let i=0;i<=o;i++){const s=-Math.PI/2+i/o*Math.PI,f=Math.sin(s),h=l>-1?Math.max(f,l):f,v=Math.sqrt(Math.max(0,1-h*h));for(let p=0;p<=r;p++){const d=p/r*Math.PI*2,x=[Math.cos(d)*v,h,Math.sin(d)*v];this.verts.push({p:[e[0]+x[0]*t[0],e[1]+x[1]*t[1],e[2]+x[2]*t[2]],n:ee([x[0]/t[0],x[1]/t[1],x[2]/t[2]]),uv:[p/r,i/o],mat:a,inf:n})}}for(let i=0;i<o;i++)for(let s=0;s<r;s++){const f=c+i*(r+1)+s,h=f+r+1;this.tri(f,h,f+1),this.tri(f+1,h,h+1)}}tri(e,t,n){const a=c=>this.verts[c].p,r=c=>this.verts[c].n,o=Q(ke(a(t),a(e)),ke(a(n),a(e))),l=[r(e)[0]+r(t)[0]+r(n)[0],r(e)[1]+r(t)[1]+r(n)[1],r(e)[2]+r(t)[2]+r(n)[2]];lt(o,l)>=0?this.idx.push(e,t,n):this.idx.push(e,n,t)}pack(){const e=new ArrayBuffer(this.verts.length*44),t=new DataView(e);return this.verts.forEach((n,a)=>{const r=a*44;[...n.p,...n.n,...n.uv].forEach((i,s)=>t.setFloat32(r+s*4,i,!0)),t.setUint32(r+32,n.mat,!0);const o=n.w??n.inf.w,l=o.reduce((i,s)=>i+s,0)||1,c=o.map(i=>Math.round(i/l*255));c[0]+=255-c.reduce((i,s)=>i+s,0);for(let i=0;i<4;i++)t.setUint8(r+36+i,n.inf.j[i]??0),t.setUint8(r+40+i,i<c.length?c[i]:0)}),{vb:e,ib:new Uint32Array(this.idx)}}}function ot(){const u=new at,e=14,t=[[.84,.13,.09],[.9,.165,.105],[.98,.17,.11],[1.06,.152,.1],[1.14,.15,.1],[1.24,.17,.11],[1.34,.185,.112],[1.42,.18,.1],[1.47,.12,.08],[1.5,.055,.05],[1.56,.048,.048],[1.6,.045,.045]];u.tube(t.map(([n,a,r])=>({c:[0,n,n>1.3?.005:0],rx:a,rz:r,inf:n<1?U(B.PELVIS):n<1.2?q(B.PELVIS,B.CHEST,j(1,1.2,n)):n<1.5?U(B.CHEST):q(B.CHEST,B.HEAD,j(1.5,1.58,n)),mat:n<1.03?O.PANTS:n<1.49?O.SHIRT:O.SKIN})),e,!0,!1),u.ellipsoid([0,1.675,-.005],[.083,.112,.098],U(B.HEAD),O.FACE,24,18),u.ellipsoid([0,1.705,.008],[.088,.09,.104],U(B.HEAD),O.HAIR,16,8,-.05),u.ellipsoid([0,1.665,-.1],[.014,.025,.02],U(B.HEAD),O.SKIN,6,4);for(const n of[-1,1]){const a=n<0,r=a?B.LUA:B.RUA,o=a?B.LFA:B.RFA,l=a?B.LTH:B.RTH,c=a?B.LSH:B.RSH,i=a?B.LFT:B.RFT,s=[[1.5,.03,.032],[1.485,.05,.053],[1.47,.058,.06],[1.4,.052,.054],[1.3,.045,.047],[1.2,.04,.042],[1.15,.037,.038],[1.06,.038,.04],[.97,.03,.033],[.9,.027,.03]];u.tube(s.map(([h,v,p])=>({c:[n*(.19+(1.47-h)*.035),h,0],rx:v,rz:p,inf:h>1.4?q(B.CHEST,r,j(1.47,1.4,h)):h>1.19?U(r):h>1.11?q(r,o,j(1.19,1.11,h)):U(o),mat:h>1.27?O.SHIRT:O.SKIN})),10,!0,!1),u.ellipsoid([n*.222,.85,-.005],[.026,.062,.042],U(o),O.SKIN,8,6);const f=[[.95,.088,.095],[.86,.083,.088],[.72,.07,.075],[.58,.056,.06],[.51,.052,.055],[.44,.055,.06],[.3,.05,.055],[.16,.038,.042],[.1,.036,.04]];u.tube(f.map(([h,v,p])=>({c:[n*.097,h,h<.5&&h>.25?.008:0],rx:v,rz:p,inf:h>.88?q(B.PELVIS,l,j(.97,.88,h)):h>.56?U(l):h>.46?q(l,c,j(.56,.46,h)):h>.12?U(c):q(c,i,j(.12,.08,h)),mat:O.PANTS})),12,!1,!0),u.ellipsoid([n*.1,.055,-.045],[.048,.058,.125],U(i),O.SHOES,10,6,-.6)}return u}const ct={sub:(u,e)=>[u[0]-e[0],u[1]-e[1],u[2]-e[2]]};function ke(u,e){return ct.sub(u,e)}function lt(u,e){return u[0]*e[0]+u[1]*e[1]+u[2]*e[2]}function Q(u,e){return[u[1]*e[2]-u[2]*e[1],u[2]*e[0]-u[0]*e[2],u[0]*e[1]-u[1]*e[0]]}function Ne(u){return Math.hypot(u[0],u[1],u[2])}function ee(u){const e=Ne(u)||1;return[u[0]/e,u[1]/e,u[2]/e]}function ut(u,e,t,n,a){const r=Array.from({length:N},()=>[0,0,0]),o=n===2?0:Math.min(1,t/2.5),l=Math.min(1,Math.max(0,(t-3)/3)),c=Math.sin(e),i=Math.cos(e),s=n===2?0:Math.abs(i)*.035*o*(1+l)-.02*o,f=.05*o+.2*l;r[B.PELVIS]=[-c*.12*o,0,i*.04*o],r[B.CHEST]=[c*.2*o,-f,-i*.03*o],r[B.HEAD]=[-c*.08*o,f*.6,0];for(const p of[-1,1]){const d=p<0,x=p*c*(.5*o+.45*l);r[d?B.LUA:B.RUA]=[0,x,p*(.07+.05*l)],r[d?B.LFA:B.RFA]=[0,.15+.25*o+1*l,0];const w=d?e:e+Math.PI,g=Math.sin(w)*(.45*o+.4*l),y=-Math.max(0,Math.sin(w+1.3))*(.85*o+.8*l)-.03;r[d?B.LTH:B.RTH]=[0,g,0],r[d?B.LSH:B.RSH]=[0,y,0],r[d?B.LFT:B.RFT]=[0,-y*.45-g*.35,0]}n===3&&(r[B.LTH][1]=.35,r[B.RTH][1]=.1,r[B.LSH][1]=-.6,r[B.RSH][1]=-.4),n===2&&(r[B.LUA]=[0,.2,-1.1],r[B.RUA]=[0,-.1,1.2],r[B.LSH][1]=-.3);const h=[],v=new Float32Array(16);for(let p=0;p<N;p++){const d=it[p],x=we[p],w=d>=0?we[d]:[0,0,0],T=[x[0]-w[0],x[1]-w[1]+(p===0?s:0),x[2]-w[2]],g=S.trs(T,r[p][0],r[p][1],r[p][2],[1,1,1],v);h[p]=S.mul(d>=0?h[d]:u,g);const y=S.trs([-x[0],-x[1],-x[2]],0,0,0);a.set(S.mul(h[p],y),p*16)}}const L={CAR:0,WHEEL:1,SBOX:2,SPHERE:3,WATER:4,HELI:5,ROTOR:6,TROTOR:7,GUN:8},ft=9,ae=18,C=512,Se=2048,ht=256,dt=128,oe=7,W=4096,X=44,Te=96,Pe=204,Be=16,Y=6,z="rgba16float",vt=["Raster","Ray tracing","Path tracing"],pt=1,mt=2;class gt{device;gpu;worldVB;worldIB;chunks=[];dynVB;dynIB;meshes=[];frameUB;frameData=new Float32Array(Pe);instBuf;instData=new Float32Array(W*X);shadowUB;boneBuf;boneData=new Float32Array(Te*N*2*16);skinVB;skinIB;skinCount=0;skinFirst=0;skinN=0;skinPending=[];prevBones=new Map;lampBuf;lampGrid;spotBuf;texA;texB;shadowTex;envTex;hmapTex;depth;hdr;vel;aoRaw;ao;hist=[];bloom;gbuf;alb;ssr;ssgi;hdr2;ssfxBGL;tempBGL;ssrHist=[];giHist=[];ssHistIdx=0;lumBuf;lumPending=!1;frameBGL;sceneBGL;shadowBGL;texBGL;postBGL;pipes={};frameBG;sceneBG;shadowBG;linSamp;matSamp;envSamp;cmpSamp;width=0;height=0;renderScale=1;frameIndex=0;histIdx=0;prevVP=S.create();prevModels=new Map;batches=[];instCount=1;pending=[];exposure=1;avgLum=.2;aoEnabled=!0;bloomEnabled=!0;taaEnabled=!0;ssfxEnabled=!0;ssfxMode=1;stats={draws:0,tris:0};gpuMs=0;gpuPending=!1;envFrame=0;rtMode=0;rtStatus="";rtScale=.5;ptBounces=3;rtResolveMode=1;rtSamples=0;rtReady=!1;rtBuilding=!1;worldGeom=null;dynGeoms=[];meshRoots=[];meshBounds=[];boneCentroids=null;rtNodesBuf;rtTrisBuf;rtTlasBuf;rtTlasData=new Float32Array(nt*4);rtBGL;rtPipe;rtParamsUB;rtHist=[];rtDisp=[];rtHistIdx=0;rtSkinFirst=W;get rtActive(){return this.rtMode>0&&this.rtReady}constructor(e){this.gpu=e;const t=this.device=e.device;this.frameUB=t.createBuffer({size:Pe*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.instBuf=t.createBuffer({size:W*X*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.shadowUB=t.createBuffer({size:256*3,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.boneBuf=t.createBuffer({size:this.boneData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.spotBuf=t.createBuffer({size:Be*32,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lumBuf=t.createBuffer({size:256*64,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),this.shadowTex=t.createTexture({size:[Se,Se,3],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.envTex=t.createTexture({size:[ht,dt],format:z,mipLevelCount:oe,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.linSamp=t.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.matSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",maxAnisotropy:8}),this.envSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"clamp-to-edge"}),this.cmpSamp=t.createSampler({compare:"less",magFilter:"linear",minFilter:"linear"});const n=S.create();this.instData.set(n,0),this.instData.set(n,16),this.instData.set([1,1,1,-1,0,0,0,0,0,0,0,0],32);const a=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r=GPUShaderStage.FRAGMENT;this.frameBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:a|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:a,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.shadowBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",hasDynamicOffset:!0}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.sceneBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{viewDimension:"2d-array"}},{binding:1,visibility:r,texture:{viewDimension:"2d-array"}},{binding:2,visibility:r,sampler:{}},{binding:3,visibility:r,texture:{sampleType:"depth",viewDimension:"2d-array"}},{binding:4,visibility:r,sampler:{type:"comparison"}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,sampler:{}},{binding:7,visibility:r,texture:{}},{binding:8,visibility:r,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:r,buffer:{type:"read-only-storage"}},{binding:10,visibility:r,texture:{sampleType:"uint"}},{binding:11,visibility:r,buffer:{type:"read-only-storage"}},{binding:12,visibility:r,buffer:{type:"read-only-storage"}},{binding:13,visibility:r,buffer:{type:"read-only-storage"}},{binding:14,visibility:r,buffer:{type:"read-only-storage"}}]});const o=GPUShaderStage.COMPUTE;this.rtBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:o,buffer:{type:"read-only-storage"}},{binding:1,visibility:o,buffer:{type:"read-only-storage"}},{binding:2,visibility:o,buffer:{type:"read-only-storage"}},{binding:3,visibility:o,texture:{viewDimension:"2d-array"}},{binding:4,visibility:o,sampler:{}},{binding:5,visibility:o,texture:{}},{binding:6,visibility:o,texture:{sampleType:"depth"}},{binding:7,visibility:o,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:o,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:o,texture:{sampleType:"unfilterable-float"}},{binding:10,visibility:o,texture:{sampleType:"unfilterable-float"}},{binding:11,visibility:o,texture:{sampleType:"unfilterable-float"}},{binding:12,visibility:o,storageTexture:{access:"write-only",format:"rgba32float"}},{binding:13,visibility:o,storageTexture:{access:"write-only",format:"rgba32float"}},{binding:14,visibility:o,storageTexture:{access:"write-only",format:"rgba16float"}},{binding:15,visibility:o,storageTexture:{access:"write-only",format:"rgba16float"}},{binding:16,visibility:o,buffer:{type:"uniform"}}]}),this.rtParamsUB=t.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.rtNodesBuf=t.createBuffer({size:32,usage:l}),t.queue.writeBuffer(this.rtNodesBuf,0,new Float32Array([1e30,1e30,1e30,0,-1e30,-1e30,-1e30,0])),this.rtTrisBuf=t.createBuffer({size:48,usage:l}),this.rtTlasBuf=t.createBuffer({size:this.rtTlasData.byteLength,usage:l}),this.texBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,sampler:{}}]}),this.postBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}}]}),this.ssfxBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,sampler:{}}]}),this.tempBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:r,texture:{}},{binding:1,visibility:r,texture:{}},{binding:2,visibility:r,texture:{}},{binding:3,visibility:r,texture:{sampleType:"depth"}},{binding:4,visibility:r,sampler:{}},{binding:5,visibility:r,texture:{}},{binding:6,visibility:r,texture:{}}]}),this.buildDynamicMeshes(),this.createPipelines()}module(e,t){const n=this.device.createShaderModule({code:be+`
`+e,label:t});return n.getCompilationInfo().then(a=>{for(const r of a.messages)r.type==="error"&&console.error(`[${t}] ${r.lineNum}:${r.linePos} ${r.message}`)}),n}createPipelines(){const e=this.device,t=this.module(Ze+`
`+ye,"scene"),n=this.module(Je,"sky"),a=this.module(Qe,"post"),r=[{arrayStride:36,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"}]}],o=(...v)=>e.createPipelineLayout({bindGroupLayouts:v}),l=o(this.frameBGL,this.sceneBGL);this.pipes.shadow=e.createRenderPipeline({layout:o(this.shadowBGL),vertex:{module:t,entryPoint:"vsShadow",buffers:r},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.prepass=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:r},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.prepassNoCull=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:r},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}});const c=v=>({layout:l,vertex:{module:t,entryPoint:"vsMain",buffers:r},fragment:{module:t,entryPoint:"fsMain",targets:[{format:z},{format:"rg16float"},{format:z},{format:"rgba8unorm"}]},primitive:{cullMode:v},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater-equal"}});this.pipes.main=e.createRenderPipeline(c("back"));const i=[{arrayStride:44,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"},{shaderLocation:4,offset:36,format:"uint8x4"},{shaderLocation:5,offset:40,format:"unorm8x4"}]}];this.pipes.skinMain=e.createRenderPipeline({...c("back"),vertex:{module:t,entryPoint:"vsSkinMain",buffers:i}}),this.pipes.skinDepth=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:t,entryPoint:"vsSkinDepth",buffers:i},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.skinShadow=e.createRenderPipeline({layout:o(this.shadowBGL),vertex:{module:t,entryPoint:"vsSkinShadow",buffers:i},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.mainNoCull=e.createRenderPipeline(c("none")),this.pipes.sky=e.createRenderPipeline({layout:o(this.frameBGL,this.texBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsSky",targets:[{format:z},{format:"rg16float"},{format:z},{format:"rgba8unorm"}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"equal"}}),this.pipes.lut=e.createRenderPipeline({layout:o(this.frameBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsLut",targets:[{format:z}]}}),this.pipes.envDown=e.createRenderPipeline({layout:o(this.frameBGL,this.texBGL),vertex:{module:n,entryPoint:"vsFull"},fragment:{module:n,entryPoint:"fsEnvDown",targets:[{format:z}]}});const s=(v,p,d)=>e.createRenderPipeline({layout:o(this.frameBGL,this.postBGL),vertex:{module:a,entryPoint:"vsFull"},fragment:{module:a,entryPoint:v,targets:[{format:p,blend:d}]}});this.pipes.ssao=s("fsSSAO","r8unorm"),this.pipes.blurAO=s("fsBlurAO","r8unorm"),this.pipes.taa=s("fsTAA",z),this.pipes.bloomDown=s("fsBloomDown",z),this.pipes.bloomUp=s("fsBloomUp",z,{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}),this.pipes.composite=s("fsComposite",this.gpu.format);const f=this.module(tt,"ssfx");this.pipes.ssfx=e.createRenderPipeline({layout:o(this.frameBGL,this.ssfxBGL),vertex:{module:f,entryPoint:"vsFull"},fragment:{module:f,entryPoint:"fsSsfx",targets:[{format:z},{format:z}]}}),this.pipes.ssTemporal=e.createRenderPipeline({layout:o(this.frameBGL,this.tempBGL),vertex:{module:f,entryPoint:"vsFull"},fragment:{module:f,entryPoint:"fsTemporal",targets:[{format:z},{format:z}]}});const h=this.module(rt+`
`+ye,"rt");this.rtPipe=e.createComputePipeline({layout:o(this.frameBGL,this.rtBGL),compute:{module:h,entryPoint:"main"}}),this.pipes.resolve=e.createRenderPipeline({layout:o(this.frameBGL,this.postBGL),vertex:{module:f,entryPoint:"vsFull"},fragment:{module:f,entryPoint:"fsResolve",targets:[{format:z}]}})}buildDynamicMeshes(){const e=[];e[L.CAR]=Ce(),e[L.WHEEL]=_e(),e[L.SBOX]=xe(.45,12,8),e[L.SPHERE]=xe(1,14,10),e[L.WATER]=He(),e[L.HELI]=$e(),e[L.ROTOR]=Ye(),e[L.TROTOR]=We(),e[L.GUN]=Xe();let t=0,n=0;for(const h of e)t+=h.v.length,n+=h.i.length;const a=new Float32Array(t),r=new Uint32Array(n);let o=0,l=0;for(let h=0;h<ft;h++){const v=e[h];a.set(v.v,o),r.set(v.i,l),this.meshes[h]={first:l,count:v.i.length,base:o/9},this.dynGeoms[h]=h===L.WATER?{verts:new Float32Array(0),idx:new Uint32Array(0)}:{verts:new Float32Array(v.v),idx:new Uint32Array(v.i)},o+=v.v.length,l+=v.i.length}this.dynVB=this.device.createBuffer({size:a.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.dynIB=this.device.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.dynVB,0,a),this.device.queue.writeBuffer(this.dynIB,0,r);const c=ot().pack();this.skinVB=this.device.createBuffer({size:c.vb.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.skinIB=this.device.createBuffer({size:c.ib.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.skinVB,0,c.vb),this.device.queue.writeBuffer(this.skinIB,0,c.ib),this.skinCount=c.ib.length;const i=new Uint32Array(c.vb),s=new Float32Array(c.vb),f=new Float64Array(N*4);for(let h=0;h+11<=i.length;h+=11){const v=i[h+9],p=i[h+10];let d=0,x=-1;for(let w=0;w<4;w++){const T=p>>>8*w&255;T>x&&(x=T,d=v>>>8*w&255)}d>=N||(f[d*4]+=s[h],f[d*4+1]+=s[h+1],f[d*4+2]+=s[h+2],f[d*4+3]++)}this.boneCentroids=new Float32Array(N*4);for(let h=0;h<N;h++){const v=f[h*4+3];v>0&&this.boneCentroids.set([f[h*4]/v,f[h*4+1]/v,f[h*4+2]/v,1],h*4)}}setRenderMode(e){this.rtMode=e,this.rtSamples=0,e>0&&!this.rtReady&&!this.rtBuilding&&this.buildBvh()}buildBvh(){if(!this.worldGeom){this.rtStatus="world not loaded";return}this.rtBuilding=!0,this.rtStatus="building BVH…";const e=new Worker(new URL(""+new URL("bvhWorker-BkZ09QbR.js",import.meta.url).href,import.meta.url),{type:"module"}),t=[{...this.worldGeom,stride:9},...this.dynGeoms.map(n=>({...n,stride:9}))];e.onmessage=n=>{e.terminate();const a=n.data,r=this.device,o=r.limits.maxStorageBufferBindingSize;if(a.nodes.byteLength>o||a.tris.byteLength>o){this.rtBuilding=!1,this.rtStatus=`BVH too large for this GPU (${(a.tris.byteLength/1048576).toFixed(0)} MB > ${(o/1048576).toFixed(0)} MB)`;return}this.rtNodesBuf.destroy(),this.rtTrisBuf.destroy();const l=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.rtNodesBuf=r.createBuffer({size:a.nodes.byteLength,usage:l}),this.rtTrisBuf=r.createBuffer({size:a.tris.byteLength,usage:l}),r.queue.writeBuffer(this.rtNodesBuf,0,a.nodes),r.queue.writeBuffer(this.rtTrisBuf,0,a.tris),this.meshRoots=a.roots.slice(1),this.meshBounds=a.bounds.slice(1),this.rtReady=!0,this.rtBuilding=!1,this.rtStatus=`BVH ${(a.triCount/1e3).toFixed(0)}k tris, ${(a.nodeCount/1e3).toFixed(0)}k nodes, ${((a.nodes.byteLength+a.tris.byteLength)/1048576).toFixed(0)} MB, built in ${a.ms.toFixed(0)} ms`,this.worldGeom=null,this.width>0&&this.makeSceneBG(),this.rtSamples=0},e.onerror=n=>{this.rtBuilding=!1,this.rtStatus=`BVH build failed: ${n.message}`,e.terminate()},e.postMessage({geoms:t})}updateTlas(e,t){const n=[],a=(c,i)=>{const s=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let f=0;f<8;f++){const h=c[f&1?3:0],v=c[f&2?4:1],p=c[f&4?5:2];for(let d=0;d<3;d++){const x=i[d]*h+i[4+d]*v+i[8+d]*p+i[12+d];x<s[d]&&(s[d]=x),x>s[d+3]&&(s[d+3]=x)}}return s};for(const c of e){if(c.mesh===L.WATER||n.length>=1023)continue;const i=this.meshBounds[c.mesh];if(!i)continue;const s=a(i,c.model);!(s[3]-s[0]<1e4)||s[3]-s[0]<1e-4||n.push({inv:S.invert(c.model),box:s,root:this.meshRoots[c.mesh],flags:c.color[3]===40?mt:0,color:[c.color[0],c.color[1],c.color[2],c.color[3]??-1]})}const r=this.meshBounds[L.SPHERE],o=this.boneCentroids;if(r&&o)for(const c of t){if(n.length>=1023)break;let i=1/0,s=1/0,f=1/0,h=-1/0,v=-1/0,p=-1/0;for(let m=0;m<N;m++){if(o[m*4+3]===0)continue;const P=m*16,R=o[m*4],E=o[m*4+1],V=o[m*4+2],D=c[P]*R+c[P+4]*E+c[P+8]*V+c[P+12],me=c[P+1]*R+c[P+5]*E+c[P+9]*V+c[P+13],ge=c[P+2]*R+c[P+6]*E+c[P+10]*V+c[P+14];i=Math.min(i,D),s=Math.min(s,me),f=Math.min(f,ge),h=Math.max(h,D),v=Math.max(v,me),p=Math.max(p,ge)}if(!(h>i))continue;const d=.1,x=(h-i)/2+d,w=(v-s)/2+d,T=(p-f)/2+d,g=[(r[3]-r[0])/2,(r[4]-r[1])/2,(r[5]-r[2])/2],y=[(r[3]+r[0])/2,(r[4]+r[1])/2,(r[5]+r[2])/2],G=x/g[0],b=w/g[1],k=T/g[2],I=new Float32Array([G,0,0,0,0,b,0,0,0,0,k,0,(i+h)/2-y[0]*G,(s+v)/2-y[1]*b,(f+p)/2-y[2]*k,1]);n.push({inv:S.invert(I),box:[i-d,s-d,f-d,h+d,v+d,p+d],root:this.meshRoots[L.SPHERE],flags:pt,color:[.3,.3,.3,24]})}const l=st(n,this.rtTlasData);this.device.queue.writeBuffer(this.rtTlasBuf,0,this.rtTlasData,0,l*4)}async generateTextures(){const e=this.device,t=Math.log2(C)+1,n=()=>e.createTexture({size:[C,C,ae],format:"rgba8unorm",mipLevelCount:t,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});this.texA=n(),this.texB=n();const a=e.createShaderModule({code:be+`
`+et,label:"texgen"});a.getCompilationInfo().then(p=>{for(const d of p.messages)d.type==="error"&&console.error(`[texgen] ${d.lineNum}: ${d.message}`)});const r=e.createComputePipeline({layout:"auto",compute:{module:a,entryPoint:"main"}}),o=["Asphalt026C","PavingStones130","Grass004","Ground093C","Concrete034","Bricks076C","Bark014","Gravel023","Metal032","Fabric061","Fabric003","Leather026"],l=e.createTexture({size:[C,C,o.length*3],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});let c=1;try{await Promise.all(o.flatMap((p,d)=>["c","n","r"].map(async(x,w)=>{const T=await fetch(`./textures/${p}_${x}.jpg`);if(!T.ok)throw new Error(`${p}_${x}`);const g=await createImageBitmap(await T.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"});e.queue.copyExternalImageToTexture({source:g},{texture:l,origin:[0,0,d*3+w]},[C,C])})))}catch(p){console.warn("[textures] photo set unavailable, using procedural only",p),c=0}const i=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(i,0,new Float32Array([c,0,0,0]));const s=e.createComputePipeline({layout:"auto",compute:{module:a,entryPoint:"mip"}}),f=e.createCommandEncoder(),h=(p,d)=>p.createView({dimension:"2d-array",baseMipLevel:d,mipLevelCount:1});let v=f.beginComputePass();v.setPipeline(r),v.setBindGroup(0,e.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:h(this.texA,0)},{binding:1,resource:h(this.texB,0)},{binding:2,resource:l.createView({dimension:"2d-array"})},{binding:3,resource:{buffer:i}}]})),v.dispatchWorkgroups(C/8,C/8,ae),v.end();for(const p of[this.texA,this.texB])for(let d=1;d<t;d++){const x=Math.max(1,C>>d);v=f.beginComputePass(),v.setPipeline(s),v.setBindGroup(0,e.createBindGroup({layout:s.getBindGroupLayout(0),entries:[{binding:0,resource:h(p,d-1)},{binding:1,resource:h(p,d)}]})),v.dispatchWorkgroups(Math.ceil(x/8),Math.ceil(x/8),ae),v.end()}e.queue.submit([f.finish()]),await e.queue.onSubmittedWorkDone()}setWorld(e){const t=this.device;this.worldGeom={verts:e.verts,idx:e.idx},this.worldVB=t.createBuffer({size:e.verts.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.worldIB=t.createBuffer({size:e.idx.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.worldVB,0,e.verts),t.queue.writeBuffer(this.worldIB,0,e.idx),this.chunks=[];for(let r=0;r<e.chunks.length;r+=8)this.chunks.push({first:e.chunks[r],count:e.chunks[r+1]});this.hmapTex=t.createTexture({size:[256,256],format:"r32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.hmapTex},e.hmap,{bytesPerRow:256*4},[256,256]);const n=e.lamps.length/4;this.lampBuf=t.createBuffer({size:Math.max(16,e.lamps.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.lampBuf,0,e.lamps);const a=new Uint32Array(40*40*4).fill(4294967295);for(let r=0;r<40;r++)for(let o=0;o<40;o++){const l=-200+o*10+5,c=-200+r*10+5,i=[];for(let s=0;s<n;s++){const f=e.lamps[s*4]-l,h=e.lamps[s*4+2]-c,v=f*f+h*h;v<22*22&&i.push([v,s])}i.sort((s,f)=>s[0]-f[0]);for(let s=0;s<Math.min(4,i.length);s++)a[(r*40+o)*4+s]=i[s][1]}this.lampGrid=t.createTexture({size:[40,40],format:"rgba32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.lampGrid},a,{bytesPerRow:40*16},[40,40]),this.frameBG=t.createBindGroup({layout:this.frameBGL,entries:[{binding:0,resource:{buffer:this.frameUB}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]}),this.shadowBG=t.createBindGroup({layout:this.shadowBGL,entries:[{binding:0,resource:{buffer:this.shadowUB,size:64}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]})}resize(e,t,n){const a=this.gpu.canvas,r=Math.max(1,Math.floor(e*Math.min(n,1.5))),o=Math.max(1,Math.floor(t*Math.min(n,1.5))),l=Math.max(64,Math.floor(r*this.renderScale)),c=Math.max(64,Math.floor(o*this.renderScale));if((a.width!==r||a.height!==o)&&(a.width=r,a.height=o),l===this.width&&c===this.height)return;this.width=l,this.height=c;const i=this.device;for(const x of[this.depth,this.hdr,this.vel,this.aoRaw,this.ao,this.bloom,this.gbuf,this.alb,this.ssr,this.ssgi,this.hdr2,...this.hist,...this.ssrHist,...this.giHist])x?.destroy();const s=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.depth=i.createTexture({size:[l,c],format:"depth32float",usage:s}),this.hdr=i.createTexture({size:[l,c],format:z,usage:s}),this.vel=i.createTexture({size:[l,c],format:"rg16float",usage:s});const f=Math.max(1,l>>1),h=Math.max(1,c>>1);this.aoRaw=i.createTexture({size:[f,h],format:"r8unorm",usage:s}),this.ao=i.createTexture({size:[f,h],format:"r8unorm",usage:s}),this.hist=[0,1].map(()=>i.createTexture({size:[l,c],format:z,usage:s})),this.gbuf=i.createTexture({size:[l,c],format:z,usage:s}),this.alb=i.createTexture({size:[l,c],format:"rgba8unorm",usage:s|GPUTextureUsage.COPY_SRC}),this.hdr2=i.createTexture({size:[l,c],format:z,usage:s}),this.ssr=i.createTexture({size:[l,c],format:z,usage:s}),this.ssgi=i.createTexture({size:[l,c],format:z,usage:s}),this.ssrHist=[0,1].map(()=>i.createTexture({size:[l,c],format:z,usage:s})),this.giHist=[0,1].map(()=>i.createTexture({size:[l,c],format:z,usage:s})),this.bloom=i.createTexture({size:[f,h],format:z,mipLevelCount:Y,usage:s|GPUTextureUsage.COPY_SRC});for(const x of[...this.rtHist,...this.rtDisp])x.destroy();const v=Math.max(1,Math.round(l*this.rtScale)),p=Math.max(1,Math.round(c*this.rtScale)),d=GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC;this.rtHist=[0,1,2,3].map(()=>i.createTexture({size:[v,p],format:"rgba32float",usage:d})),this.rtDisp=[0,1].map(()=>i.createTexture({size:[v,p],format:z,usage:d})),this.rtSamples=0,this.frameIndex=0,this.makeSceneBG()}makeSceneBG(){const e=this.device;this.sceneBG=e.createBindGroup({layout:this.sceneBGL,entries:[{binding:0,resource:this.texA.createView({dimension:"2d-array"})},{binding:1,resource:this.texB.createView({dimension:"2d-array"})},{binding:2,resource:this.matSamp},{binding:3,resource:this.shadowTex.createView({dimension:"2d-array"})},{binding:4,resource:this.cmpSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp},{binding:7,resource:this.ao.createView()},{binding:8,resource:this.hmapTex.createView()},{binding:9,resource:{buffer:this.lampBuf}},{binding:10,resource:this.lampGrid.createView()},{binding:11,resource:{buffer:this.spotBuf}},{binding:12,resource:{buffer:this.rtNodesBuf}},{binding:13,resource:{buffer:this.rtTrisBuf}},{binding:14,resource:{buffer:this.rtTlasBuf}}]})}add(e,t,n,a,r=[1,0,0,0]){this.pending.push({mesh:e,key:t,model:n,color:a,extra:r})}addSkinned(e,t,n,a,r,o){this.skinPending.length<Te&&this.skinPending.push({key:e,mats:t.slice(),shirt:n,skin:a,pants:r,hair:o})}flushInstances(){this.rtActive&&this.updateTlas(this.pending,this.skinPending.map(n=>n.mats)),this.pending.sort((n,a)=>n.mesh-a.mesh),this.batches=[];let e=1;for(const n of this.pending){if(e>=W)break;const a=e*X;this.instData.set(n.model,a);const r=this.prevModels.get(n.key);this.instData.set(r??n.model,a+16),r?r.set(n.model):this.prevModels.set(n.key,new Float32Array(n.model)),this.instData[a+32]=n.color[0],this.instData[a+33]=n.color[1],this.instData[a+34]=n.color[2],this.instData[a+35]=n.color[3]??-1,this.instData.set(n.extra,a+36),this.instData[a+40]=0,this.instData[a+41]=0,this.instData[a+42]=0,this.instData[a+43]=0;const o=this.batches[this.batches.length-1];o&&o.mesh===n.mesh?o.count++:this.batches.push({mesh:n.mesh,first:e,count:1}),e++}this.skinFirst=e,this.skinN=0,this.rtSkinFirst=e;const t=S.create();for(const n of this.skinPending){if(e>=W)break;const a=this.skinN,r=e*X;this.instData.set(t,r),this.instData.set(t,r+16),this.instData.set([n.shirt[0],n.shirt[1],n.shirt[2],-1,n.skin[0],n.skin[1],n.skin[2],n.hair,n.pants[0],n.pants[1],n.pants[2],a*N*2],r+32);const o=a*N*2*16;this.boneData.set(n.mats,o);const l=this.prevBones.get(n.key);this.boneData.set(l??n.mats,o+N*16),l?l.set(n.mats):this.prevBones.set(n.key,n.mats.slice()),this.skinN++,e++}this.skinPending=[],this.skinN>0&&this.device.queue.writeBuffer(this.boneBuf,0,this.boneData,0,this.skinN*N*2*16),this.instCount=e,this.pending=[],this.device.queue.writeBuffer(this.instBuf,0,this.instData,0,e*X)}render(e){const t=this.device;this.flushInstances();const n=(m,P)=>{let R=0,E=1;for(;m>0;)E/=P,R+=E*(m%P),m=Math.floor(m/P);return R},a=this.frameIndex%8+1,r=this.taaEnabled?(n(a,2)-.5)*2/this.width:0,o=this.taaEnabled?(n(a,3)-.5)*2/this.height:0,l=new Float32Array(e.projNJ);l[8]+=r,l[9]+=o;const c=S.mul(l,e.view),i=S.mul(e.projNJ,e.view),s=this.frameData;s.set(c,0),s.set(i,16),s.set(this.frameIndex===0?i:this.prevVP,32),s.set(S.invert(i),48),s.set(e.view,64),s.set(l,80),s.set(S.invert(l),96);for(let m=0;m<3;m++)s.set(e.lightVP[m],112+m*16);s.set([...e.camPos,e.time],160),s.set([e.sunDir[0],e.sunDir[1],e.sunDir[2],e.night],164),s.set([e.sunColor[0],e.sunColor[1],e.sunColor[2],this.exposure],168);const f=this.rtActive,h=this.frameIndex===0||i.some((m,P)=>Math.abs(m-this.prevVP[P])>1e-6);this.rtSamples=f&&!h?this.rtSamples+1:0,s.set([e.wetness,e.rain,this.aoEnabled&&!f?1:0,oe-1],172),s.set([...e.splits,f?this.rtMode:0],176),s.set([...e.cascTexel,this.rtSkinFirst],180),s.set([e.fogDensity,.045,this.bloomEnabled?1:0,f?this.rtResolveMode:this.ssfxEnabled?this.ssfxMode:0],184),s.set([this.width,this.height,1/this.width,1/this.height],188);const v=Math.min(Be,e.spots.length/8);s.set([this.frameIndex,v,this.renderScale,e.overcast??0],192),s.set(e.sun,196),s.set(e.moon,200),t.queue.writeBuffer(this.frameUB,0,s),v>0&&t.queue.writeBuffer(this.spotBuf,0,new Float32Array(e.spots.slice(0,v*8)));const p=new Float32Array(64*3);for(let m=0;m<3;m++)p.set(e.lightVP[m],m*64);t.queue.writeBuffer(this.shadowUB,0,p),this.prevVP=i,this.stats.draws=0,this.stats.tris=0;const d=t.createCommandEncoder();this.envFrame++%2===0&&this.renderEnv(d);for(let m=0;m<(f?0:3);m++){const P=d.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.shadowTex.createView({dimension:"2d",baseArrayLayer:m,arrayLayerCount:1}),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});P.setPipeline(this.pipes.shadow),P.setBindGroup(0,this.shadowBG,[m*256]),this.drawWorld(P,e.vis,1<<m+1),this.drawDynamic(P,!1,!0),this.drawSkinned(P,this.pipes.skinShadow),P.end()}{const m=d.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.depth.createView(),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"store"}});m.setBindGroup(0,this.frameBG),m.setPipeline(this.pipes.prepassNoCull),this.drawWorld(m,e.vis,1),this.drawDynamic(m,!0,!1),this.drawSkinned(m,this.pipes.skinDepth),m.end()}this.aoEnabled&&!f&&(this.post(d,"ssao",this.aoRaw.createView(),[this.hdr,this.hdr,this.hdr]),this.post(d,"blurAO",this.ao.createView(),[this.aoRaw,this.hdr,this.hdr]));{const m=d.beginRenderPass({colorAttachments:[{view:this.hdr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}},{view:this.vel.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.gbuf.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.alb.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:this.depth.createView(),depthLoadOp:"load",depthStoreOp:"store"}});m.setBindGroup(0,this.frameBG),m.setBindGroup(1,this.sceneBG),m.setPipeline(this.pipes.mainNoCull),this.drawWorld(m,e.vis,1),this.drawDynamic(m,!0,!1),this.drawSkinned(m,this.pipes.skinMain),m.setPipeline(this.pipes.sky),m.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView()},{binding:1,resource:this.envSamp}]})),m.draw(3),m.end()}let x=this.hdr;if(f){const m=this.rtHistIdx,P=1-m;this.rtHistIdx=P;const R=this.rtMode===2?h?12:4096:h?6:24,E=new ArrayBuffer(16);new Uint32Array(E,0,1)[0]=this.rtMode,new Float32Array(E,4,1)[0]=R,new Uint32Array(E,8,2).set([this.ptBounces,this.frameIndex]),t.queue.writeBuffer(this.rtParamsUB,0,E);const V=t.createBindGroup({layout:this.rtBGL,entries:[{binding:0,resource:{buffer:this.rtNodesBuf}},{binding:1,resource:{buffer:this.rtTrisBuf}},{binding:2,resource:{buffer:this.rtTlasBuf}},{binding:3,resource:this.texA.createView({dimension:"2d-array"})},{binding:4,resource:this.envSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.depth.createView()},{binding:7,resource:this.gbuf.createView()},{binding:8,resource:this.alb.createView()},{binding:9,resource:this.vel.createView()},{binding:10,resource:this.rtHist[P*2].createView()},{binding:11,resource:this.rtHist[P*2+1].createView()},{binding:12,resource:this.rtHist[m*2].createView()},{binding:13,resource:this.rtHist[m*2+1].createView()},{binding:14,resource:this.rtDisp[0].createView()},{binding:15,resource:this.rtDisp[1].createView()},{binding:16,resource:{buffer:this.rtParamsUB}}]}),D=d.beginComputePass();D.setPipeline(this.rtPipe),D.setBindGroup(0,this.frameBG),D.setBindGroup(1,V),D.dispatchWorkgroups(Math.ceil(this.rtDisp[0].width/8),Math.ceil(this.rtDisp[0].height/8)),D.end(),this.post(d,"resolve",this.hdr2.createView(),[this.hdr,this.rtDisp[0],this.rtDisp[1]]),x=this.hdr2}else if(this.ssfxEnabled){const m=t.createBindGroup({layout:this.ssfxBGL,entries:[{binding:0,resource:this.hdr.createView()},{binding:1,resource:this.gbuf.createView()},{binding:2,resource:this.alb.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp}]}),P=d.beginRenderPass({colorAttachments:[{view:this.ssr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.ssgi.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});P.setPipeline(this.pipes.ssfx),P.setBindGroup(0,this.frameBG),P.setBindGroup(1,m),P.draw(3),P.end();const R=this.ssHistIdx,E=1-R;this.ssHistIdx=E;const V=t.createBindGroup({layout:this.tempBGL,entries:[{binding:0,resource:this.ssr.createView()},{binding:1,resource:this.ssgi.createView()},{binding:2,resource:this.vel.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.ssrHist[E].createView()},{binding:6,resource:this.giHist[E].createView()}]}),D=d.beginRenderPass({colorAttachments:[{view:this.ssrHist[R].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.giHist[R].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});D.setPipeline(this.pipes.ssTemporal),D.setBindGroup(0,this.frameBG),D.setBindGroup(1,V),D.draw(3),D.end(),this.post(d,"resolve",this.hdr2.createView(),[this.hdr,this.ssrHist[R],this.giHist[R]]),x=this.hdr2}const w=this.hist[this.histIdx],T=this.hist[1-this.histIdx];this.histIdx=1-this.histIdx,this.post(d,"taa",w.createView(),[x,T,this.vel]);const g=this.taaEnabled?w:x;let y=g,G=0;for(let m=0;m<Y;m++)this.post(d,"bloomDown",this.bloom.createView({baseMipLevel:m,mipLevelCount:1}),[y,this.hdr,this.hdr],[G,0,0],!1),y=this.bloom,G=m;for(let m=Y-2;m>=0;m--)this.post(d,"bloomUp",this.bloom.createView({baseMipLevel:m,mipLevelCount:1}),[this.bloom,this.hdr,this.hdr],[m+1,0,0],!0);const b=Math.max(1,this.width>>1>>Y-1),k=Math.max(1,this.height>>1>>Y-1),I=!this.lumPending&&k<=64&&b*8<=256;if(I&&d.copyTextureToBuffer({texture:this.bloom,mipLevel:Y-1},{buffer:this.lumBuf,bytesPerRow:256},[b,k]),this.post(d,"composite",this.gpu.context.getCurrentTexture().createView(),[g,this.bloom,this.hdr],[0,0,0]),t.queue.submit([d.finish()]),!this.gpuPending){this.gpuPending=!0;const m=performance.now();t.queue.onSubmittedWorkDone().then(()=>{this.gpuMs=this.gpuMs*.8+(performance.now()-m)*.2,this.gpuPending=!1})}I&&this.readLuminance(b,k),this.frameIndex++}readLuminance(e,t){this.lumPending=!0,this.lumBuf.mapAsync(GPUMapMode.READ).then(()=>{const n=new Uint16Array(this.lumBuf.getMappedRange());let a=0,r=0;for(let o=0;o<t;o++)for(let l=0;l<e;l++){const c=o*128+l*4,i=.2126*ce(n[c])+.7152*ce(n[c+1])+.0722*ce(n[c+2]),s=1-Math.abs((l+.5)/e-.5),f=1-Math.abs((o+.5)/t-.5),h=s*f;a+=Math.log(Math.max(i,1e-4))*h,r+=h}this.lumBuf.unmap(),this.avgLum=Math.exp(a/Math.max(r,1e-4)),this.lumPending=!1}).catch(()=>{this.lumPending=!1})}adaptExposure(e){const t=Math.min(16,Math.max(.12,.2/Math.max(this.avgLum,1e-4))),n=1-Math.exp(-e*(t>this.exposure?1.2:2.5));this.exposure+=(t-this.exposure)*n}renderEnv(e){let t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:0,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});t.setPipeline(this.pipes.lut),t.setBindGroup(0,this.frameBG),t.draw(3),t.end();for(let n=1;n<oe;n++)t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:n,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]}),t.setPipeline(this.pipes.envDown),t.setBindGroup(0,this.frameBG),t.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView({baseMipLevel:n-1,mipLevelCount:1})},{binding:1,resource:this.linSamp}]})),t.draw(3),t.end()}post(e,t,n,a,r=[0,0,0],o=!1){const l=a.map((s,f)=>s.createView({baseMipLevel:r[f]??0,mipLevelCount:1})),c=this.device.createBindGroup({layout:this.postBGL,entries:[{binding:0,resource:l[0]},{binding:1,resource:l[1]},{binding:2,resource:l[2]},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp}]}),i=e.beginRenderPass({colorAttachments:[{view:n,loadOp:o?"load":"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});i.setPipeline(this.pipes[t]),i.setBindGroup(0,this.frameBG),i.setBindGroup(1,c),i.draw(3),i.end()}drawWorld(e,t,n){if(this.worldVB){e.setVertexBuffer(0,this.worldVB),e.setIndexBuffer(this.worldIB,"uint32");for(let a=0;a<this.chunks.length;a++){if(t&&t.length===this.chunks.length&&!(t[a]&n))continue;const r=this.chunks[a];e.drawIndexed(r.count,1,r.first,0,0),this.stats.draws++,this.stats.tris+=r.count/3}}}drawSkinned(e,t){this.skinN!==0&&(e.setPipeline(t),e.setVertexBuffer(0,this.skinVB),e.setIndexBuffer(this.skinIB,"uint32"),e.drawIndexed(this.skinCount,this.skinN,0,0,this.skinFirst),this.stats.draws++,this.stats.tris+=this.skinCount/3*this.skinN)}drawDynamic(e,t,n){e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32");for(const a of this.batches){const r=this.meshes[a.mesh];e.drawIndexed(r.count,a.count,r.first,r.base,a.first),this.stats.draws++,this.stats.tris+=r.count/3*a.count}if(t&&!n){const a=this.meshes[L.WATER];e.drawIndexed(a.count,1,a.first,a.base,0),this.stats.draws++}}}function ce(u){const e=u&32768?-1:1,t=u>>10&31,n=u&1023;return t===0?e*Math.pow(2,-14)*(n/1024):t===31?n?NaN:e*(1/0):e*Math.pow(2,t-15)*(1+n/1024)}const Oe=[[.78,.55,.42],[.55,.36,.25],[.32,.2,.13],[.9,.7,.58],[.66,.46,.33]],xt=[[.6,.08,.06],[.08,.2,.45],[.75,.75,.72],[.12,.12,.13],[.15,.4,.2],[.8,.6,.15],[.45,.3,.55],[.25,.5,.65]],bt=[[.08,.1,.18],[.15,.13,.1],[.3,.28,.22],[.05,.05,.05],[.35,.38,.45]],ne=[[.03,.02,.015],[.2,.12,.05],[.45,.32,.15],[.5,.5,.5]];function yt(u){const e=n=>Math.abs(Math.sin(u*12.9898+n*78.233)*43758.5453)%1,t=(n,a)=>n[Math.floor(e(a)*n.length)%n.length];return{skin:t(Oe,1),shirt:t(xt,2),pants:t(bt,3),hair:t(ne,4),shoes:[.04,.04,.045],height:.92+e(5)*.16}}const wt={skin:Oe[0],shirt:[.85,.85,.82],pants:[.1,.13,.22],hair:ne[0],height:1},Me=new Float32Array(N*16),kt=u=>ne.indexOf(u.hair)>=0?ne.indexOf(u.hair):0;function Re(u,e,t,n,a,r,o,l){const c=S.create(),i=l.height;o===2?(S.trs([t[0],t[1]+.12,t[2]],n,-Math.PI/2,0,[i,i,i],c),S.mul(c,S.trs([0,-.97,0],0,0,0),c)):S.trs(t,n,0,0,[i,i,i],c),ut(c,a,r,o,Me),u.addSkinned(e,Me,l.shirt,l.skin,l.pants,kt(l))}class St{ctx=null;master;rotorBus;chop;chopLfo;chopDepth;tailLfo;turbine=[];turbineGain;noise;lowpass;constructor(){const e=()=>this.unlock();for(const t of["touchend","pointerup","click","keydown","mousedown"])addEventListener(t,e,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden||this.ctx?.resume().catch(()=>{})})}unlock(){const e=navigator;if(e.audioSession&&e.audioSession.type!=="playback")try{e.audioSession.type="playback"}catch{}this.init();const t=this.ctx;if(t.state!=="running"){t.resume().catch(()=>{});const n=t.createBuffer(1,1,22050),a=t.createBufferSource();a.buffer=n,a.connect(t.destination),a.start(0)}}init(){if(this.ctx)return;const e=window.AudioContext??window.webkitAudioContext,t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const n=this.noise.getChannelData(0);for(let p=0;p<n.length;p++)n[p]=Math.random()*2-1;this.rotorBus=t.createGain(),this.rotorBus.gain.value=0,this.lowpass=t.createBiquadFilter(),this.lowpass.type="lowpass",this.lowpass.frequency.value=2500,this.rotorBus.connect(this.lowpass).connect(this.master);const a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=110,r.Q.value=.9;const o=t.createBiquadFilter();o.type="lowshelf",o.frequency.value=90,o.gain.value=10,this.chop=t.createGain(),this.chop.gain.value=.55,this.chopLfo=t.createOscillator(),this.chopLfo.type="sawtooth",this.chopLfo.frequency.value=0,this.chopDepth=t.createGain(),this.chopDepth.gain.value=.55,this.chopLfo.connect(this.chopDepth).connect(this.chop.gain),a.connect(r).connect(o).connect(this.chop).connect(this.rotorBus);const l=t.createGain();l.gain.value=0;const c=t.createOscillator();c.type="sine",c.frequency.value=38,this.chopLfo.connect(l.gain),c.connect(l).connect(this.rotorBus);const i=t.createBufferSource();i.buffer=this.noise,i.loop=!0,i.playbackRate.value=.93;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=700,s.Q.value=2.5;const f=t.createGain();f.gain.value=.12,this.tailLfo=t.createOscillator(),this.tailLfo.type="square",this.tailLfo.frequency.value=0;const h=t.createGain();h.gain.value=.08,this.tailLfo.connect(h).connect(f.gain),i.connect(s).connect(f).connect(this.rotorBus),this.turbineGain=t.createGain(),this.turbineGain.gain.value=0;const v=t.createBiquadFilter();v.type="highpass",v.frequency.value=900;for(const p of[0,7]){const d=t.createOscillator();d.type="sawtooth",d.frequency.value=400,d.detune.value=p,d.connect(v),d.start(),this.turbine.push(d)}v.connect(this.turbineGain).connect(this.master),a.start(),i.start(),c.start(),this.chopLfo.start(),this.tailLfo.start()}updateRotor(e,t,n){const a=this.ctx;if(!a)return;const r=a.currentTime,o=1/(1+Math.max(0,t-6)/22),l=4*4.9*e;this.chopLfo.frequency.setTargetAtTime(l,r,.1),this.tailLfo.frequency.setTargetAtTime(4*23*e,r,.1),this.rotorBus.gain.setTargetAtTime(Math.min(1,e*1.3)*o*.9,r,.1);for(const c of this.turbine)c.frequency.setTargetAtTime(380+1500*e,r,.3);this.turbineGain.gain.setTargetAtTime(e*.025*o*(n?1.6:1),r,.2),this.lowpass.frequency.setTargetAtTime(n?1200:600+3e3*o,r,.2)}shot(e){const t=this.ctx;if(!t)return;const n=t.currentTime,a=1/(1+Math.max(0,e-5)/30),r=t.createBufferSource();r.buffer=this.noise,r.playbackRate.value=1+Math.random()*.2;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1400+Math.random()*400,o.Q.value=.6;const l=t.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.9*a,n+.004),l.gain.exponentialRampToValueAtTime(.001,n+.11),r.connect(o).connect(l).connect(this.master),r.start(n,Math.random()*1.5,.15);const c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(110,n),c.frequency.exponentialRampToValueAtTime(42,n+.1);const i=t.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.8*a,n+.005),i.gain.exponentialRampToValueAtTime(.001,n+.14),c.connect(i).connect(this.master),c.start(n),c.stop(n+.16)}impact(e){const t=this.ctx;if(!t)return;const n=t.currentTime,a=.5/(1+e/25),r=t.createBufferSource();r.buffer=this.noise;const o=t.createBiquadFilter();o.type="highpass",o.frequency.value=2500;const l=t.createGain();l.gain.setValueAtTime(a,n),l.gain.exponentialRampToValueAtTime(.001,n+.06),r.connect(o).connect(l).connect(this.master),r.start(n,Math.random(),.07)}}const Ie=()=>!!document.documentElement.requestFullscreen&&document.fullscreenEnabled!==!1;async function Le(){try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),await screen.orientation.lock?.("landscape")}catch{}}const Tt=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;class Pt{constructor(e){this.input=e;const t=document.createElement("style");t.textContent=`
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
    `,document.head.appendChild(t),this.root.id="touch";const n=document.createElement("div");n.className="look",this.stick.className="stick",this.knob.className="knob",this.stick.appendChild(this.knob),this.root.append(n,this.stick),document.body.appendChild(this.root);const a=document.createElement("div");a.className="btn small",a.textContent="全画面",a.style.cssText="display:flex; right:16px; top:64px;",a.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),document.fullscreenElement?document.exitFullscreen?.():Le()}),this.root.appendChild(a);const r=()=>{a.style.display=Ie()?"flex":"none",a.textContent=document.fullscreenElement?"戻す":"全画面"};document.addEventListener("fullscreenchange",r),r();const o=()=>{!document.fullscreenElement&&Ie()&&Le(),removeEventListener("pointerup",o,!0)};addEventListener("pointerup",o,!0);const l=[["ジャンプ","Space",24,120,["foot"]],["走る","ShiftLeft",100,40,["foot"],!0],["乗る","KeyF",24,200,["foot"]],["降りる","KeyF",24,200,["car","heli"]],["ブレーキ","Space",24,120,["car"]],["上昇","Space",24,120,["heli"]],["下降","ShiftLeft",100,40,["heli"]],["射撃",void 0,110,120,["heli"]],["左旋回","KeyQ",190,40,["heli"],!1,!0],["右旋回","KeyE",250,40,["heli"],!1,!0],["視点","KeyV",24,40,["foot","car","heli"],!1,!0],["時間","KeyT",16,280,["foot","car","heli"],!1,!0]];for(const[s,f,h,v,p,d,x]of l){const w=document.createElement("div");w.className="btn"+(x?" small":""),w.textContent=s,w.style.right=h+"px",w.style.bottom=v+"px";const T={el:w,code:f,toggle:d,modes:p};w.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation();try{w.setPointerCapture(y.pointerId)}catch{}if(!f){this.fire=!0;return}d?(T.on=!T.on,w.classList.toggle("on",T.on),this.setKey(f,!!T.on)):this.setKey(f,!0)});const g=y=>{if(y.preventDefault(),!f){this.fire=!1;return}d||this.setKey(f,!1)};w.addEventListener("pointerup",g),w.addEventListener("pointercancel",g),this.root.appendChild(w),this.btns.push(T)}this.stick.addEventListener("pointerdown",s=>{s.preventDefault();try{this.stick.setPointerCapture(s.pointerId)}catch{}this.stickId=s.pointerId;const f=this.stick.getBoundingClientRect();this.stickOrigin=[f.left+f.width/2,f.top+f.height/2],this.moveStick(s.clientX,s.clientY)}),this.stick.addEventListener("pointermove",s=>{s.pointerId===this.stickId&&this.moveStick(s.clientX,s.clientY)});const c=s=>{s.pointerId===this.stickId&&(this.stickId=null,this.moveStick(...this.stickOrigin))};this.stick.addEventListener("pointerup",c),this.stick.addEventListener("pointercancel",c),n.addEventListener("pointerdown",s=>{s.preventDefault();try{n.setPointerCapture(s.pointerId)}catch{}this.lookId=s.pointerId,this.lookLast=[s.clientX,s.clientY]}),n.addEventListener("pointermove",s=>{s.pointerId===this.lookId&&(this.input.mouseDX+=(s.clientX-this.lookLast[0])*1.6,this.input.mouseDY+=(s.clientY-this.lookLast[1])*1.6,this.lookLast=[s.clientX,s.clientY])});const i=s=>{s.pointerId===this.lookId&&(this.lookId=null)};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),this.setMode("foot")}root=document.createElement("div");stick=document.createElement("div");knob=document.createElement("div");stickId=null;lookId=null;stickOrigin=[0,0];lookLast=[0,0];btns=[];fire=!1;mode="foot";setKey(e,t){t?(this.input.keys.has(e)||this.input.pressed.add(e),this.input.keys.add(e)):this.input.keys.delete(e)}moveStick(e,t){let a=e-this.stickOrigin[0],r=t-this.stickOrigin[1];const o=Math.hypot(a,r);o>56&&(a*=56/o,r*=56/o),this.knob.style.transform=`translate(${a}px, ${r}px)`;const l=a/56,c=-r/56;this.input.touchAxis=[Math.abs(l)>.15?l:0,Math.abs(c)>.15?c:0],this.setKey("KeyD",l>.35),this.setKey("KeyA",l<-.35),this.setKey("KeyW",c>.35),this.setKey("KeyS",c<-.35)}setMode(e){if(!(e===this.mode&&this.btns[0].el.style.display)){this.mode=e;for(const t of this.btns){const n=t.modes.includes(e);t.el.style.display=n?"flex":"none",!n&&t.toggle&&t.on&&(t.on=!1,t.el.classList.remove("on"),t.code&&this.setKey(t.code,!1))}}}}const le=[.055,.065,.045],Z=16,J=16,Fe=8,Ge=[[.85,.85,.83],[.02,.02,.025],[.45,.46,.48],[.55,.03,.02],[.03,.12,.45],[.03,.2,.08],[.8,.55,.02],[.18,.18,.19],[.02,.04,.12],[.25,.02,.04],[.8,.25,.02],[.02,.3,.3]],Ee=62*Math.PI/180,ue=[.1,14,45,150];class Mt{constructor(e,t){this.gpu=e,this.stats=t,this.r=new gt(e),this.input=new Ve(e.canvas),this.worker=new Worker(new URL(""+new URL("worker-DL5J5O2i.js",import.meta.url).href,import.meta.url),{type:"module"});for(let a=0;a<64;a++)this.looks.push(yt(a+1));const n=new URLSearchParams(location.search);n.get("t")&&(this.tod=parseFloat(n.get("t"))),n.get("cam")==="free"&&(this.camMode="free"),n.get("pos")&&(this.camMode="free",this.freePos=n.get("pos").split(",").map(Number),this.camYaw=-(parseFloat(n.get("yaw")??"0")*Math.PI)/180,this.camPitch=parseFloat(n.get("pitch")??"0")*Math.PI/180,this.lockCam=!0),n.get("hfov")&&(this.hfov=parseFloat(n.get("hfov"))*Math.PI/180),n.get("clean")==="1"&&document.body.classList.add("clean"),this.overcast=n.get("overcast")!==null?H(parseFloat(n.get("overcast")),0,1):(n.get("map")??"namba")==="namba"?.8:0,n.get("scale")&&(this.r.renderScale=parseFloat(n.get("scale")),this.dynRes=!1),window.game=this,(this.mobile||n.get("touch")==="1")&&(this.mobile=!0,this.touch=new Pt(this.input),n.get("scale")||(this.r.renderScale=.7),this.r.ssfxEnabled=!1,document.getElementById("crosshair").style.display="block")}r;input;worker;state=null;vis=null;nchunks=0;workerMs=0;waiting=!1;camMode="third";camYaw=0;camPitch=-.15;camDist=4.5;camPos=[0,20,30];freePos=[0,30,60];lockCam=!1;hfov=0;overcast=0;smoothCamDist=4.5;lastMouse=0;tod=16.2;timeScale=60;paused=!1;rain=!1;wet=0;time=0;looks=[];hud=document.getElementById("hud");help=document.getElementById("help");speedEl=document.getElementById("speed");promptEl=document.getElementById("prompt");hudTimer=0;sfx=new St;tracers=[];marks=[];lastHitTime=-10;tracerSeq=0;heliOff=0;touch=null;mobile=Tt();worldInfo="";lastFrame=performance.now();dynRes=!0;slowTime=0;fastTime=0;async start(){const e=document.getElementById("loading");e.textContent="Generating materials…";const t=this.r.generateTextures();e.textContent="Generating world (WASM worker)…";const n=await new Promise((r,o)=>{this.worker.onmessage=i=>{i.data.type==="world"?r(i.data):i.data.type==="error"&&o(new Error(i.data.message))};const l=new URLSearchParams(location.search).get("map")??"namba";document.body.classList.toggle("map-namba",l==="namba");const c=l==="namba"?new URL("models/namba_engine.bin.gz",document.baseURI).href:void 0;this.worker.postMessage({type:"init",seed:1337,cityUrl:c})});await t,this.r.setWorld(n);const a=new URLSearchParams(location.search).get("rt");(a==="rt"||a==="1")&&this.r.setRenderMode(1),(a==="pt"||a==="2")&&this.r.setRenderMode(2),this.nchunks=n.chunks.length/8,this.worldInfo=`world: ${n.buildings} buildings, ${n.props} props, ${(n.idx.length/3/1e3).toFixed(0)}k tris, ${this.nchunks} chunks, gen ${n.genMs.toFixed(0)} ms`,this.worker.onmessage=r=>{r.data.type==="state"&&(this.state=r.data.state,this.vis=r.data.vis,this.workerMs=r.data.ms,this.waiting=!1)},e.style.display="none",this.mobile&&(this.help.style.display="none"),this.help.textContent=["クリック: マウス操作  WASD: 移動  Shift: 走る  Space: ジャンプ / ハンドブレーキ","F: 車/ヘリに乗る・降りる  V: 一人称/三人称  C: フリーカメラ  R: リセット","ヘリ: Space 上昇 / Shift 下降  W/S 前後傾  A/D 左右傾  Q/E 旋回  左クリック: 機関砲 (マウスで照準)","T: 時間早送り  P: 時間停止  1-4: 朝/昼/夕/夜  G: 雨  O: SSAO  B: ブルーム  K: TAA  J: SSR/SSGI  Y: レイトレ/パストレ  -/=: 解像度"].join(`
`),requestAnimationFrame(this.frame)}frame=e=>{const t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e,this.stats.push(t),this.time+=t,this.update(t),requestAnimationFrame(this.frame)};handleKeys(e){const t=this.input;t.hit("KeyV")&&(this.camMode=this.camMode==="first"?"third":"first"),t.hit("KeyC")&&(this.camMode==="free"?this.camMode="third":(this.camMode="free",this.freePos=[...this.camPos])),t.hit("KeyP")&&(this.paused=!this.paused),t.hit("Digit1")&&(this.tod=8),t.hit("Digit2")&&(this.tod=13),t.hit("Digit3")&&(this.tod=17.45),t.hit("Digit4")&&(this.tod=22.5),t.hit("KeyG")&&(this.rain=!this.rain),t.hit("KeyO")&&(this.r.aoEnabled=!this.r.aoEnabled),t.hit("KeyB")&&(this.r.bloomEnabled=!this.r.bloomEnabled),t.hit("KeyK")&&(this.r.taaEnabled=!this.r.taaEnabled),t.hit("KeyJ")&&(this.r.ssfxEnabled=!this.r.ssfxEnabled),t.hit("KeyY")&&this.r.setRenderMode((this.r.rtMode+1)%3),t.hit("Minus")&&(this.r.renderScale=Math.max(.4,this.r.renderScale-.1),this.dynRes=!1),t.hit("Equal")&&(this.r.renderScale=Math.min(1.5,this.r.renderScale+.1),this.dynRes=!1);const n=t.down("KeyT")?1800:this.timeScale;this.paused||(this.tod=(this.tod+e*n/3600)%24),this.wet=H(this.wet+(this.rain?e/6:-e/25),0,1)}update(e){const t=this.input;if(this.handleKeys(e),this.dynRes&&this.r.rtMode!==2){const b=this.stats.ms;b>1e3/32?(this.slowTime+=e,this.fastTime=0):b<1e3/50?(this.fastTime+=e,this.slowTime=0):this.slowTime=this.fastTime=0,this.slowTime>1&&(this.r.renderScale=Math.max(.5,this.r.renderScale-.1),this.slowTime=0),this.fastTime>1.5&&this.r.renderScale<1&&(this.r.renderScale=Math.min(1,this.r.renderScale+.1),this.fastTime=0)}this.r.resize(this.gpu.canvas.clientWidth,this.gpu.canvas.clientHeight,devicePixelRatio);const n=this.state,a=n?n[6]>=0:!1,r=n?n[14]>.5:!1;n&&(this.heliOff=Z+n[9]*J+n[10]*Fe);const o=this.heliOff;this.touch?.setMode(r?"heli":a?"car":"foot"),(t.mouseDX||t.mouseDY)&&(this.lastMouse=this.time),this.lockCam||(this.camYaw-=t.mouseDX*.0025),this.lockCam||(this.camPitch=H(this.camPitch-t.mouseDY*.0025,-1.45,1.2)),t.wheel&&(this.camDist=H(this.camDist+t.wheel*.6,2,14));let l=[0,2,0];if(n){const b=[n[0],n[1],n[2]];if(a){const k=Z+n[6]*J;if(l=[n[k],n[k+1]+1.6,n[k+2]],this.camMode==="third"&&this.time-this.lastMouse>1.2){const I=n[k+3],m=Math.abs(n[k+10]),P=1-Math.exp(-e*(1+m*.15));let R=I-this.camYaw;R=Math.atan2(Math.sin(R),Math.cos(R)),this.camYaw+=R*P,this.camPitch+=(-.2-this.camPitch)*P}}else if(r){if(l=[n[o],n[o+1]+6.5,n[o+2]],this.camMode==="third"&&this.time-this.lastMouse>1.5){const k=1-Math.exp(-e*1.2);let I=n[o+3]-this.camYaw;I=Math.atan2(Math.sin(I),Math.cos(I)),this.camYaw+=I*k,this.camPitch+=(-.18-this.camPitch)*k}}else l=[b[0],b[1]+1.6,b[2]]}const c=[-Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),-Math.cos(this.camYaw)*Math.cos(this.camPitch)];let i;const s=r?this.camDist+10:a?this.camDist+3:this.camDist;if(this.camMode==="free"){const b=(t.down("ShiftLeft")?60:15)*e,k=[Math.cos(this.camYaw),0,-Math.sin(this.camYaw)];this.freePos=M.add(this.freePos,M.scale(c,t.axis("KeyS","KeyW")*b)),this.freePos=M.add(this.freePos,M.scale(k,t.axis("KeyA","KeyD")*b)),this.freePos[1]+=t.axis("KeyQ","KeyE")*b,i=this.freePos}else if(this.camMode==="first"&&n)if(r){const b=S.trs([n[o],n[o+1],n[o+2]],n[o+3],n[o+4],n[o+5]),k=S.transformPoint(b,[0,2.62,-1.35]);i=[k[0],k[1],k[2]]}else if(a){const b=Z+n[6]*J,k=n[b+3];i=[n[b]+Math.cos(k)*-.38+-Math.sin(k)*.05,n[b+1]+1.22,n[b+2]-Math.sin(k)*-.38+-Math.cos(k)*.05]}else i=[n[0]-Math.sin(n[3])*.12,n[1]+1.66,n[2]-Math.cos(n[3])*.12];else{const b=n?n[8]:100,k=Math.min(s,Math.max(.6,b-.25));this.smoothCamDist=k<this.smoothCamDist?k:Ue(this.smoothCamDist,k,1-Math.exp(-e*3)),i=M.sub(l,M.scale(c,this.smoothCamDist))}this.camPos=i;const f=M.add(i,c),h=S.lookAt(i,f,[0,1,0]),v=this.r.width/this.r.height,p=this.hfov>0?2*Math.atan(Math.tan(this.hfov/2)/v):Ee,d=S.perspectiveRevZ(p,v,.1),x=this.skyState(),w=x.night>.5?x.moon:x.sun,T=[],g=[];for(let b=0;b<3;b++){const{vp:k,tx:I}=this.cascade(i,c,v,ue[b],ue[b+1],w);T.push(k),g.push(I)}if(n&&!this.waiting){const b=new Float32Array(32),k=this.camMode==="free";b[0]=k?0:t.axis("KeyA","KeyD"),b[1]=k?0:t.axis("KeyS","KeyW"),b[2]=this.camMode==="first"&&!a?this.camYaw:this.camYaw,b[3]=!k&&t.down("Space")?1:0,b[4]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,b[5]=!k&&(t.down("KeyF")||t.down("Enter"))?1:0,b[6]=!k&&(t.down("KeyW")||t.down("ArrowUp"))?1:0,b[7]=!k&&(t.down("KeyS")||t.down("ArrowDown"))?1:0,b[8]=k?0:(t.down("KeyA")||t.down("ArrowLeft")?1:0)-(t.down("KeyD")||t.down("ArrowRight")?1:0),b[9]=!k&&t.down("Space")?1:0,b[10]=t.down("KeyR")?1:0,b.set(l,11),b.set(M.scale(c,-1),14),b[17]=this.camMode==="third"?s:0,b[18]=k?1:0,b[19]=this.time,r&&!k&&(b[20]=t.down("Space")?1:0,b[21]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,b[22]=(t.down("KeyQ")?1:0)-(t.down("KeyE")?1:0),b[23]=t.locked&&t.mouseDown||(this.touch?.fire??!1)?1:0,b.set(c,24),b.set(i,27));const I=new Float32Array(64);I.set(S.mul(S.perspectiveRevZ(p*1.25,v*1.1,.1),h),0);for(let m=0;m<3;m++)I.set(T[m],16*(m+1));this.waiting=!0,this.worker.postMessage({type:"tick",dt:e,input:b,views:I,nviews:4,nchunks:this.nchunks})}else if(!n&&!this.waiting){this.waiting=!0;const b=new Float32Array(64);b.set(S.mul(d,h),0),this.worker.postMessage({type:"tick",dt:0,input:new Float32Array(32),views:b,nviews:1,nchunks:this.nchunks})}const y=[];n&&(this.emitDynamic(n,i,x.night,y),this.emitHeli(n,i,e,y,r));const G={view:h,proj:d,projNJ:d,camPos:i,lightVP:T,splits:ue.slice(1),cascTexel:g,sunDir:w,night:x.night,sunColor:x.keyColor.map(b=>b*(1-.8*this.overcast)),sun:[...x.sun,x.sun[1]>-.2?20:0],moon:[...x.moon,.04*x.night],overcast:this.overcast,wetness:this.wet,rain:this.rain?1:0,time:this.time,fogDensity:.0016+this.wet*.004+this.overcast*.0022,vis:this.vis,spots:y};this.r.render(G),this.r.adaptExposure(e),this.hudUpdate(e,n,a),t.endFrame()}skyState(){const e=(this.tod-6)/24*Math.PI*2,t=.55,n=M.norm([Math.cos(e),Math.sin(e)*Math.cos(t),Math.sin(e)*Math.sin(t)*.8+.25]),a=M.norm([-n[0]*.9+.2,Math.max(-n[1],.25),-n[2]+.3]),r=H((.06-n[1])/.16,0,1),o=Math.max(n[1],-.02),l=Math.asin(H(o,-1,1))*180/Math.PI,c=1/(Math.max(o,0)+.50572*Math.pow(Math.max(l,0)+6.07995,-1.6364)),i=[58e-7*8e3,135e-7*8e3,331e-7*8e3],s=21e-6*1.1*1200,f=H((n[1]+.04)/.08,0,1),h=7.5,v=i.map(x=>Math.exp(-(x+s)*c)*h*f),p=[.05,.065,.1],d=r>.5?p.map(x=>x*(r-.5)*2):v;return{sun:n,moon:a,night:r,keyColor:d}}cascade(e,t,n,a,r,o){const l=Math.tan(Ee/2),c=(a+r)/2,i=l*r,s=i*n,f=M.add(e,M.scale(t,c+(s*s+i*i)/(2*(r-a))*0)),h=Math.hypot(r-c,s,i),v=Math.ceil(h*1.04*4)/4,p=Math.abs(o[1])>.98?[0,0,1]:[0,1,0],d=S.lookAt([0,0,0],M.scale(o,-1),p),x=S.transformPoint(d,f),w=2*v/2048,T=Math.floor(x[0]/w)*w,g=Math.floor(x[1]/w)*w,y=S.ortho(T-v,T+v,g-v,g+v,-x[2]-450,-x[2]+v+30);return{vp:S.mul(y,d),tx:w}}emitDynamic(e,t,n,a){const r=this.r,o=e[9],l=e[10],c=e[6];for(let i=0;i<o;i++){const s=Z+i*J,f=[e[s],e[s+1],e[s+2]],h=e[s+3],v=f[0]-t[0],p=f[2]-t[2],d=Math.hypot(v,p);if(d>260)continue;const x=S.trs(f,h,e[s+4],e[s+5]),w=Ge[e[s+8]%Ge.length],T=e[s+11]>0,g=T?Math.max(n,.05):0;r.add(L.CAR,1e4+i*10,x,[w[0],w[1],w[2],-1],[g>.06?1:0,e[s+9],0,0]);for(let y=0;y<4;y++){const G=y<2,b=y%2===0?-.8:.8,k=S.mul(x,S.trs([b,.34,G?-1.35:1.35],G?e[s+6]:0,-e[s+7],0));r.add(L.WHEEL,1e4+i*10+1+y,k,[1,1,1,-1])}if(e[s+11]===2&&d<80){const y=S.mul(x,S.trs([-.38,1.12,.12],0,0,0,[.2,.24,.22])),G=this.looks[i%this.looks.length];r.add(L.SPHERE,1e4+i*10+6,y,[G.skin[0],G.skin[1],G.skin[2],20])}if(n>.2&&T&&a.length<16*8&&(d<70||i===c)){const y=[-Math.sin(h),-.12,-Math.cos(h)];a.push(f[0]+y[0]*2.4,f[1]+.7,f[2]+y[2]*2.4,1100,...M.norm(y),.82)}}for(let i=0;i<l;i++){const s=Z+o*J+i*Fe,f=[e[s],e[s+1],e[s+2]];Math.hypot(f[0]-t[0],f[2]-t[2])>150||Re(r,2e5+i*20,f,e[s+3],e[s+4],e[s+7],e[s+5],this.looks[(e[s+6]|0)%this.looks.length])}c<0&&e[14]<.5&&this.camMode!=="first"&&Re(r,9e5,[e[0],e[1],e[2]],e[3],e[4],e[5],e[7]>0?0:3,wt)}emitHeli(e,t,n,a,r){const o=this.r,l=this.heliOff,c=[e[l],e[l+1],e[l+2]],i=S.trs(c,e[l+3],e[l+4],e[l+5]),s=[le[0],le[1],le[2],-1];o.add(L.HELI,7e5,i,s),o.add(L.ROTOR,700001,S.mul(i,S.trs([0,3.47,.25],e[l+6],0,0)),s),o.add(L.TROTOR,700002,S.mul(i,S.trs([.36,4.25,9],0,e[l+8],0)),s);const f=S.mul(i,S.trs([0,.72,-3.55],e[l+9],e[l+10],0));o.add(L.GUN,700003,f,s);const h=e[l+11]>.5,v=S.transformPoint(f,[0,-.07,-1.95]);if(h){o.add(L.SPHERE,700004,S.trs([v[0],v[1],v[2]],Math.random()*6,0,0,[.5,.5,.9]),[1,.55,.15,40]);const g=M.norm(M.sub([v[0],v[1],v[2]],[f[12],f[13],f[14]]));a.length<15*8&&a.push(v[0],v[1],v[2],900,g[0],g[1],g[2],-.2)}const p=e[l+20]|0;for(let g=0;g<p;g++){const y=l+21+g*10,G=[e[y],e[y+1],e[y+2]],b=[e[y+3],e[y+4],e[y+5]];this.tracers.push({from:G,to:b,t:0,kind:e[y+6],n:[e[y+7],e[y+8],e[y+9]]}),this.sfx.shot(M.len(M.sub(G,t)))}if(r){const g=[e[l+16],e[l+17],e[l+18]],y=e[l+19]===1||e[l+19]===2,b=.008*Math.max(1,M.len(M.sub(g,t)));e[l+19]!==3&&o.add(L.SPHERE,73e4,S.trs(g,0,0,0,[b,b,b]),y?[1,.08,.05,40]:[.25,1,.45,40]);const k=document.getElementById("crosshair");k.classList.toggle("target",y),k.classList.toggle("hit",this.time-this.lastHitTime<.15)}let d=0;this.marks=this.marks.filter(g=>{if(g.t+=n,g.t>10)return!1;const y=Math.acos(Math.max(-1,Math.min(1,g.n[1]))),G=Math.atan2(g.n[0],g.n[2]),b=g.t>9?10-g.t:1,k=(g.kind===0?.55:.3)*b,I=M.add(g.p,M.scale(g.n,.025));if(o.add(L.SBOX,74e4+d++%256,S.trs(I,G,y,0,[k,.03,k]),g.kind===2?[.18,.01,.01,24]:[.015,.013,.012,24]),g.t<.6){const m=.35*(1-g.t/.6);o.add(L.SPHERE,75e4+d++%256,S.trs(M.add(g.p,M.scale(g.n,.08)),0,0,0,[m,m,m]),[1,.45,.1,40])}return!0});const x=320,w=2*Math.tan(62*Math.PI/180/2)/Math.max(1,this.r.height);let T=0;this.tracers=this.tracers.filter(g=>{g.id===void 0&&(g.id=this.tracerSeq++),g.t+=n;const y=M.len(M.sub(g.to,g.from)),G=g.t*x,b=M.scale(M.sub(g.to,g.from),1/Math.max(y,.001)),k=Math.atan2(-b[0],-b[2]),I=Math.asin(Math.max(-1,Math.min(1,b[1]))),m=1e6+g.id%4096*2;if(g.t<.15){const R=M.add(g.from,M.scale(b,y*.5)),E=Math.max(.025,M.len(M.sub(R,t))*w*1.5)*(1-g.t/.15);o.add(L.SBOX,m+1,S.trs(R,k,I,0,[E,E,y]),[.5,.22,.05,40])}if(G<y){const R=Math.min(12,y-G),E=M.add(g.from,M.scale(b,G+R*.5)),V=Math.max(.09,M.len(M.sub(E,t))*w*3);return o.add(L.SBOX,m,S.trs(E,k,I,0,[V,V,R]),[1,.5,.1,40]),!0}const P=(G-y)/x;if(P<.09&&g.kind!==3){g.landed||(g.landed=!0,this.sfx.impact(M.len(M.sub(g.to,t))),this.marks.push({p:g.to,n:g.n,t:0,kind:g.kind}),this.marks.length>200&&this.marks.shift(),(g.kind===1||g.kind===2)&&(this.lastHitTime=this.time));const R=.6+P*8,E=g.kind===1?[1,.75,.35]:g.kind===2?[.6,.05,.03]:[1,.6,.25];return o.add(L.SPHERE,72e4+T++%64,S.trs(g.to,0,0,0,[R,R,R]),[E[0]*.6,E[1]*.6,E[2]*.6,40]),!0}return P<.1}),this.sfx.updateRotor(e[l+7],M.len(M.sub(c,t)),r&&this.camMode==="first")}hudUpdate(e,t,n){if(this.hudTimer+=e,t&&t[14]>.5){const l=this.heliOff;this.speedEl.textContent=`${(t[l+13]*3.6).toFixed(0)} km/h  ALT ${t[l+14].toFixed(0)} m`,this.promptEl.textContent=t[l+7]<.95?`ローター始動中… ${(t[l+7]*100).toFixed(0)}%`:t[l+12]>.5?"F: 降りる":""}else t&&(n?(this.speedEl.textContent=`${Math.abs(t[12]).toFixed(0)} km/h`,this.promptEl.textContent=Math.abs(t[12])<14?"F: 降りる":""):(this.speedEl.textContent="",this.promptEl.textContent=this.camMode==="free"?"":t[15]>.5?"F: ヘリに乗る":t[11]>=0?"F: 車に乗る":""));if(this.hudTimer<.25)return;this.hudTimer=0;const a=Math.floor(this.tod),r=Math.floor((this.tod-a)*60),o=this.stats;if(this.mobile){this.hud.textContent=`FPS ${this.stats.fps.toFixed(0)}  ${this.r.width}x${this.r.height}`;return}this.hud.textContent=[`FPS ${o.fps.toFixed(1)}  frame ${o.ms.toFixed(1)} ms (worst ${o.worst.toFixed(1)})  gpu ${this.r.gpuMs.toFixed(1)} ms  worker ${this.workerMs.toFixed(2)} ms`,`render ${this.r.width}x${this.r.height} (scale ${this.r.renderScale.toFixed(1)}${this.dynRes?" auto":""})  draws ${this.r.stats.draws}  tris ${(this.r.stats.tris/1e3).toFixed(0)}k`,`time ${String(a).padStart(2,"0")}:${String(r).padStart(2,"0")}${this.paused?" (paused)":""}  exposure ${this.r.exposure.toFixed(2)}  ${this.rain?"rain":"clear"} wet ${this.wet.toFixed(2)}`,`cam ${this.camMode}  pos ${this.camPos.map(l=>l.toFixed(1)).join(", ")}  ${t&&t[14]>.5?"flying":n?"driving":"on foot"}`,`AO ${this.r.aoEnabled?"on":"off"}  bloom ${this.r.bloomEnabled?"on":"off"}  TAA ${this.r.taaEnabled?"on":"off"}  SSR/SSGI ${this.r.ssfxEnabled?"on":"off"}`,`mode ${vt[this.r.rtMode]} (Y)${this.r.rtMode===2?`  samples ${this.r.rtSamples}  bounces ${this.r.ptBounces}`:""}${this.r.rtStatus?"  "+this.r.rtStatus:""}`,this.worldInfo,this.gpu.adapterName].join(`
`)}}export{Mt as Game};
