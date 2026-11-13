import{m as B,c as _,v as M,l as He}from"./index-BbHOjZcg.js";class qe{keys=new Set;pressed=new Set;mouseDX=0;mouseDY=0;wheel=0;mouseDown=!1;locked=!1;touchAxis=[0,0];constructor(e){addEventListener("keydown",t=>{this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),(t.code==="Space"||t.code==="Tab")&&t.preventDefault()}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),e.addEventListener("click",()=>{this.locked||e.requestPointerLock?.()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e}),addEventListener("mousemove",t=>{(this.locked||this.mouseDown)&&(this.mouseDX+=t.movementX,this.mouseDY+=t.movementY)}),e.addEventListener("mousedown",()=>this.mouseDown=!0),addEventListener("mouseup",()=>this.mouseDown=!1),addEventListener("wheel",t=>{this.wheel+=Math.sign(t.deltaY)},{passive:!0})}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}axis(e,t){return e==="KeyA"&&t==="KeyD"&&this.touchAxis[0]!==0?this.touchAxis[0]:e==="KeyS"&&t==="KeyW"&&this.touchAxis[1]!==0?this.touchAxis[1]:(this.down(t)?1:0)-(this.down(e)?1:0)}endFrame(){this.pressed.clear(),this.mouseDX=this.mouseDY=0,this.wheel=0}}const F={PAINT:16,GLASS:17,TIRE:18,CHROME:19,CLOTH:21,HEADLIGHT:22,TAILLIGHT:23,PLAIN:24,WATER:25,TURN_L:60,TURN_R:61};class j{v=[];i=[];u32=new Uint32Array(1);f32=new Float32Array(this.u32.buffer);vert(e,t,r,a){return this.u32[0]=a,this.v.push(e[0],e[1],e[2],t[0],t[1],t[2],r[0],r[1],this.f32[0]),this.v.length/9-1}quad(e,t,r={}){const a=$(e[1],e[0]),n=$(e[2],e[0]);let s=se(me(a,n));Ue(s)<1e-8&&(s=se(me($(e[2],e[0]),$(e[3],e[0]))));let l=r.n;if(!l&&r.inside){const h=ge(e);l=$(h,r.inside)}let c=!1;l&&ne(s,l)<0&&(c=!0,s=s.map(h=>-h));const o=r.n?se(r.n):s,i=r.uv??[[0,0],[1,0],[1,1],[0,1]],u=e.map((h,d)=>this.vert(h,o,i[d],t));c?this.i.push(u[0],u[2],u[1],u[0],u[3],u[2]):this.i.push(u[0],u[1],u[2],u[0],u[2],u[3])}box(e,t,r){const a=ge([e,t]),[n,s,l]=e,[c,o,i]=t,u=[[[n,o,l],[c,o,l],[c,o,i],[n,o,i]],[[n,s,l],[c,s,l],[c,s,i],[n,s,i]],[[n,s,i],[c,s,i],[c,o,i],[n,o,i]],[[n,s,l],[c,s,l],[c,o,l],[n,o,l]],[[c,s,l],[c,s,i],[c,o,i],[c,o,l]],[[n,s,l],[n,s,i],[n,o,i],[n,o,l]]];for(const h of u)this.quad(h,r,{inside:a})}}const $=(f,e)=>[f[0]-e[0],f[1]-e[1],f[2]-e[2]],ne=(f,e)=>f[0]*e[0]+f[1]*e[1]+f[2]*e[2],me=(f,e)=>[f[1]*e[2]-f[2]*e[1],f[2]*e[0]-f[0]*e[2],f[0]*e[1]-f[1]*e[0]],Ue=f=>Math.hypot(f[0],f[1],f[2]),se=f=>{const e=Ue(f)||1;return[f[0]/e,f[1]/e,f[2]/e]},ge=f=>{const e=[0,0,0];for(const t of f)e[0]+=t[0],e[1]+=t[1],e[2]+=t[2];return e.map(t=>t/f.length)};function je(){const f=new j,e=[[-2.27,.36,.64,.74],[-2.18,.26,.76,.86],[-1.9,.22,.84,.91],[-1.2,.22,.9,.93],[-.85,.22,.94,.93],[.4,.22,.96,.94],[1.3,.22,.97,.93],[1.95,.24,.96,.9],[2.2,.3,.9,.84],[2.28,.38,.78,.76]],t=n=>{const[s,l,c,o]=n;return[[-o,l+.1,s],[-o,c-.12,s],[-o+.12,c,s],[o-.12,c,s],[o,c-.12,s],[o,l+.1,s],[o-.1,l,s],[-o+.1,l,s]]};for(let n=0;n+1<e.length;n++){const s=t(e[n]),l=t(e[n+1]),c=(e[n][0]+e[n+1][0])/2,o=(e[n][1]+e[n][2])/2;for(let i=0;i<8;i++){const u=(i+1)%8,h=i>=5?F.TIRE:F.PAINT;f.quad([s[i],s[u],l[u],l[i]],h,{inside:[0,o,c],uv:[[0,0],[1,0],[1,1],[0,1]]})}}for(const[n,s]of[[e[0],-1],[e[e.length-1],1]]){const l=t(n),c=ge(l);for(let o=0;o<8;o++){const i=[c,l[o],l[(o+1)%8],c];f.quad(i,F.PAINT,{n:[0,0,s]})}}const r=[[-.85,.94,.94,.86,.66],[-.1,.95,1.43,.87,.68],[.9,.96,1.42,.87,.68],[1.62,.96,.97,.85,.66]],a=n=>{const[s,l,c,o,i]=n;return[[-o,l,s],[-i,c,s],[i,c,s],[o,l,s]]};for(let n=0;n+1<r.length;n++){const s=a(r[n]),l=a(r[n+1]),c=[0,.9,(r[n][0]+r[n+1][0])/2];for(let o=0;o<3;o++){const u=o===1&&n===1?F.PAINT:F.GLASS;f.quad([s[o],s[o+1],l[o+1],l[o]],u,{inside:c})}}for(const n of[-1,1])f.quad([[n*.875,.955,.35],[n*.875,.955,.45],[n*.685,1.425,.45],[n*.685,1.425,.35]],F.PAINT,{n:[n,.4,0]});for(const n of[-1,1]){f.box([n*.45,.6,-2.24],[n*.76,.72,-2.12],F.HEADLIGHT),f.box([n*.5,.74,2.15],[n*.82,.86,2.27],F.TAILLIGHT);const s=n<0?F.TURN_L:F.TURN_R;f.box([n*.77,.6,-2.23],[n*.87,.71,-2.1],s),f.box([n*.55,.65,2.16],[n*.8,.73,2.26],s),f.box([n*.88,.78,-1.72],[n*.93,.83,-1.56],s),f.box([n*.93,.95,-.75],[n*1.05,1.05,-.6],F.PAINT)}return f.box([-.42,.42,-2.3],[.42,.56,-2.2],F.TIRE),f.box([-.88,.26,-2.36],[.88,.42,-2.12],F.TIRE),f.box([-.88,.28,2.12],[.88,.44,2.36],F.TIRE),f}function Ke(){const f=new j,e=18,t=.34,r=.22,a=.12;for(let n=0;n<e;n++){const s=n/e*Math.PI*2,l=(n+1)/e*Math.PI*2,c=(i,u,h)=>[h,Math.cos(i)*u,Math.sin(i)*u],o=[0,Math.cos((s+l)/2),Math.sin((s+l)/2)];f.quad([c(s,t,-a),c(l,t,-a),c(l,t,a),c(s,t,a)],F.TIRE,{n:o,uv:[[n/e*4,0],[(n+1)/e*4,0],[(n+1)/e*4,1],[n/e*4,1]]});for(const i of[-1,1]){f.quad([c(s,t,i*a),c(l,t,i*a),c(l,r,i*a*.9),c(s,r,i*a*.9)],F.TIRE,{n:[i,0,0]});const u=n%3===0?F.CHROME:F.PLAIN;f.quad([c(s,r,i*a*.9),c(l,r,i*a*.9),[i*a*.6,0,0],[i*a*.6,0,0]],(u===F.CHROME,F.CHROME),{n:[i,0,0]})}}return f}function ke(f,e=16,t=10,r=F.CLOTH){const a=new j,n=(c,o)=>Math.sign(c)*Math.pow(Math.abs(c),o),s=(c,o)=>{const i=-Math.PI/2+o/t*Math.PI,u=c/e*Math.PI*2,h=.5*n(Math.cos(i),f)*n(Math.cos(u),f),d=.5*n(Math.sin(i),f),p=.5*n(Math.cos(i),f)*n(Math.sin(u),f),v=2/f-1,x=se([n(2*h,v),n(2*d,v),n(2*p,v)]);return{p:[h,d,p],n:x,uv:[c/e*2,o/t*2]}},l=a.v.length/9;for(let c=0;c<=t;c++)for(let o=0;o<=e;o++){const i=s(o,c);a.vert(i.p,i.n,i.uv,r)}for(let c=0;c<t;c++)for(let o=0;o<e;o++){const i=l+c*(e+1)+o,u=i+e+1;a.i.push(i,u,i+1,i+1,u,u+1)}for(let c=0;c<a.i.length;c+=3){const[o,i,u]=[a.i[c],a.i[c+1],a.i[c+2]],h=p=>[a.v[p*9],a.v[p*9+1],a.v[p*9+2]],d=me($(h(i),h(o)),$(h(u),h(o)));ne(d,h(o))+ne(d,h(i))+ne(d,h(u))<0&&(a.i[c+1]=u,a.i[c+2]=i)}return a}function Ye(){const f=new j,e=16,t=4e3;for(let r=0;r<e;r++)for(let a=0;a<e;a++){const n=-t+2*t*a/e,s=-t+2*t*(a+1)/e,l=-t+2*t*r/e,c=-t+2*t*(r+1)/e;f.quad([[n,0,l],[s,0,l],[s,0,c],[n,0,c]],F.WATER,{n:[0,1,0]})}return f}const Ce={MATTE:39},X=10,$e=(f,e)=>[f[0]-e[0],f[1]-e[1],f[2]-e[2]],ae=(f,e)=>[f[1]*e[2]-f[2]*e[1],f[2]*e[0]-f[0]*e[2],f[0]*e[1]-f[1]*e[0]],xe=f=>{const e=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/e,f[1]/e,f[2]/e]},Xe=(f,e)=>[(f[0]+e[0])/2,(f[1]+e[1])/2,(f[2]+e[2])/2];function oe(f,e,t,r=12,a=!0){const n=s=>{const[l,c,o,i]=s,u=(c+o)/2,h=(o-c)/2,d=[];for(let p=0;p<r;p++){const v=p/r*Math.PI*2,x=Math.cos(v),y=Math.sin(v);d.push([i*Math.sign(x)*Math.pow(Math.abs(x),.55),u+h*Math.sign(y)*Math.pow(Math.abs(y),.55),l])}return d};for(let s=0;s+1<e.length;s++){const l=n(e[s]),c=n(e[s+1]),o=[0,(e[s][1]+e[s][2]+e[s+1][1]+e[s+1][2])/4,(e[s][0]+e[s+1][0])/2];for(let i=0;i<r;i++){const u=(i+1)%r;f.quad([l[i],l[u],c[u],c[i]],t,{inside:o,uv:[[i/r*3,e[s][0]],[(i+1)/r*3,e[s][0]],[(i+1)/r*3,e[s+1][0]],[i/r*3,e[s+1][0]]]})}}if(a)for(const[s,l]of[[e[0],-1],[e[e.length-1],1]]){const c=n(s),o=[0,(s[1]+s[2])/2,s[0]];for(let i=0;i<r;i++)f.quad([o,c[i],c[(i+1)%r],o],t,{n:[0,0,l]})}}function N(f,e,t,r,a,n,s=!0){const l=xe($e(t,e)),c=xe(Math.abs(l[1])<.9?ae(l,[0,1,0]):ae(l,[1,0,0])),o=ae(l,c),i=(h,d)=>[0,1,2].map(p=>h[p]+(c[p]*Math.cos(d)+o[p]*Math.sin(d))*r),u=Xe(e,t);for(let h=0;h<a;h++){const d=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2;f.quad([i(e,d),i(e,p),i(t,p),i(t,d)],n,{inside:u}),s&&(f.quad([e,i(e,d),i(e,p),e],n,{n:l.map(v=>-v)}),f.quad([t,i(t,d),i(t,p),t],n,{n:l}))}}function We(f,e,t,r,a=12,n=8){const s=f.v.length/9;for(let l=0;l<=n;l++)for(let c=0;c<=a;c++){const o=-Math.PI/2+l/n*Math.PI,i=c/a*Math.PI*2,u=[Math.cos(o)*Math.cos(i),Math.sin(o),Math.cos(o)*Math.sin(i)];f.vert([e[0]+u[0]*t[0],e[1]+u[1]*t[1],e[2]+u[2]*t[2]],xe([u[0]/t[0],u[1]/t[1],u[2]/t[2]]),[c/a,l/n],r)}for(let l=0;l<n;l++)for(let c=0;c<a;c++){const o=s+l*(a+1)+c,i=o+a+1;f.i.push(o,o+1,i,o+1,i+1,i)}}function Oe(f,e,t,r,a,n,s){const l=[e(t,-a,-n),e(r,-a,-n),e(r,a,-n),e(t,a,-n),e(t,-a,n),e(r,-a,n),e(r,a,n),e(t,a,n)],c=[[4,5,6,7],[0,1,2,3],[0,1,5,4],[3,2,6,7],[1,2,6,5],[0,3,7,4]];for(const o of c)f.quad(o.map(i=>l[i]),F.TIRE,{inside:s})}function Ze(){const f=new j,e=Ce.MATTE,t=F.TIRE;oe(f,[[-5.35,1.08,1.5,.16],[-5,.92,1.85,.44],[-4.2,.8,2.05,.58],[-3,.78,2.12,.62],[-1.5,.8,2.28,.72],[0,.86,2.5,.86],[1.6,.96,2.58,.86],[2.8,1.2,2.45,.6],[3.8,1.55,2.35,.36],[6.5,1.8,2.3,.26],[8.8,1.95,2.3,.19]],e,14),oe(f,[[-4.35,1.95,2.02,.42],[-3.7,1.98,2.5,.5],[-2.45,2,2.56,.52],[-2.25,2.05,2.58,.5]],F.GLASS,12),oe(f,[[-2.25,2.1,2.72,.5],[-1.1,2.2,2.95,.53],[-.3,2.3,2.95,.5],[.2,2.42,2.55,.42]],F.GLASS,12);for(const a of[-3.05,-2.25,-1.2])f.box([-.54,2,a-.04],[.54,a<-2?2.6:2.98,a+.04],e);for(const a of[-1,1]){N(f,[a*.98,2.25,-.5],[a*.98,2.25,2.3],.46,14,e),N(f,[a*.98,2.25,-.56],[a*.98,2.25,-.5],.36,14,t),N(f,[a*1,2.3,2.3],[a*1.35,2.45,2.9],.22,10,t),f.box([a>0?.7:-2.75,1.52,-.7],[a>0?2.75:-.7,1.66,.5],e),N(f,[a*1.5,1.1,-1.35],[a*1.5,1.1,.65],.32,14,e),f.box([a*1.5-.06,1.42,-.4],[a*1.5+.06,1.55,.2],e);for(let n=0;n<7;n++){const s=n/7*Math.PI*2,l=a*1.5+Math.cos(s)*.18,c=1.1+Math.sin(s)*.18;N(f,[l,c,-1.37],[l,c,-1.33],.06,6,t,!1)}f.box([a*2.42-.05,1.3,-.9],[a*2.42+.05,1.53,.6],e);for(const n of[-.13,.13])for(const s of[1.12,1.38])N(f,[a*2.42+n,s,-1.1],[a*2.42+n,s,.7],.085,8,e),N(f,[a*2.42+n,s,-1.25],[a*2.42+n,s,-1.1],.05,8,t);f.box([a*.6-.06,.4,-1.66],[a*.6+.06,1,-1.54],X),f.box([Math.min(a*.6,a*1.12)-.04,.3,-1.64],[Math.max(a*.6,a*1.12)+.04,.42,-1.56],X),N(f,[a*1,.36,-1.6],[a*1.24,.36,-1.6],.36,16,t)}N(f,[0,2.5,.25],[0,3.35,.25],.2,12,X),f.box([-.35,2.45,-.1],[.35,2.75,.9],e),We(f,[0,1.22,-5.38],[.36,.38,.34],t),f.box([-.28,1.15,-5.78],[.28,1.35,-5.62],F.GLASS),N(f,[0,.72,-3.55],[0,.86,-3.55],.24,12,t);const r=[[8.2,2.25],[8.75,4.55],[9.25,4.55],[9.15,1.95]];for(const a of[-1,1])f.quad(r.map(([n,s])=>[a*.08,s,n]),e,{n:[a,0,0]});for(let a=0;a<4;a++){const[n,s]=r[a],[l,c]=r[(a+1)%4];f.quad([[-.08,s,n],[.08,s,n],[.08,c,l],[-.08,c,l]],e,{inside:[0,3.2,8.8]})}return f.box([-1.65,2.02,8.55],[1.65,2.1,9.2],e),f.box([.05,4.1,8.85],[.3,4.4,9.15],e),f.box([-.05,.3,8],[.05,1.95,8.1],X),N(f,[-.1,.25,8.05],[.1,.25,8.05],.25,12,t),f}function Je(){const f=new j;for(let e=0;e<4;e++){const t=e/4*Math.PI*2,r=Math.cos(t),a=Math.sin(t);Oe(f,(n,s,l)=>[r*n-a*s,l,a*n+r*s],.35,7.3,.27,.035,[r*3.8,0,a*3.8])}return N(f,[0,-.15,0],[0,.12,0],.42,12,X),f}function Qe(){const f=new j;for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.3,r=Math.cos(t),a=Math.sin(t);Oe(f,(n,s,l)=>[l,r*n-a*s,a*n+r*s],.12,1.45,.13,.025,[0,r*.8,a*.8])}return N(f,[-.08,0,0],[.08,0,0],.14,10,X),f}function et(){const f=new j;return f.box([-.17,-.2,-.45],[.17,.08,.25],Ce.MATTE),N(f,[0,-.07,-.45],[0,-.07,-1.85],.045,8,X),N(f,[0,-.07,-1],[0,-.07,-1.15],.07,8,F.TIRE),f}const Te=`diagnostic(off, derivative_uniformity);\r
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
`,tt=`// Scene geometry: depth prepass, shadow pass and the main PBR forward pass.\r
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
@group(1) @binding(15) var signTex: texture_2d<f32>; // 看板の写真アトラス (マテリアル 58、uv = アトラス座標)\r
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
    case 59u: { layer = 0; uv = wpos.xz * 0.25; } // タイヤ痕 (下地のアスファルトを暗くする)\r
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
    case 59u: { // タイヤ痕: uv.x = 濃さ、uv.y = 1 なら街のアスファルト (45 と同じ色合い)\r
      if (uvIn.y > 0.5) { s.albedo = mix(vec3f(dot(s.albedo, vec3f(0.3333))), s.albedo, 0.55) * 3.0; }\r
      let k = uvIn.x * (0.75 + 0.25 * vnoise(wpos.xz * vec2f(9.0, 9.0), 5u));\r
      s.albedo *= 1.0 - 0.78 * k; s.rough = mix(s.rough, s.rough * 0.7, k); s.metal = 0.0;\r
    }\r
    case 60u, 61u: { // ウインカー: 消灯時は暗い橙のレンズ、点灯時は強く光る\r
      let on = select(I.extra.z, I.extra.w, id == 61u);\r
      s.albedo = vec3f(0.35, 0.14, 0.01); s.rough = 0.15; s.metal = 0.0; nts = vec3f(0.0, 0.0, 1.0);\r
      s.emissive = vec3f(1.0, 0.42, 0.02) * on * (6.0 + 40.0 * night);\r
    }\r
    case 58u: { // 看板の写真 (ストリートビューから切り出した正面像)。夜は内照式として光らせる\r
      s.albedo = textureSample(signTex, matSamp, uvIn).rgb * 0.9; s.rough = 0.45; s.metal = 0.0;\r
      nts = vec3f(0.0, 0.0, 1.0);\r
      s.emissive = s.albedo * night * 2.5;\r
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
`,rt=`// Physically based single-scattering atmosphere (Rayleigh + Mie) rendered into an equirect LUT,
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
`,nt=`// Post-processing: SSAO, temporal AA, bloom, tonemapping (ACES) + composite.\r
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
`,st=`// Procedural, tileable PBR material textures generated on the GPU at startup.\r
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
`,it=`// Screen-space reflections + screen-space diffuse GI (half resolution), then a full-res resolve.\r
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
`,Se=`// ---- Software ray tracing core: two-level BVH traversal (static world BLAS + per-frame TLAS of dynamic instances).
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
`,at=`// Ray-traced / path-traced indirect lighting (compute, reduced resolution).
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
`,be=1024,ye=5,ot=1+be*4+be*ye;function ct(f,e){const t=new Uint32Array(e.buffer,e.byteOffset,e.length),r=Math.min(f.length,be);if(r===0)return t[0]=0,t[1]=0,1;const a=1+2*(2*r-1);t[0]=2*r-1,t[1]=a,t[2]=0,t[3]=0;const n=new Uint32Array(r);for(let o=0;o<r;o++)n[o]=o;const s=(o,i)=>f[o].box[i]+f[o].box[i+3];let l=0;const c=(o,i,u)=>{const h=(1+u*2)*4;let d=1/0,p=1/0,v=1/0,x=-1/0,y=-1/0,k=-1/0;for(let T=o;T<i;T++){const g=f[n[T]].box;d=Math.min(d,g[0]),p=Math.min(p,g[1]),v=Math.min(v,g[2]),x=Math.max(x,g[3]),y=Math.max(y,g[4]),k=Math.max(k,g[5])}if(e[h]=d,e[h+1]=p,e[h+2]=v,e[h+4]=x,e[h+5]=y,e[h+6]=k,i-o===1){t[h+3]=n[o],t[h+7]=1;return}const P=[x-d,y-p,k-v],I=P[0]>=P[1]&&P[0]>=P[2]?0:P[1]>=P[2]?1:2,w=Array.from(n.subarray(o,i)).sort((T,g)=>s(T,I)-s(g,I));n.set(w,o);const m=o+i>>1,b=l;l+=2,t[h+3]=b,t[h+7]=0,c(o,m,b),c(m,i,b+1)};l=1,c(0,r,0);for(let o=0;o<r;o++){const i=(a+o*ye)*4,u=f[o].inv;e[i]=u[0],e[i+1]=u[4],e[i+2]=u[8],e[i+3]=u[12],e[i+4]=u[1],e[i+5]=u[5],e[i+6]=u[9],e[i+7]=u[13],e[i+8]=u[2],e[i+9]=u[6],e[i+10]=u[10],e[i+11]=u[14],t[i+12]=f[o].root,t[i+13]=f[o].flags,t[i+14]=0,t[i+15]=0,e.set(f[o].color,i+16)}return a+r*ye}const U=13,R={PELVIS:0,CHEST:1,HEAD:2,LUA:3,LFA:4,RUA:5,RFA:6,LTH:7,LSH:8,LFT:9,RTH:10,RSH:11,RFT:12},lt=[-1,0,1,1,3,1,5,0,7,8,0,10,11],Pe=[[0,.97,0],[0,1.16,0],[0,1.5,0],[-.19,1.43,0],[-.21,1.15,0],[.19,1.43,0],[.21,1.15,0],[-.095,.93,0],[-.1,.51,0],[-.1,.09,0],[.095,.93,0],[.1,.51,0],[.1,.09,0]],C={SKIN:33,SHIRT:34,PANTS:35,SHOES:36,HAIR:37,FACE:38},O=f=>({j:[f],w:[1]}),K=(f,e,t)=>({j:[f,e],w:[1-t,t]}),Y=(f,e,t)=>{const r=Math.min(1,Math.max(0,(t-f)/(e-f)));return r*r*(3-2*r)};class ut{buf=[];verts=[];idx=[];tube(e,t,r,a){const n=this.verts.length;for(let c=0;c<e.length;c++){const o=e[c],i=e[Math.max(0,c-1)].c,u=e[Math.min(e.length-1,c+1)].c;let h=o.axis??re([u[0]-i[0],u[1]-i[1],u[2]-i[2]]);_e(h)<1e-6&&(h=[0,1,0]);const d=re(Math.abs(h[0])<.9?te(h,[1,0,0]):te(h,[0,0,1])),p=te(h,d);for(let v=0;v<=t;v++){const x=v/t*Math.PI*2,y=Math.cos(x),k=Math.sin(x),P=[p[0]*y*o.rx+d[0]*k*o.rz,p[1]*y*o.rx+d[1]*k*o.rz,p[2]*y*o.rx+d[2]*k*o.rz],I=re([p[0]*y/o.rx+d[0]*k/o.rz,p[1]*y/o.rx+d[1]*k/o.rz,p[2]*y/o.rx+d[2]*k/o.rz]);this.verts.push({p:[o.c[0]+P[0],o.c[1]+P[1],o.c[2]+P[2]],n:I,uv:[v/t*2,o.c[1]*4],mat:o.mat,inf:o.inf})}}const s=t+1;for(let c=0;c+1<e.length;c++)for(let o=0;o<t;o++){const i=n+c*s+o,u=i+s;this.tri(i,u,i+1),this.tri(i+1,u,u+1)}const l=(c,o)=>{const i=e[c],u=this.verts.length;this.verts.push({p:i.c,n:[0,o,0],uv:[0,0],mat:i.mat,inf:i.inf});for(let h=0;h<t;h++)this.tri(u,n+c*s+h,n+c*s+h+1)};r&&l(0,-1),a&&l(e.length-1,1)}ellipsoid(e,t,r,a,n=14,s=10,l=-1){const c=this.verts.length;for(let o=0;o<=s;o++){const i=-Math.PI/2+o/s*Math.PI,u=Math.sin(i),h=l>-1?Math.max(u,l):u,d=Math.sqrt(Math.max(0,1-h*h));for(let p=0;p<=n;p++){const v=p/n*Math.PI*2,x=[Math.cos(v)*d,h,Math.sin(v)*d];this.verts.push({p:[e[0]+x[0]*t[0],e[1]+x[1]*t[1],e[2]+x[2]*t[2]],n:re([x[0]/t[0],x[1]/t[1],x[2]/t[2]]),uv:[p/n,o/s],mat:a,inf:r})}}for(let o=0;o<s;o++)for(let i=0;i<n;i++){const u=c+o*(n+1)+i,h=u+n+1;this.tri(u,h,u+1),this.tri(u+1,h,h+1)}}tri(e,t,r){const a=c=>this.verts[c].p,n=c=>this.verts[c].n,s=te(Be(a(t),a(e)),Be(a(r),a(e))),l=[n(e)[0]+n(t)[0]+n(r)[0],n(e)[1]+n(t)[1]+n(r)[1],n(e)[2]+n(t)[2]+n(r)[2]];dt(s,l)>=0?this.idx.push(e,t,r):this.idx.push(e,r,t)}pack(){const e=new ArrayBuffer(this.verts.length*44),t=new DataView(e);return this.verts.forEach((r,a)=>{const n=a*44;[...r.p,...r.n,...r.uv].forEach((o,i)=>t.setFloat32(n+i*4,o,!0)),t.setUint32(n+32,r.mat,!0);const s=r.w??r.inf.w,l=s.reduce((o,i)=>o+i,0)||1,c=s.map(o=>Math.round(o/l*255));c[0]+=255-c.reduce((o,i)=>o+i,0);for(let o=0;o<4;o++)t.setUint8(n+36+o,r.inf.j[o]??0),t.setUint8(n+40+o,o<c.length?c[o]:0)}),{vb:e,ib:new Uint32Array(this.idx)}}}function ft(){const f=new ut,e=14,t=[[.84,.13,.09],[.9,.165,.105],[.98,.17,.11],[1.06,.152,.1],[1.14,.15,.1],[1.24,.17,.11],[1.34,.185,.112],[1.42,.18,.1],[1.47,.12,.08],[1.5,.055,.05],[1.56,.048,.048],[1.6,.045,.045]];f.tube(t.map(([r,a,n])=>({c:[0,r,r>1.3?.005:0],rx:a,rz:n,inf:r<1?O(R.PELVIS):r<1.2?K(R.PELVIS,R.CHEST,Y(1,1.2,r)):r<1.5?O(R.CHEST):K(R.CHEST,R.HEAD,Y(1.5,1.58,r)),mat:r<1.03?C.PANTS:r<1.49?C.SHIRT:C.SKIN})),e,!0,!1),f.ellipsoid([0,1.675,-.005],[.083,.112,.098],O(R.HEAD),C.FACE,24,18),f.ellipsoid([0,1.705,.008],[.088,.09,.104],O(R.HEAD),C.HAIR,16,8,-.05),f.ellipsoid([0,1.665,-.1],[.014,.025,.02],O(R.HEAD),C.SKIN,6,4);for(const r of[-1,1]){const a=r<0,n=a?R.LUA:R.RUA,s=a?R.LFA:R.RFA,l=a?R.LTH:R.RTH,c=a?R.LSH:R.RSH,o=a?R.LFT:R.RFT,i=[[1.5,.03,.032],[1.485,.05,.053],[1.47,.058,.06],[1.4,.052,.054],[1.3,.045,.047],[1.2,.04,.042],[1.15,.037,.038],[1.06,.038,.04],[.97,.03,.033],[.9,.027,.03]];f.tube(i.map(([h,d,p])=>({c:[r*(.19+(1.47-h)*.035),h,0],rx:d,rz:p,inf:h>1.4?K(R.CHEST,n,Y(1.47,1.4,h)):h>1.19?O(n):h>1.11?K(n,s,Y(1.19,1.11,h)):O(s),mat:h>1.27?C.SHIRT:C.SKIN})),10,!0,!1),f.ellipsoid([r*.222,.85,-.005],[.026,.062,.042],O(s),C.SKIN,8,6);const u=[[.95,.088,.095],[.86,.083,.088],[.72,.07,.075],[.58,.056,.06],[.51,.052,.055],[.44,.055,.06],[.3,.05,.055],[.16,.038,.042],[.1,.036,.04]];f.tube(u.map(([h,d,p])=>({c:[r*.097,h,h<.5&&h>.25?.008:0],rx:d,rz:p,inf:h>.88?K(R.PELVIS,l,Y(.97,.88,h)):h>.56?O(l):h>.46?K(l,c,Y(.56,.46,h)):h>.12?O(c):K(c,o,Y(.12,.08,h)),mat:C.PANTS})),12,!1,!0),f.ellipsoid([r*.1,.055,-.045],[.048,.058,.125],O(o),C.SHOES,10,6,-.6)}return f}const ht={sub:(f,e)=>[f[0]-e[0],f[1]-e[1],f[2]-e[2]]};function Be(f,e){return ht.sub(f,e)}function dt(f,e){return f[0]*e[0]+f[1]*e[1]+f[2]*e[2]}function te(f,e){return[f[1]*e[2]-f[2]*e[1],f[2]*e[0]-f[0]*e[2],f[0]*e[1]-f[1]*e[0]]}function _e(f){return Math.hypot(f[0],f[1],f[2])}function re(f){const e=_e(f)||1;return[f[0]/e,f[1]/e,f[2]/e]}function vt(f,e,t,r,a){const n=Array.from({length:U},()=>[0,0,0]),s=r===2?0:Math.min(1,t/2.5),l=Math.min(1,Math.max(0,(t-3)/3)),c=Math.sin(e),o=Math.cos(e),i=r===2?0:Math.abs(o)*.035*s*(1+l)-.02*s,u=.05*s+.2*l;n[R.PELVIS]=[-c*.12*s,0,o*.04*s],n[R.CHEST]=[c*.2*s,-u,-o*.03*s],n[R.HEAD]=[-c*.08*s,u*.6,0];for(const p of[-1,1]){const v=p<0,x=p*c*(.5*s+.45*l);n[v?R.LUA:R.RUA]=[0,x,p*(.07+.05*l)],n[v?R.LFA:R.RFA]=[0,.15+.25*s+1*l,0];const y=v?e:e+Math.PI,P=Math.sin(y)*(.45*s+.4*l),I=-Math.max(0,Math.sin(y+1.3))*(.85*s+.8*l)-.03;n[v?R.LTH:R.RTH]=[0,P,0],n[v?R.LSH:R.RSH]=[0,I,0],n[v?R.LFT:R.RFT]=[0,-I*.45-P*.35,0]}r===3&&(n[R.LTH][1]=.35,n[R.RTH][1]=.1,n[R.LSH][1]=-.6,n[R.RSH][1]=-.4),r===2&&(n[R.LUA]=[0,.2,-1.1],n[R.RUA]=[0,-.1,1.2],n[R.LSH][1]=-.3);const h=[],d=new Float32Array(16);for(let p=0;p<U;p++){const v=lt[p],x=Pe[p],y=v>=0?Pe[v]:[0,0,0],k=[x[0]-y[0],x[1]-y[1]+(p===0?i:0),x[2]-y[2]],P=B.trs(k,n[p][0],n[p][1],n[p][2],[1,1,1],d);h[p]=B.mul(v>=0?h[v]:f,P);const I=B.trs([-x[0],-x[1],-x[2]],0,0,0);a.set(B.mul(h[p],I),p*16)}}const G={CAR:0,WHEEL:1,SBOX:2,SPHERE:3,WATER:4,HELI:5,ROTOR:6,TROTOR:7,GUN:8},pt=9,ce=18,V=512,Me=2048,mt=256,gt=128,le=7,J=4096,Q=44,Ie=96,Re=204,Le=16,W=6,z="rgba16float",xt=["Raster","Ray tracing","Path tracing"],bt=1,yt=2,ue=1e3,ee=6e3,wt={8:3.6,9:3.6,13:4.2,10:2.2,11:2.4,29:1.6,44:.9};class kt{device;gpu;worldVB;worldIB;chunks=[];dynVB;dynIB;meshes=[];frameUB;frameData=new Float32Array(Re);instBuf;instData=new Float32Array(J*Q);shadowUB;boneBuf;boneData=new Float32Array(Ie*U*2*16);skinVB;skinIB;skinCount=0;skinFirst=0;skinN=0;skinPending=[];prevBones=new Map;lampBuf;lampGrid;spotBuf;texA;texB;shadowTex;envTex;hmapTex;depth;hdr;vel;aoRaw;ao;hist=[];bloom;gbuf;alb;ssr;ssgi;hdr2;ssfxBGL;tempBGL;ssrHist=[];giHist=[];ssHistIdx=0;lumBuf;lumPending=!1;frameBGL;sceneBGL;shadowBGL;texBGL;postBGL;pipes={};frameBG;sceneBG;shadowBG;linSamp;matSamp;envSamp;cmpSamp;width=0;height=0;renderScale=1;frameIndex=0;histIdx=0;prevVP=B.create();prevModels=new Map;batches=[];instCount=1;pending=[];exposure=1;avgLum=.2;aoEnabled=!0;bloomEnabled=!0;taaEnabled=!0;ssfxEnabled=!0;ssfxMode=1;stats={draws:0,tris:0};gpuMs=0;gpuPending=!1;envFrame=0;rtMode=0;rtStatus="";rtScale=.5;ptBounces=3;rtResolveMode=1;rtSamples=0;rtReady=!1;rtBuilding=!1;worldGeom=null;dynGeoms=[];meshRoots=[];meshBounds=[];boneCentroids=null;rtNodesBuf;rtTrisBuf;rtTlasBuf;rtTlasData=new Float32Array(ot*4);rtBGL;rtPipe;rtParamsUB;rtHist=[];rtDisp=[];rtHistIdx=0;rtSkinFirst=J;signTex;get rtActive(){return this.rtMode>0&&this.rtReady}worldIdx=null;worldVerts=null;props=[];debris=new Map;skidVB;skidIB;skidCursor=0;skidCount=0;skidData=new Float32Array(4*9);constructor(e){this.gpu=e;const t=this.device=e.device;this.frameUB=t.createBuffer({size:Re*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.instBuf=t.createBuffer({size:J*Q*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.shadowUB=t.createBuffer({size:256*3,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.boneBuf=t.createBuffer({size:this.boneData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.spotBuf=t.createBuffer({size:Le*32,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lumBuf=t.createBuffer({size:256*64,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),this.shadowTex=t.createTexture({size:[Me,Me,3],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.envTex=t.createTexture({size:[mt,gt],format:z,mipLevelCount:le,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.linSamp=t.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.matSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",maxAnisotropy:8}),this.envSamp=t.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"clamp-to-edge"}),this.cmpSamp=t.createSampler({compare:"less",magFilter:"linear",minFilter:"linear"});const r=B.create();this.instData.set(r,0),this.instData.set(r,16),this.instData.set([1,1,1,-1,0,0,0,0,0,0,0,0],32);const a=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,n=GPUShaderStage.FRAGMENT;this.frameBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:a|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:a,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.shadowBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",hasDynamicOffset:!0}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.sceneBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:n,texture:{viewDimension:"2d-array"}},{binding:1,visibility:n,texture:{viewDimension:"2d-array"}},{binding:2,visibility:n,sampler:{}},{binding:3,visibility:n,texture:{sampleType:"depth",viewDimension:"2d-array"}},{binding:4,visibility:n,sampler:{type:"comparison"}},{binding:5,visibility:n,texture:{}},{binding:6,visibility:n,sampler:{}},{binding:7,visibility:n,texture:{}},{binding:8,visibility:n,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:n,buffer:{type:"read-only-storage"}},{binding:10,visibility:n,texture:{sampleType:"uint"}},{binding:11,visibility:n,buffer:{type:"read-only-storage"}},{binding:12,visibility:n,buffer:{type:"read-only-storage"}},{binding:13,visibility:n,buffer:{type:"read-only-storage"}},{binding:14,visibility:n,buffer:{type:"read-only-storage"}},{binding:15,visibility:n,texture:{}}]});const s=GPUShaderStage.COMPUTE;this.rtBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:s,buffer:{type:"read-only-storage"}},{binding:1,visibility:s,buffer:{type:"read-only-storage"}},{binding:2,visibility:s,buffer:{type:"read-only-storage"}},{binding:3,visibility:s,texture:{viewDimension:"2d-array"}},{binding:4,visibility:s,sampler:{}},{binding:5,visibility:s,texture:{}},{binding:6,visibility:s,texture:{sampleType:"depth"}},{binding:7,visibility:s,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:s,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:s,texture:{sampleType:"unfilterable-float"}},{binding:10,visibility:s,texture:{sampleType:"unfilterable-float"}},{binding:11,visibility:s,texture:{sampleType:"unfilterable-float"}},{binding:12,visibility:s,storageTexture:{access:"write-only",format:"rgba32float"}},{binding:13,visibility:s,storageTexture:{access:"write-only",format:"rgba32float"}},{binding:14,visibility:s,storageTexture:{access:"write-only",format:"rgba16float"}},{binding:15,visibility:s,storageTexture:{access:"write-only",format:"rgba16float"}},{binding:16,visibility:s,buffer:{type:"uniform"}}]}),this.rtParamsUB=t.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.rtNodesBuf=t.createBuffer({size:32,usage:l}),t.queue.writeBuffer(this.rtNodesBuf,0,new Float32Array([1e30,1e30,1e30,0,-1e30,-1e30,-1e30,0])),this.rtTrisBuf=t.createBuffer({size:48,usage:l}),this.rtTlasBuf=t.createBuffer({size:this.rtTlasData.byteLength,usage:l}),this.skidVB=t.createBuffer({size:ee*4*36,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});const c=new Uint32Array(ee*6);for(let o=0;o<ee;o++)c.set([o*4,o*4+1,o*4+2,o*4,o*4+2,o*4+3],o*6);this.skidIB=t.createBuffer({size:c.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.skidIB,0,c),this.signTex=t.createTexture({size:[1,1],format:"rgba8unorm-srgb",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.signTex},new Uint8Array([200,200,200,255]),{bytesPerRow:4},[1,1]),this.texBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:n,texture:{}},{binding:1,visibility:n,sampler:{}}]}),this.postBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:n,texture:{}},{binding:1,visibility:n,texture:{}},{binding:2,visibility:n,texture:{}},{binding:3,visibility:n,texture:{sampleType:"depth"}},{binding:4,visibility:n,sampler:{}}]}),this.ssfxBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:n,texture:{}},{binding:1,visibility:n,texture:{}},{binding:2,visibility:n,texture:{}},{binding:3,visibility:n,texture:{sampleType:"depth"}},{binding:4,visibility:n,sampler:{}},{binding:5,visibility:n,texture:{}},{binding:6,visibility:n,sampler:{}}]}),this.tempBGL=t.createBindGroupLayout({entries:[{binding:0,visibility:n,texture:{}},{binding:1,visibility:n,texture:{}},{binding:2,visibility:n,texture:{}},{binding:3,visibility:n,texture:{sampleType:"depth"}},{binding:4,visibility:n,sampler:{}},{binding:5,visibility:n,texture:{}},{binding:6,visibility:n,texture:{}}]}),this.buildDynamicMeshes(),this.createPipelines()}module(e,t){const r=this.device.createShaderModule({code:Te+`
`+e,label:t});return r.getCompilationInfo().then(a=>{for(const n of a.messages)n.type==="error"&&console.error(`[${t}] ${n.lineNum}:${n.linePos} ${n.message}`)}),r}createPipelines(){const e=this.device,t=this.module(tt+`
`+Se,"scene"),r=this.module(rt,"sky"),a=this.module(nt,"post"),n=[{arrayStride:36,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"}]}],s=(...d)=>e.createPipelineLayout({bindGroupLayouts:d}),l=s(this.frameBGL,this.sceneBGL);this.pipes.shadow=e.createRenderPipeline({layout:s(this.shadowBGL),vertex:{module:t,entryPoint:"vsShadow",buffers:n},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.prepass=e.createRenderPipeline({layout:s(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:n},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.prepassNoCull=e.createRenderPipeline({layout:s(this.frameBGL),vertex:{module:t,entryPoint:"vsDepth",buffers:n},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}});const c=d=>({layout:l,vertex:{module:t,entryPoint:"vsMain",buffers:n},fragment:{module:t,entryPoint:"fsMain",targets:[{format:z},{format:"rg16float"},{format:z},{format:"rgba8unorm"}]},primitive:{cullMode:d},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater-equal"}});this.pipes.main=e.createRenderPipeline(c("back"));const o=[{arrayStride:44,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"},{shaderLocation:3,offset:32,format:"uint32"},{shaderLocation:4,offset:36,format:"uint8x4"},{shaderLocation:5,offset:40,format:"unorm8x4"}]}];this.pipes.skinMain=e.createRenderPipeline({...c("back"),vertex:{module:t,entryPoint:"vsSkinMain",buffers:o}}),this.pipes.skinDepth=e.createRenderPipeline({layout:s(this.frameBGL),vertex:{module:t,entryPoint:"vsSkinDepth",buffers:o},primitive:{cullMode:"back"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"greater"}}),this.pipes.skinShadow=e.createRenderPipeline({layout:s(this.shadowBGL),vertex:{module:t,entryPoint:"vsSkinShadow",buffers:o},primitive:{cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:2.5}}),this.pipes.mainNoCull=e.createRenderPipeline(c("none")),this.pipes.sky=e.createRenderPipeline({layout:s(this.frameBGL,this.texBGL),vertex:{module:r,entryPoint:"vsFull"},fragment:{module:r,entryPoint:"fsSky",targets:[{format:z},{format:"rg16float"},{format:z},{format:"rgba8unorm"}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"equal"}}),this.pipes.lut=e.createRenderPipeline({layout:s(this.frameBGL),vertex:{module:r,entryPoint:"vsFull"},fragment:{module:r,entryPoint:"fsLut",targets:[{format:z}]}}),this.pipes.envDown=e.createRenderPipeline({layout:s(this.frameBGL,this.texBGL),vertex:{module:r,entryPoint:"vsFull"},fragment:{module:r,entryPoint:"fsEnvDown",targets:[{format:z}]}});const i=(d,p,v)=>e.createRenderPipeline({layout:s(this.frameBGL,this.postBGL),vertex:{module:a,entryPoint:"vsFull"},fragment:{module:a,entryPoint:d,targets:[{format:p,blend:v}]}});this.pipes.ssao=i("fsSSAO","r8unorm"),this.pipes.blurAO=i("fsBlurAO","r8unorm"),this.pipes.taa=i("fsTAA",z),this.pipes.bloomDown=i("fsBloomDown",z),this.pipes.bloomUp=i("fsBloomUp",z,{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}),this.pipes.composite=i("fsComposite",this.gpu.format);const u=this.module(it,"ssfx");this.pipes.ssfx=e.createRenderPipeline({layout:s(this.frameBGL,this.ssfxBGL),vertex:{module:u,entryPoint:"vsFull"},fragment:{module:u,entryPoint:"fsSsfx",targets:[{format:z},{format:z}]}}),this.pipes.ssTemporal=e.createRenderPipeline({layout:s(this.frameBGL,this.tempBGL),vertex:{module:u,entryPoint:"vsFull"},fragment:{module:u,entryPoint:"fsTemporal",targets:[{format:z},{format:z}]}});const h=this.module(at+`
`+Se,"rt");this.rtPipe=e.createComputePipeline({layout:s(this.frameBGL,this.rtBGL),compute:{module:h,entryPoint:"main"}}),this.pipes.resolve=e.createRenderPipeline({layout:s(this.frameBGL,this.postBGL),vertex:{module:u,entryPoint:"vsFull"},fragment:{module:u,entryPoint:"fsResolve",targets:[{format:z}]}})}buildDynamicMeshes(){const e=[];e[G.CAR]=je(),e[G.WHEEL]=Ke(),e[G.SBOX]=ke(.45,12,8),e[G.SPHERE]=ke(1,14,10),e[G.WATER]=Ye(),e[G.HELI]=Ze(),e[G.ROTOR]=Je(),e[G.TROTOR]=Qe(),e[G.GUN]=et();let t=0,r=0;for(const h of e)t+=h.v.length,r+=h.i.length;const a=new Float32Array(t),n=new Uint32Array(r);let s=0,l=0;for(let h=0;h<pt;h++){const d=e[h];a.set(d.v,s),n.set(d.i,l),this.meshes[h]={first:l,count:d.i.length,base:s/9},this.dynGeoms[h]=h===G.WATER?{verts:new Float32Array(0),idx:new Uint32Array(0)}:{verts:new Float32Array(d.v),idx:new Uint32Array(d.i)},s+=d.v.length,l+=d.i.length}this.dynVB=this.device.createBuffer({size:a.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.dynIB=this.device.createBuffer({size:n.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.dynVB,0,a),this.device.queue.writeBuffer(this.dynIB,0,n);const c=ft().pack();this.skinVB=this.device.createBuffer({size:c.vb.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.skinIB=this.device.createBuffer({size:c.ib.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.skinVB,0,c.vb),this.device.queue.writeBuffer(this.skinIB,0,c.ib),this.skinCount=c.ib.length;const o=new Uint32Array(c.vb),i=new Float32Array(c.vb),u=new Float64Array(U*4);for(let h=0;h+11<=o.length;h+=11){const d=o[h+9],p=o[h+10];let v=0,x=-1;for(let y=0;y<4;y++){const k=p>>>8*y&255;k>x&&(x=k,v=d>>>8*y&255)}v>=U||(u[v*4]+=i[h],u[v*4+1]+=i[h+1],u[v*4+2]+=i[h+2],u[v*4+3]++)}this.boneCentroids=new Float32Array(U*4);for(let h=0;h<U;h++){const d=u[h*4+3];d>0&&this.boneCentroids.set([u[h*4]/d,u[h*4+1]/d,u[h*4+2]/d,1],h*4)}}setRenderMode(e){this.rtMode=e,this.rtSamples=0,e>0&&!this.rtReady&&!this.rtBuilding&&this.buildBvh()}buildBvh(){if(!this.worldGeom){this.rtStatus="world not loaded";return}this.rtBuilding=!0,this.rtStatus="building BVH…";const e=new Worker(new URL(""+new URL("bvhWorker-BkZ09QbR.js",import.meta.url).href,import.meta.url),{type:"module"}),t=[{...this.worldGeom,stride:9},...this.dynGeoms.map(r=>({...r,stride:9}))];e.onmessage=r=>{e.terminate();const a=r.data,n=this.device,s=n.limits.maxStorageBufferBindingSize;if(a.nodes.byteLength>s||a.tris.byteLength>s){this.rtBuilding=!1,this.rtStatus=`BVH too large for this GPU (${(a.tris.byteLength/1048576).toFixed(0)} MB > ${(s/1048576).toFixed(0)} MB)`;return}this.rtNodesBuf.destroy(),this.rtTrisBuf.destroy();const l=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.rtNodesBuf=n.createBuffer({size:a.nodes.byteLength,usage:l}),this.rtTrisBuf=n.createBuffer({size:a.tris.byteLength,usage:l}),n.queue.writeBuffer(this.rtNodesBuf,0,a.nodes),n.queue.writeBuffer(this.rtTrisBuf,0,a.tris),this.meshRoots=a.roots.slice(1),this.meshBounds=a.bounds.slice(1),this.rtReady=!0,this.rtBuilding=!1,this.rtStatus=`BVH ${(a.triCount/1e3).toFixed(0)}k tris, ${(a.nodeCount/1e3).toFixed(0)}k nodes, ${((a.nodes.byteLength+a.tris.byteLength)/1048576).toFixed(0)} MB, built in ${a.ms.toFixed(0)} ms`,this.worldGeom=null,this.width>0&&this.makeSceneBG(),this.rtSamples=0},e.onerror=r=>{this.rtBuilding=!1,this.rtStatus=`BVH build failed: ${r.message}`,e.terminate()},e.postMessage({geoms:t})}updateTlas(e,t){const r=[],a=(c,o)=>{const i=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let u=0;u<8;u++){const h=c[u&1?3:0],d=c[u&2?4:1],p=c[u&4?5:2];for(let v=0;v<3;v++){const x=o[v]*h+o[4+v]*d+o[8+v]*p+o[12+v];x<i[v]&&(i[v]=x),x>i[v+3]&&(i[v+3]=x)}}return i};for(const c of e){if(c.mesh===G.WATER||r.length>=1023)continue;const o=this.meshBounds[c.mesh];if(!o)continue;const i=a(o,c.model);!(i[3]-i[0]<1e4)||i[3]-i[0]<1e-4||r.push({inv:B.invert(c.model),box:i,root:this.meshRoots[c.mesh],flags:c.color[3]===40?yt:0,color:[c.color[0],c.color[1],c.color[2],c.color[3]??-1]})}const n=this.meshBounds[G.SPHERE],s=this.boneCentroids;if(n&&s)for(const c of t){if(r.length>=1023)break;let o=1/0,i=1/0,u=1/0,h=-1/0,d=-1/0,p=-1/0;for(let g=0;g<U;g++){if(s[g*4+3]===0)continue;const S=g*16,L=s[g*4],A=s[g*4+1],D=s[g*4+2],E=c[S]*L+c[S+4]*A+c[S+8]*D+c[S+12],Z=c[S+1]*L+c[S+5]*A+c[S+9]*D+c[S+13],we=c[S+2]*L+c[S+6]*A+c[S+10]*D+c[S+14];o=Math.min(o,E),i=Math.min(i,Z),u=Math.min(u,we),h=Math.max(h,E),d=Math.max(d,Z),p=Math.max(p,we)}if(!(h>o))continue;const v=.1,x=(h-o)/2+v,y=(d-i)/2+v,k=(p-u)/2+v,P=[(n[3]-n[0])/2,(n[4]-n[1])/2,(n[5]-n[2])/2],I=[(n[3]+n[0])/2,(n[4]+n[1])/2,(n[5]+n[2])/2],w=x/P[0],m=y/P[1],b=k/P[2],T=new Float32Array([w,0,0,0,0,m,0,0,0,0,b,0,(o+h)/2-I[0]*w,(i+d)/2-I[1]*m,(u+p)/2-I[2]*b,1]);r.push({inv:B.invert(T),box:[o-v,i-v,u-v,h+v,d+v,p+v],root:this.meshRoots[G.SPHERE],flags:bt,color:[.3,.3,.3,24]})}const l=ct(r,this.rtTlasData);this.device.queue.writeBuffer(this.rtTlasBuf,0,this.rtTlasData,0,l*4)}async generateTextures(){const e=this.device,t=Math.log2(V)+1,r=()=>e.createTexture({size:[V,V,ce],format:"rgba8unorm",mipLevelCount:t,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});this.texA=r(),this.texB=r();const a=e.createShaderModule({code:Te+`
`+st,label:"texgen"});a.getCompilationInfo().then(p=>{for(const v of p.messages)v.type==="error"&&console.error(`[texgen] ${v.lineNum}: ${v.message}`)});const n=e.createComputePipeline({layout:"auto",compute:{module:a,entryPoint:"main"}}),s=["Asphalt026C","PavingStones130","Grass004","Ground093C","Concrete034","Bricks076C","Bark014","Gravel023","Metal032","Fabric061","Fabric003","Leather026"],l=e.createTexture({size:[V,V,s.length*3],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});let c=1;try{await Promise.all(s.flatMap((p,v)=>["c","n","r"].map(async(x,y)=>{const k=await fetch(`./textures/${p}_${x}.jpg`);if(!k.ok)throw new Error(`${p}_${x}`);const P=await createImageBitmap(await k.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"});e.queue.copyExternalImageToTexture({source:P},{texture:l,origin:[0,0,v*3+y]},[V,V])})))}catch(p){console.warn("[textures] photo set unavailable, using procedural only",p),c=0}const o=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(o,0,new Float32Array([c,0,0,0]));const i=e.createComputePipeline({layout:"auto",compute:{module:a,entryPoint:"mip"}}),u=e.createCommandEncoder(),h=(p,v)=>p.createView({dimension:"2d-array",baseMipLevel:v,mipLevelCount:1});let d=u.beginComputePass();d.setPipeline(n),d.setBindGroup(0,e.createBindGroup({layout:n.getBindGroupLayout(0),entries:[{binding:0,resource:h(this.texA,0)},{binding:1,resource:h(this.texB,0)},{binding:2,resource:l.createView({dimension:"2d-array"})},{binding:3,resource:{buffer:o}}]})),d.dispatchWorkgroups(V/8,V/8,ce),d.end();for(const p of[this.texA,this.texB])for(let v=1;v<t;v++){const x=Math.max(1,V>>v);d=u.beginComputePass(),d.setPipeline(i),d.setBindGroup(0,e.createBindGroup({layout:i.getBindGroupLayout(0),entries:[{binding:0,resource:h(p,v-1)},{binding:1,resource:h(p,v)}]})),d.dispatchWorkgroups(Math.ceil(x/8),Math.ceil(x/8),ce),d.end()}e.queue.submit([u.finish()]),await e.queue.onSubmittedWorkDone()}buildProps(e,t,r){const a=r.length/3,n=new Uint32Array(e.buffer,e.byteOffset,e.length);this.props=Array.from({length:a},()=>({tris:[],base:[0,1e9,0],knocked:!1}));const s=4,l=new Map;for(let i=0;i<a;i++){const u=Math.floor(r[i*3]/s)*4096+Math.floor(r[i*3+1]/s);l.has(u)||l.set(u,[]),l.get(u).push(i)}const c=new Set;for(let i=0;i<t.length;i+=3){const u=t[i],h=t[i+1],d=t[i+2],p=n[u*9+8]&255,v=wt[p];if(v===void 0&&p!==27)continue;const x=(e[u*9]+e[h*9]+e[d*9])/3,y=(e[u*9+2]+e[h*9+2]+e[d*9+2])/3,k=Math.floor(x/s),P=Math.floor(y/s);let I=-1,w=(p===27?9:v)**2;for(let g=k-2;g<=k+2;g++)for(let S=P-2;S<=P+2;S++)for(const L of l.get(g*4096+S)??[]){const A=r[L*3]-x,D=r[L*3+1]-y,E=A*A+D*D;E<w&&(w=E,I=L)}if(I<0)continue;if(p===27){c.add(I);continue}const m=r[I*3],b=r[I*3+1];if([u,h,d].some(g=>(e[g*9]-m)**2+(e[g*9+2]-b)**2>v*v*1.3))continue;const T=this.props[I];T.tris.push(i);for(const g of[u,h,d])T.base[1]=Math.min(T.base[1],e[g*9+1])}const o=[];for(let i=0;i<a;i++){const u=this.props[i];u.base[0]=r[i*3],u.base[2]=r[i*3+1],c.has(i)&&(u.tris=[],o.push(i))}return this.fixedProps=o,o}fixedProps=[];knockProp(e,t,r){const a=this.props[e],n=this.worldVerts,s=this.worldIdx;if(!a||a.knocked||!n||!s||(a.knocked=!0,!a.tris.length))return;const l=this.device,c=[...a.tris].sort((m,b)=>m-b);let o=c[0],i=c[0];const u=(m,b)=>l.queue.writeBuffer(this.worldIB,m*4,new Uint32Array(b-m+3));for(let m=1;m<=c.length;m++){const b=c[m];b!==i+3&&(u(o,i),o=b),i=b}const h=new Map,d=[],p=[];let v=0;for(const m of a.tris)for(let b=0;b<3;b++){const T=s[m+b];let g=h.get(T);if(g===void 0){g=h.size,h.set(T,g);const S=T*9;d.push(n[S]-a.base[0],n[S+1]-a.base[1],n[S+2]-a.base[2],n[S+3],n[S+4],n[S+5],n[S+6],n[S+7],n[S+8]),v=Math.max(v,n[S+1]-a.base[1])}p.push(g)}const x=l.createBuffer({size:d.length*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),y=l.createBuffer({size:p.length*4,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});l.queue.writeBuffer(x,0,new Float32Array(d)),l.queue.writeBuffer(y,0,new Uint32Array(p));const k=Math.hypot(t[0],t[1])||1,P=t[0]/k,I=t[1]/k,w=v>2.5;this.debris.set(e,{mesh:ue+e,vb:x,ib:y,count:p.length,pivot:[...a.base],axis:[I,0,-P],ang:.02,vel:Math.min(2.5,r*(w?.06:.25)),maxAng:w?Math.PI/2-.08:Math.PI/2,slide:w?[0,0]:[P*Math.min(3,r*.25),I*Math.min(3,r*.25)],t:0})}updateDebris(e){for(const[t,r]of this.debris){r.t+=e,(r.ang<r.maxAng||r.vel>0)&&(r.vel+=7.5*Math.sin(Math.max(r.ang,.02))*e,r.ang+=r.vel*e,r.ang>=r.maxAng&&(r.ang=r.maxAng,r.vel=Math.abs(r.vel)>.6?-r.vel*.25:0));const a=Math.min(1,r.t*2.5),n=[r.pivot[0]+r.slide[0]*a,r.pivot[1],r.pivot[2]+r.slide[1]*a];this.add(r.mesh,3e6+t,Tt(n,r.axis,r.ang),[1,1,1,-1],[0,0,0,0])}}addSkid(e,t,r){const a=this.skidData,n=new Uint32Array(a.buffer);for(let s=0;s<4;s++)a.set([e[s][0],e[s][1],e[s][2],0,1,0,t,r?1:0],s*9),n[s*9+8]=59;this.device.queue.writeBuffer(this.skidVB,this.skidCursor*4*36,a),this.skidCursor=(this.skidCursor+1)%ee,this.skidCount=Math.min(ee,this.skidCount+1)}setWorld(e){const t=this.device;this.worldGeom={verts:e.verts,idx:e.idx},this.worldVB=t.createBuffer({size:e.verts.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.worldIB=t.createBuffer({size:e.idx.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.worldVB,0,e.verts),t.queue.writeBuffer(this.worldIB,0,e.idx),this.chunks=[];for(let n=0;n<e.chunks.length;n+=8)this.chunks.push({first:e.chunks[n],count:e.chunks[n+1]});this.worldIdx=e.idx.slice(),this.worldVerts=e.verts,e.circles&&this.buildProps(e.verts,e.idx,e.circles),this.hmapTex=t.createTexture({size:[256,256],format:"r32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.hmapTex},e.hmap,{bytesPerRow:256*4},[256,256]);const r=e.lamps.length/4;this.lampBuf=t.createBuffer({size:Math.max(16,e.lamps.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t.queue.writeBuffer(this.lampBuf,0,e.lamps);const a=new Uint32Array(40*40*4).fill(4294967295);for(let n=0;n<40;n++)for(let s=0;s<40;s++){const l=-200+s*10+5,c=-200+n*10+5,o=[];for(let i=0;i<r;i++){const u=e.lamps[i*4]-l,h=e.lamps[i*4+2]-c,d=u*u+h*h;d<22*22&&o.push([d,i])}o.sort((i,u)=>i[0]-u[0]);for(let i=0;i<Math.min(4,o.length);i++)a[(n*40+s)*4+i]=o[i][1]}this.lampGrid=t.createTexture({size:[40,40],format:"rgba32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:this.lampGrid},a,{bytesPerRow:40*16},[40,40]),this.frameBG=t.createBindGroup({layout:this.frameBGL,entries:[{binding:0,resource:{buffer:this.frameUB}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]}),this.shadowBG=t.createBindGroup({layout:this.shadowBGL,entries:[{binding:0,resource:{buffer:this.shadowUB,size:64}},{binding:1,resource:{buffer:this.instBuf}},{binding:2,resource:{buffer:this.boneBuf}}]})}resize(e,t,r){const a=this.gpu.canvas,n=Math.max(1,Math.floor(e*Math.min(r,1.5))),s=Math.max(1,Math.floor(t*Math.min(r,1.5))),l=Math.max(64,Math.floor(n*this.renderScale)),c=Math.max(64,Math.floor(s*this.renderScale));if((a.width!==n||a.height!==s)&&(a.width=n,a.height=s),l===this.width&&c===this.height)return;this.width=l,this.height=c;const o=this.device;for(const x of[this.depth,this.hdr,this.vel,this.aoRaw,this.ao,this.bloom,this.gbuf,this.alb,this.ssr,this.ssgi,this.hdr2,...this.hist,...this.ssrHist,...this.giHist])x?.destroy();const i=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.depth=o.createTexture({size:[l,c],format:"depth32float",usage:i}),this.hdr=o.createTexture({size:[l,c],format:z,usage:i}),this.vel=o.createTexture({size:[l,c],format:"rg16float",usage:i});const u=Math.max(1,l>>1),h=Math.max(1,c>>1);this.aoRaw=o.createTexture({size:[u,h],format:"r8unorm",usage:i}),this.ao=o.createTexture({size:[u,h],format:"r8unorm",usage:i}),this.hist=[0,1].map(()=>o.createTexture({size:[l,c],format:z,usage:i})),this.gbuf=o.createTexture({size:[l,c],format:z,usage:i}),this.alb=o.createTexture({size:[l,c],format:"rgba8unorm",usage:i|GPUTextureUsage.COPY_SRC}),this.hdr2=o.createTexture({size:[l,c],format:z,usage:i}),this.ssr=o.createTexture({size:[l,c],format:z,usage:i}),this.ssgi=o.createTexture({size:[l,c],format:z,usage:i}),this.ssrHist=[0,1].map(()=>o.createTexture({size:[l,c],format:z,usage:i})),this.giHist=[0,1].map(()=>o.createTexture({size:[l,c],format:z,usage:i})),this.bloom=o.createTexture({size:[u,h],format:z,mipLevelCount:W,usage:i|GPUTextureUsage.COPY_SRC});for(const x of[...this.rtHist,...this.rtDisp])x.destroy();const d=Math.max(1,Math.round(l*this.rtScale)),p=Math.max(1,Math.round(c*this.rtScale)),v=GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC;this.rtHist=[0,1,2,3].map(()=>o.createTexture({size:[d,p],format:"rgba32float",usage:v})),this.rtDisp=[0,1].map(()=>o.createTexture({size:[d,p],format:z,usage:v})),this.rtSamples=0,this.frameIndex=0,this.makeSceneBG()}makeSceneBG(){const e=this.device;this.sceneBG=e.createBindGroup({layout:this.sceneBGL,entries:[{binding:0,resource:this.texA.createView({dimension:"2d-array"})},{binding:1,resource:this.texB.createView({dimension:"2d-array"})},{binding:2,resource:this.matSamp},{binding:3,resource:this.shadowTex.createView({dimension:"2d-array"})},{binding:4,resource:this.cmpSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp},{binding:7,resource:this.ao.createView()},{binding:8,resource:this.hmapTex.createView()},{binding:9,resource:{buffer:this.lampBuf}},{binding:10,resource:this.lampGrid.createView()},{binding:11,resource:{buffer:this.spotBuf}},{binding:12,resource:{buffer:this.rtNodesBuf}},{binding:13,resource:{buffer:this.rtTrisBuf}},{binding:14,resource:{buffer:this.rtTlasBuf}},{binding:15,resource:this.signTex.createView()}]})}async loadSignAtlas(){try{const e=await fetch("./textures/signs_atlas.jpg");if(!e.ok)return;const t=await createImageBitmap(await e.blob()),r=this.device,a=Math.floor(Math.log2(Math.max(t.width,t.height)))+1,n=r.createTexture({size:[t.width,t.height],format:"rgba8unorm-srgb",mipLevelCount:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let s=0;s<a;s++){const l=Math.max(1,t.width>>s),c=Math.max(1,t.height>>s),o=new OffscreenCanvas(l,c),i=o.getContext("2d");i.imageSmoothingQuality="high",i.drawImage(t,0,0,l,c),r.queue.copyExternalImageToTexture({source:o},{texture:n,mipLevel:s},[l,c])}this.signTex.destroy(),this.signTex=n,this.width>0&&this.makeSceneBG()}catch(e){console.warn("[signs] atlas unavailable",e)}}add(e,t,r,a,n=[1,0,0,0]){this.pending.push({mesh:e,key:t,model:r,color:a,extra:n})}addSkinned(e,t,r,a,n,s){this.skinPending.length<Ie&&this.skinPending.push({key:e,mats:t.slice(),shirt:r,skin:a,pants:n,hair:s})}flushInstances(){this.rtActive&&this.updateTlas(this.pending,this.skinPending.map(r=>r.mats)),this.pending.sort((r,a)=>r.mesh-a.mesh),this.batches=[];let e=1;for(const r of this.pending){if(e>=J)break;const a=e*Q;this.instData.set(r.model,a);const n=this.prevModels.get(r.key);this.instData.set(n??r.model,a+16),n?n.set(r.model):this.prevModels.set(r.key,new Float32Array(r.model)),this.instData[a+32]=r.color[0],this.instData[a+33]=r.color[1],this.instData[a+34]=r.color[2],this.instData[a+35]=r.color[3]??-1,this.instData.set(r.extra,a+36),this.instData[a+40]=0,this.instData[a+41]=0,this.instData[a+42]=0,this.instData[a+43]=0;const s=this.batches[this.batches.length-1];s&&s.mesh===r.mesh?s.count++:this.batches.push({mesh:r.mesh,first:e,count:1}),e++}this.skinFirst=e,this.skinN=0,this.rtSkinFirst=e;const t=B.create();for(const r of this.skinPending){if(e>=J)break;const a=this.skinN,n=e*Q;this.instData.set(t,n),this.instData.set(t,n+16),this.instData.set([r.shirt[0],r.shirt[1],r.shirt[2],-1,r.skin[0],r.skin[1],r.skin[2],r.hair,r.pants[0],r.pants[1],r.pants[2],a*U*2],n+32);const s=a*U*2*16;this.boneData.set(r.mats,s);const l=this.prevBones.get(r.key);this.boneData.set(l??r.mats,s+U*16),l?l.set(r.mats):this.prevBones.set(r.key,r.mats.slice()),this.skinN++,e++}this.skinPending=[],this.skinN>0&&this.device.queue.writeBuffer(this.boneBuf,0,this.boneData,0,this.skinN*U*2*16),this.instCount=e,this.pending=[],this.device.queue.writeBuffer(this.instBuf,0,this.instData,0,e*Q)}render(e){const t=this.device;this.flushInstances();const r=(g,S)=>{let L=0,A=1;for(;g>0;)A/=S,L+=A*(g%S),g=Math.floor(g/S);return L},a=this.frameIndex%8+1,n=this.taaEnabled?(r(a,2)-.5)*2/this.width:0,s=this.taaEnabled?(r(a,3)-.5)*2/this.height:0,l=new Float32Array(e.projNJ);l[8]+=n,l[9]+=s;const c=B.mul(l,e.view),o=B.mul(e.projNJ,e.view),i=this.frameData;i.set(c,0),i.set(o,16),i.set(this.frameIndex===0?o:this.prevVP,32),i.set(B.invert(o),48),i.set(e.view,64),i.set(l,80),i.set(B.invert(l),96);for(let g=0;g<3;g++)i.set(e.lightVP[g],112+g*16);i.set([...e.camPos,e.time],160),i.set([e.sunDir[0],e.sunDir[1],e.sunDir[2],e.night],164),i.set([e.sunColor[0],e.sunColor[1],e.sunColor[2],this.exposure],168);const u=this.rtActive,h=this.frameIndex===0||o.some((g,S)=>Math.abs(g-this.prevVP[S])>1e-6);this.rtSamples=u&&!h?this.rtSamples+1:0,i.set([e.wetness,e.rain,this.aoEnabled&&!u?1:0,le-1],172),i.set([...e.splits,u?this.rtMode:0],176),i.set([...e.cascTexel,this.rtSkinFirst],180),i.set([e.fogDensity,.045,this.bloomEnabled?1:0,u?this.rtResolveMode:this.ssfxEnabled?this.ssfxMode:0],184),i.set([this.width,this.height,1/this.width,1/this.height],188);const d=Math.min(Le,e.spots.length/8);i.set([this.frameIndex,d,this.renderScale,e.overcast??0],192),i.set(e.sun,196),i.set(e.moon,200),t.queue.writeBuffer(this.frameUB,0,i),d>0&&t.queue.writeBuffer(this.spotBuf,0,new Float32Array(e.spots.slice(0,d*8)));const p=new Float32Array(64*3);for(let g=0;g<3;g++)p.set(e.lightVP[g],g*64);t.queue.writeBuffer(this.shadowUB,0,p),this.prevVP=o,this.stats.draws=0,this.stats.tris=0;const v=t.createCommandEncoder();this.envFrame++%2===0&&this.renderEnv(v);for(let g=0;g<(u?0:3);g++){const S=v.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.shadowTex.createView({dimension:"2d",baseArrayLayer:g,arrayLayerCount:1}),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});S.setPipeline(this.pipes.shadow),S.setBindGroup(0,this.shadowBG,[g*256]),this.drawWorld(S,e.vis,1<<g+1),this.drawDynamic(S,!1,!0),this.drawSkinned(S,this.pipes.skinShadow),S.end()}{const g=v.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:this.depth.createView(),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"store"}});g.setBindGroup(0,this.frameBG),g.setPipeline(this.pipes.prepassNoCull),this.drawWorld(g,e.vis,1),this.drawDynamic(g,!0,!1),this.drawSkinned(g,this.pipes.skinDepth),g.end()}this.aoEnabled&&!u&&(this.post(v,"ssao",this.aoRaw.createView(),[this.hdr,this.hdr,this.hdr]),this.post(v,"blurAO",this.ao.createView(),[this.aoRaw,this.hdr,this.hdr]));{const g=v.beginRenderPass({colorAttachments:[{view:this.hdr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}},{view:this.vel.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.gbuf.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.alb.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:this.depth.createView(),depthLoadOp:"load",depthStoreOp:"store"}});g.setBindGroup(0,this.frameBG),g.setBindGroup(1,this.sceneBG),g.setPipeline(this.pipes.mainNoCull),this.drawWorld(g,e.vis,1),this.drawDynamic(g,!0,!1),this.drawSkinned(g,this.pipes.skinMain),g.setPipeline(this.pipes.sky),g.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView()},{binding:1,resource:this.envSamp}]})),g.draw(3),g.end()}let x=this.hdr;if(u){const g=this.rtHistIdx,S=1-g;this.rtHistIdx=S;const L=this.rtMode===2?h?12:4096:h?6:24,A=new ArrayBuffer(16);new Uint32Array(A,0,1)[0]=this.rtMode,new Float32Array(A,4,1)[0]=L,new Uint32Array(A,8,2).set([this.ptBounces,this.frameIndex]),t.queue.writeBuffer(this.rtParamsUB,0,A);const D=t.createBindGroup({layout:this.rtBGL,entries:[{binding:0,resource:{buffer:this.rtNodesBuf}},{binding:1,resource:{buffer:this.rtTrisBuf}},{binding:2,resource:{buffer:this.rtTlasBuf}},{binding:3,resource:this.texA.createView({dimension:"2d-array"})},{binding:4,resource:this.envSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.depth.createView()},{binding:7,resource:this.gbuf.createView()},{binding:8,resource:this.alb.createView()},{binding:9,resource:this.vel.createView()},{binding:10,resource:this.rtHist[S*2].createView()},{binding:11,resource:this.rtHist[S*2+1].createView()},{binding:12,resource:this.rtHist[g*2].createView()},{binding:13,resource:this.rtHist[g*2+1].createView()},{binding:14,resource:this.rtDisp[0].createView()},{binding:15,resource:this.rtDisp[1].createView()},{binding:16,resource:{buffer:this.rtParamsUB}}]}),E=v.beginComputePass();E.setPipeline(this.rtPipe),E.setBindGroup(0,this.frameBG),E.setBindGroup(1,D),E.dispatchWorkgroups(Math.ceil(this.rtDisp[0].width/8),Math.ceil(this.rtDisp[0].height/8)),E.end(),this.post(v,"resolve",this.hdr2.createView(),[this.hdr,this.rtDisp[0],this.rtDisp[1]]),x=this.hdr2}else if(this.ssfxEnabled){const g=t.createBindGroup({layout:this.ssfxBGL,entries:[{binding:0,resource:this.hdr.createView()},{binding:1,resource:this.gbuf.createView()},{binding:2,resource:this.alb.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.envTex.createView()},{binding:6,resource:this.envSamp}]}),S=v.beginRenderPass({colorAttachments:[{view:this.ssr.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.ssgi.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});S.setPipeline(this.pipes.ssfx),S.setBindGroup(0,this.frameBG),S.setBindGroup(1,g),S.draw(3),S.end();const L=this.ssHistIdx,A=1-L;this.ssHistIdx=A;const D=t.createBindGroup({layout:this.tempBGL,entries:[{binding:0,resource:this.ssr.createView()},{binding:1,resource:this.ssgi.createView()},{binding:2,resource:this.vel.createView()},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp},{binding:5,resource:this.ssrHist[A].createView()},{binding:6,resource:this.giHist[A].createView()}]}),E=v.beginRenderPass({colorAttachments:[{view:this.ssrHist[L].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}},{view:this.giHist[L].createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});E.setPipeline(this.pipes.ssTemporal),E.setBindGroup(0,this.frameBG),E.setBindGroup(1,D),E.draw(3),E.end(),this.post(v,"resolve",this.hdr2.createView(),[this.hdr,this.ssrHist[L],this.giHist[L]]),x=this.hdr2}const y=this.hist[this.histIdx],k=this.hist[1-this.histIdx];this.histIdx=1-this.histIdx,this.post(v,"taa",y.createView(),[x,k,this.vel]);const P=this.taaEnabled?y:x;let I=P,w=0;for(let g=0;g<W;g++)this.post(v,"bloomDown",this.bloom.createView({baseMipLevel:g,mipLevelCount:1}),[I,this.hdr,this.hdr],[w,0,0],!1),I=this.bloom,w=g;for(let g=W-2;g>=0;g--)this.post(v,"bloomUp",this.bloom.createView({baseMipLevel:g,mipLevelCount:1}),[this.bloom,this.hdr,this.hdr],[g+1,0,0],!0);const m=Math.max(1,this.width>>1>>W-1),b=Math.max(1,this.height>>1>>W-1),T=!this.lumPending&&b<=64&&m*8<=256;if(T&&v.copyTextureToBuffer({texture:this.bloom,mipLevel:W-1},{buffer:this.lumBuf,bytesPerRow:256},[m,b]),this.post(v,"composite",this.gpu.context.getCurrentTexture().createView(),[P,this.bloom,this.hdr],[0,0,0]),t.queue.submit([v.finish()]),!this.gpuPending){this.gpuPending=!0;const g=performance.now();t.queue.onSubmittedWorkDone().then(()=>{this.gpuMs=this.gpuMs*.8+(performance.now()-g)*.2,this.gpuPending=!1})}T&&this.readLuminance(m,b),this.frameIndex++}readLuminance(e,t){this.lumPending=!0,this.lumBuf.mapAsync(GPUMapMode.READ).then(()=>{const r=new Uint16Array(this.lumBuf.getMappedRange());let a=0,n=0;for(let s=0;s<t;s++)for(let l=0;l<e;l++){const c=s*128+l*4,o=.2126*fe(r[c])+.7152*fe(r[c+1])+.0722*fe(r[c+2]),i=1-Math.abs((l+.5)/e-.5),u=1-Math.abs((s+.5)/t-.5),h=i*u;a+=Math.log(Math.max(o,1e-4))*h,n+=h}this.lumBuf.unmap(),this.avgLum=Math.exp(a/Math.max(n,1e-4)),this.lumPending=!1}).catch(()=>{this.lumPending=!1})}adaptExposure(e){const t=Math.min(16,Math.max(.12,.2/Math.max(this.avgLum,1e-4))),r=1-Math.exp(-e*(t>this.exposure?1.2:2.5));this.exposure+=(t-this.exposure)*r}renderEnv(e){let t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:0,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});t.setPipeline(this.pipes.lut),t.setBindGroup(0,this.frameBG),t.draw(3),t.end();for(let r=1;r<le;r++)t=e.beginRenderPass({colorAttachments:[{view:this.envTex.createView({baseMipLevel:r,mipLevelCount:1}),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]}),t.setPipeline(this.pipes.envDown),t.setBindGroup(0,this.frameBG),t.setBindGroup(1,this.device.createBindGroup({layout:this.texBGL,entries:[{binding:0,resource:this.envTex.createView({baseMipLevel:r-1,mipLevelCount:1})},{binding:1,resource:this.linSamp}]})),t.draw(3),t.end()}post(e,t,r,a,n=[0,0,0],s=!1){const l=a.map((i,u)=>i.createView({baseMipLevel:n[u]??0,mipLevelCount:1})),c=this.device.createBindGroup({layout:this.postBGL,entries:[{binding:0,resource:l[0]},{binding:1,resource:l[1]},{binding:2,resource:l[2]},{binding:3,resource:this.depth.createView()},{binding:4,resource:this.linSamp}]}),o=e.beginRenderPass({colorAttachments:[{view:r,loadOp:s?"load":"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});o.setPipeline(this.pipes[t]),o.setBindGroup(0,this.frameBG),o.setBindGroup(1,c),o.draw(3),o.end()}drawWorld(e,t,r){if(this.worldVB){e.setVertexBuffer(0,this.worldVB),e.setIndexBuffer(this.worldIB,"uint32");for(let a=0;a<this.chunks.length;a++){if(t&&t.length===this.chunks.length&&!(t[a]&r))continue;const n=this.chunks[a];e.drawIndexed(n.count,1,n.first,0,0),this.stats.draws++,this.stats.tris+=n.count/3}}}drawSkinned(e,t){this.skinN!==0&&(e.setPipeline(t),e.setVertexBuffer(0,this.skinVB),e.setIndexBuffer(this.skinIB,"uint32"),e.drawIndexed(this.skinCount,this.skinN,0,0,this.skinFirst),this.stats.draws++,this.stats.tris+=this.skinCount/3*this.skinN)}drawDynamic(e,t,r){e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32");let a=!1;for(const n of this.batches){if(n.mesh>=ue){const l=this.debris.get(n.mesh-ue);if(!l)continue;e.setVertexBuffer(0,l.vb),e.setIndexBuffer(l.ib,"uint32"),e.drawIndexed(l.count,n.count,0,0,n.first),a=!0,this.stats.draws++,this.stats.tris+=l.count/3*n.count;continue}a&&(e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32"),a=!1);const s=this.meshes[n.mesh];e.drawIndexed(s.count,n.count,s.first,s.base,n.first),this.stats.draws++,this.stats.tris+=s.count/3*n.count}if(a&&(e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32")),t&&!r&&this.skidCount>0&&(e.setVertexBuffer(0,this.skidVB),e.setIndexBuffer(this.skidIB,"uint32"),e.drawIndexed(this.skidCount*6,1,0,0,0),e.setVertexBuffer(0,this.dynVB),e.setIndexBuffer(this.dynIB,"uint32"),this.stats.draws++),t&&!r){const n=this.meshes[G.WATER];e.drawIndexed(n.count,1,n.first,n.base,0),this.stats.draws++}}}function fe(f){const e=f&32768?-1:1,t=f>>10&31,r=f&1023;return t===0?e*Math.pow(2,-14)*(r/1024):t===31?r?NaN:e*(1/0):e*Math.pow(2,t-15)*(1+r/1024)}function Tt(f,e,t){const[r,a,n]=e,s=Math.cos(t),l=Math.sin(t),c=1-s;return new Float32Array([c*r*r+s,c*r*a+l*n,c*r*n-l*a,0,c*r*a-l*n,c*a*a+s,c*a*n+l*r,0,c*r*n+l*a,c*a*n-l*r,c*n*n+s,0,f[0],f[1],f[2],1])}const Ve=[[.78,.55,.42],[.55,.36,.25],[.32,.2,.13],[.9,.7,.58],[.66,.46,.33]],St=[[.6,.08,.06],[.08,.2,.45],[.75,.75,.72],[.12,.12,.13],[.15,.4,.2],[.8,.6,.15],[.45,.3,.55],[.25,.5,.65]],Pt=[[.08,.1,.18],[.15,.13,.1],[.3,.28,.22],[.05,.05,.05],[.35,.38,.45]],ie=[[.03,.02,.015],[.2,.12,.05],[.45,.32,.15],[.5,.5,.5]];function Bt(f){const e=r=>Math.abs(Math.sin(f*12.9898+r*78.233)*43758.5453)%1,t=(r,a)=>r[Math.floor(e(a)*r.length)%r.length];return{skin:t(Ve,1),shirt:t(St,2),pants:t(Pt,3),hair:t(ie,4),shoes:[.04,.04,.045],height:.92+e(5)*.16}}const Fe={skin:Ve[0],shirt:[.85,.85,.82],pants:[.1,.13,.22],hair:ie[0],height:1},Ge=new Float32Array(U*16),Mt=f=>ie.indexOf(f.hair)>=0?ie.indexOf(f.hair):0;function he(f,e,t,r,a,n,s,l){const c=B.create(),o=l.height;s===2?(B.trs([t[0],t[1]+.12,t[2]],r,-Math.PI/2,0,[o,o,o],c),B.mul(c,B.trs([0,-.97,0],0,0,0),c)):B.trs(t,r,0,0,[o,o,o],c),vt(c,a,n,s,Ge),f.addSkinned(e,Ge,l.shirt,l.skin,l.pants,Mt(l))}class It{ctx=null;master;rotorBus;chop;chopLfo;chopDepth;tailLfo;turbine=[];turbineGain;noise;lowpass;constructor(){const e=()=>this.unlock();for(const t of["touchend","pointerup","click","keydown","mousedown"])addEventListener(t,e,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden||this.ctx?.resume().catch(()=>{})})}unlock(){const e=navigator;if(e.audioSession&&e.audioSession.type!=="playback")try{e.audioSession.type="playback"}catch{}this.init();const t=this.ctx;if(t.state!=="running"){t.resume().catch(()=>{});const r=t.createBuffer(1,1,22050),a=t.createBufferSource();a.buffer=r,a.connect(t.destination),a.start(0)}}init(){if(this.ctx)return;const e=window.AudioContext??window.webkitAudioContext,t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);const r=this.noise.getChannelData(0);for(let p=0;p<r.length;p++)r[p]=Math.random()*2-1;this.rotorBus=t.createGain(),this.rotorBus.gain.value=0,this.lowpass=t.createBiquadFilter(),this.lowpass.type="lowpass",this.lowpass.frequency.value=2500,this.rotorBus.connect(this.lowpass).connect(this.master);const a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=110,n.Q.value=.9;const s=t.createBiquadFilter();s.type="lowshelf",s.frequency.value=90,s.gain.value=10,this.chop=t.createGain(),this.chop.gain.value=.55,this.chopLfo=t.createOscillator(),this.chopLfo.type="sawtooth",this.chopLfo.frequency.value=0,this.chopDepth=t.createGain(),this.chopDepth.gain.value=.55,this.chopLfo.connect(this.chopDepth).connect(this.chop.gain),a.connect(n).connect(s).connect(this.chop).connect(this.rotorBus);const l=t.createGain();l.gain.value=0;const c=t.createOscillator();c.type="sine",c.frequency.value=38,this.chopLfo.connect(l.gain),c.connect(l).connect(this.rotorBus);const o=t.createBufferSource();o.buffer=this.noise,o.loop=!0,o.playbackRate.value=.93;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=700,i.Q.value=2.5;const u=t.createGain();u.gain.value=.12,this.tailLfo=t.createOscillator(),this.tailLfo.type="square",this.tailLfo.frequency.value=0;const h=t.createGain();h.gain.value=.08,this.tailLfo.connect(h).connect(u.gain),o.connect(i).connect(u).connect(this.rotorBus),this.turbineGain=t.createGain(),this.turbineGain.gain.value=0;const d=t.createBiquadFilter();d.type="highpass",d.frequency.value=900;for(const p of[0,7]){const v=t.createOscillator();v.type="sawtooth",v.frequency.value=400,v.detune.value=p,v.connect(d),v.start(),this.turbine.push(v)}d.connect(this.turbineGain).connect(this.master),a.start(),o.start(),c.start(),this.chopLfo.start(),this.tailLfo.start()}updateRotor(e,t,r){const a=this.ctx;if(!a)return;const n=a.currentTime,s=1/(1+Math.max(0,t-6)/22),l=4*4.9*e;this.chopLfo.frequency.setTargetAtTime(l,n,.1),this.tailLfo.frequency.setTargetAtTime(4*23*e,n,.1),this.rotorBus.gain.setTargetAtTime(Math.min(1,e*1.3)*s*.9,n,.1);for(const c of this.turbine)c.frequency.setTargetAtTime(380+1500*e,n,.3);this.turbineGain.gain.setTargetAtTime(e*.025*s*(r?1.6:1),n,.2),this.lowpass.frequency.setTargetAtTime(r?1200:600+3e3*s,n,.2)}shot(e){const t=this.ctx;if(!t)return;const r=t.currentTime,a=1/(1+Math.max(0,e-5)/30),n=t.createBufferSource();n.buffer=this.noise,n.playbackRate.value=1+Math.random()*.2;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1400+Math.random()*400,s.Q.value=.6;const l=t.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(.9*a,r+.004),l.gain.exponentialRampToValueAtTime(.001,r+.11),n.connect(s).connect(l).connect(this.master),n.start(r,Math.random()*1.5,.15);const c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(110,r),c.frequency.exponentialRampToValueAtTime(42,r+.1);const o=t.createGain();o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(.8*a,r+.005),o.gain.exponentialRampToValueAtTime(.001,r+.14),c.connect(o).connect(this.master),c.start(r),c.stop(r+.16)}impact(e){const t=this.ctx;if(!t)return;const r=t.currentTime,a=.5/(1+e/25),n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="highpass",s.frequency.value=2500;const l=t.createGain();l.gain.setValueAtTime(a,r),l.gain.exponentialRampToValueAtTime(.001,r+.06),n.connect(s).connect(l).connect(this.master),n.start(r,Math.random(),.07)}click(){const e=this.ctx;if(!e)return;const t=e.currentTime,r=e.createOscillator();r.type="square",r.frequency.value=1800;const a=e.createGain();a.gain.setValueAtTime(.12,t),a.gain.exponentialRampToValueAtTime(.001,t+.025),r.connect(a).connect(this.master),r.start(t),r.stop(t+.03)}}const Ee=()=>!!document.documentElement.requestFullscreen&&document.fullscreenEnabled!==!1;async function ze(){try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),await screen.orientation.lock?.("landscape")}catch{}}const Rt=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;class Lt{constructor(e){this.input=e;const t=document.createElement("style");t.textContent=`
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
    `,document.head.appendChild(t),this.root.id="touch";const r=document.createElement("div");r.className="look",this.stick.className="stick",this.knob.className="knob",this.stick.appendChild(this.knob),this.root.append(r,this.stick),document.body.appendChild(this.root);const a=document.createElement("div");a.className="btn small",a.textContent="全画面",a.style.cssText="display:flex; right:16px; top:64px;",a.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),document.fullscreenElement?document.exitFullscreen?.():ze()}),this.root.appendChild(a);const n=()=>{a.style.display=Ee()?"flex":"none",a.textContent=document.fullscreenElement?"戻す":"全画面"};document.addEventListener("fullscreenchange",n),n();const s=()=>{!document.fullscreenElement&&Ee()&&ze(),removeEventListener("pointerup",s,!0)};addEventListener("pointerup",s,!0);const l=[["ジャンプ","Space",24,120,["foot"]],["走る","ShiftLeft",100,40,["foot"],!0],["乗る","KeyF",24,200,["foot"]],["降りる","KeyF",24,200,["car","heli"]],["ブレーキ","Space",24,120,["car"]],["上昇","Space",24,120,["heli"]],["下降","ShiftLeft",100,40,["heli"]],["射撃",void 0,110,120,["heli"]],["左旋回","KeyQ",190,40,["heli"],!1,!0],["右旋回","KeyE",250,40,["heli"],!1,!0],["視点","KeyV",24,40,["foot","car","heli"],!1,!0],["時間","KeyT",16,280,["foot","car","heli"],!1,!0]];for(const[i,u,h,d,p,v,x]of l){const y=document.createElement("div");y.className="btn"+(x?" small":""),y.textContent=i,y.style.right=h+"px",y.style.bottom=d+"px";const k={el:y,code:u,toggle:v,modes:p};y.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation();try{y.setPointerCapture(I.pointerId)}catch{}if(!u){this.fire=!0;return}v?(k.on=!k.on,y.classList.toggle("on",k.on),this.setKey(u,!!k.on)):this.setKey(u,!0)});const P=I=>{if(I.preventDefault(),!u){this.fire=!1;return}v||this.setKey(u,!1)};y.addEventListener("pointerup",P),y.addEventListener("pointercancel",P),this.root.appendChild(y),this.btns.push(k)}this.stick.addEventListener("pointerdown",i=>{i.preventDefault();try{this.stick.setPointerCapture(i.pointerId)}catch{}this.stickId=i.pointerId;const u=this.stick.getBoundingClientRect();this.stickOrigin=[u.left+u.width/2,u.top+u.height/2],this.moveStick(i.clientX,i.clientY)}),this.stick.addEventListener("pointermove",i=>{i.pointerId===this.stickId&&this.moveStick(i.clientX,i.clientY)});const c=i=>{i.pointerId===this.stickId&&(this.stickId=null,this.moveStick(...this.stickOrigin))};this.stick.addEventListener("pointerup",c),this.stick.addEventListener("pointercancel",c),r.addEventListener("pointerdown",i=>{i.preventDefault();try{r.setPointerCapture(i.pointerId)}catch{}this.lookId=i.pointerId,this.lookLast=[i.clientX,i.clientY]}),r.addEventListener("pointermove",i=>{i.pointerId===this.lookId&&(this.input.mouseDX+=(i.clientX-this.lookLast[0])*1.6,this.input.mouseDY+=(i.clientY-this.lookLast[1])*1.6,this.lookLast=[i.clientX,i.clientY])});const o=i=>{i.pointerId===this.lookId&&(this.lookId=null)};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),this.setMode("foot")}root=document.createElement("div");stick=document.createElement("div");knob=document.createElement("div");stickId=null;lookId=null;stickOrigin=[0,0];lookLast=[0,0];btns=[];fire=!1;mode="foot";setKey(e,t){t?(this.input.keys.has(e)||this.input.pressed.add(e),this.input.keys.add(e)):this.input.keys.delete(e)}moveStick(e,t){let a=e-this.stickOrigin[0],n=t-this.stickOrigin[1];const s=Math.hypot(a,n);s>56&&(a*=56/s,n*=56/s),this.knob.style.transform=`translate(${a}px, ${n}px)`;const l=a/56,c=-n/56;this.input.touchAxis=[Math.abs(l)>.15?l:0,Math.abs(c)>.15?c:0],this.setKey("KeyD",l>.35),this.setKey("KeyA",l<-.35),this.setKey("KeyW",c>.35),this.setKey("KeyS",c<-.35)}setMode(e){if(!(e===this.mode&&this.btns[0].el.style.display)){this.mode=e;for(const t of this.btns){const r=t.modes.includes(e);t.el.style.display=r?"flex":"none",!r&&t.toggle&&t.on&&(t.on=!1,t.el.classList.remove("on"),t.code&&this.setKey(t.code,!1))}}}}const de=[.055,.065,.045],H=16,q=17,Ae=8,ve=1,De=[[.85,.85,.83],[.02,.02,.025],[.45,.46,.48],[.55,.03,.02],[.03,.12,.45],[.03,.2,.08],[.8,.55,.02],[.18,.18,.19],[.02,.04,.12],[.25,.02,.04],[.8,.25,.02],[.02,.3,.3]],Ne=62*Math.PI/180,pe=[.1,14,45,150];class Gt{constructor(e,t){this.gpu=e,this.stats=t,this.r=new kt(e),this.input=new qe(e.canvas),this.worker=new Worker(new URL(""+new URL("worker-CCJCIMRj.js",import.meta.url).href,import.meta.url),{type:"module"});for(let a=0;a<64;a++)this.looks.push(Bt(a+1));const r=new URLSearchParams(location.search);r.get("t")&&(this.tod=parseFloat(r.get("t"))),r.get("cam")==="free"&&(this.camMode="free"),r.get("pos")&&(this.camMode="free",this.freePos=r.get("pos").split(",").map(Number),this.camYaw=-(parseFloat(r.get("yaw")??"0")*Math.PI)/180,this.camPitch=parseFloat(r.get("pitch")??"0")*Math.PI/180,this.lockCam=!0),r.get("hfov")&&(this.hfov=parseFloat(r.get("hfov"))*Math.PI/180),r.get("clean")==="1"&&document.body.classList.add("clean"),this.overcast=r.get("overcast")!==null?_(parseFloat(r.get("overcast")),0,1):(r.get("map")??"namba")==="namba"?.8:0,r.get("scale")&&(this.r.renderScale=parseFloat(r.get("scale")),this.dynRes=!1),window.game=this,(this.mobile||r.get("touch")==="1")&&(this.mobile=!0,this.touch=new Lt(this.input),r.get("scale")||(this.r.renderScale=.7),this.r.ssfxEnabled=!1,document.getElementById("crosshair").style.display="block")}r;input;worker;state=null;vis=null;nchunks=0;workerMs=0;waiting=!1;camMode="third";camYaw=0;camPitch=-.15;camDist=4.5;camPos=[0,20,30];freePos=[0,30,60];lockCam=!1;hfov=0;overcast=0;smoothCamDist=4.5;lastMouse=0;tod=16.2;timeScale=60;paused=!1;rain=!1;wet=0;time=0;looks=[];hud=document.getElementById("hud");help=document.getElementById("help");speedEl=document.getElementById("speed");promptEl=document.getElementById("prompt");hudTimer=0;sfx=new It;tracers=[];marks=[];lastHitTime=-10;tracerSeq=0;heliOff=0;touch=null;mobile=Rt();worldInfo="";lastFrame=performance.now();dynRes=!0;slowTime=0;fastTime=0;isCity=!1;skidLast=new Map;blinker=0;blinkerTurned=!1;door=null;prevCar=-1;lastFoot=[0,0,0];lastFootYaw=0;async start(){const e=document.getElementById("loading");e.textContent="Generating materials…";const t=this.r.generateTextures();e.textContent="Generating world (WASM worker)…";let r=!1;const a=await new Promise((s,l)=>{this.worker.onmessage=i=>{i.data.type==="world"?s(i.data):i.data.type==="error"&&l(new Error(i.data.message))};const c=new URLSearchParams(location.search).get("map")??"namba";document.body.classList.toggle("map-namba",c==="namba"),r=c==="namba";const o=c==="namba"?new URL("models/namba_engine.bin.gz",document.baseURI).href:void 0;this.worker.postMessage({type:"init",seed:1337,cityUrl:o})});await t,r&&await this.r.loadSignAtlas(),this.r.setWorld(a),this.isCity=r,this.r.fixedProps.length&&this.worker.postMessage({type:"fixed",list:this.r.fixedProps});const n=new URLSearchParams(location.search).get("rt");(n==="rt"||n==="1")&&this.r.setRenderMode(1),(n==="pt"||n==="2")&&this.r.setRenderMode(2),this.nchunks=a.chunks.length/8,this.worldInfo=`world: ${a.buildings} buildings, ${a.props} props, ${(a.idx.length/3/1e3).toFixed(0)}k tris, ${this.nchunks} chunks, gen ${a.genMs.toFixed(0)} ms`,this.worker.onmessage=s=>{s.data.type==="state"&&(this.state=s.data.state,this.vis=s.data.vis,this.workerMs=s.data.ms,this.waiting=!1)},e.style.display="none",this.mobile&&(this.help.style.display="none"),this.help.textContent=["クリック: マウス操作  WASD: 移動  Shift: 走る  Space: ジャンプ / ハンドブレーキ","F: 車/ヘリに乗る・降りる  H: ヘリを呼ぶ  V: 一人称/三人称  C: フリーカメラ  R: リセット","車: Q / E 左右のウインカー  Space: ハンドブレーキ (タイヤ痕)  速度を出してぶつかると木や柱が倒れる","ヘリ: Space 上昇 / Shift 下降  W/S 前後傾  A/D 左右傾  Q/E 旋回  左クリック: 機関砲 (マウスで照準)","T: 時間早送り  P: 時間停止  1-4: 朝/昼/夕/夜  G: 雨  O: SSAO  B: ブルーム  K: TAA  J: SSR/SSGI  Y: レイトレ/パストレ  -/=: 解像度"].join(`
`),requestAnimationFrame(this.frame)}frame=e=>{const t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e,this.stats.push(t),this.time+=t,this.update(t),requestAnimationFrame(this.frame)};handleKeys(e){const t=this.input;t.hit("KeyV")&&(this.camMode=this.camMode==="first"?"third":"first"),t.hit("KeyC")&&(this.camMode==="free"?this.camMode="third":(this.camMode="free",this.freePos=[...this.camPos])),t.hit("KeyP")&&(this.paused=!this.paused),t.hit("Digit1")&&(this.tod=8),t.hit("Digit2")&&(this.tod=13),t.hit("Digit3")&&(this.tod=17.45),t.hit("Digit4")&&(this.tod=22.5),t.hit("KeyG")&&(this.rain=!this.rain),t.hit("KeyO")&&(this.r.aoEnabled=!this.r.aoEnabled),t.hit("KeyB")&&(this.r.bloomEnabled=!this.r.bloomEnabled),t.hit("KeyK")&&(this.r.taaEnabled=!this.r.taaEnabled),t.hit("KeyJ")&&(this.r.ssfxEnabled=!this.r.ssfxEnabled),t.hit("KeyY")&&this.r.setRenderMode((this.r.rtMode+1)%3),t.hit("Minus")&&(this.r.renderScale=Math.max(.4,this.r.renderScale-.1),this.dynRes=!1),t.hit("Equal")&&(this.r.renderScale=Math.min(1.5,this.r.renderScale+.1),this.dynRes=!1);const r=t.down("KeyT")?1800:this.timeScale;this.paused||(this.tod=(this.tod+e*r/3600)%24),this.wet=_(this.wet+(this.rain?e/6:-e/25),0,1)}update(e){const t=this.input;if(this.handleKeys(e),this.dynRes&&this.r.rtMode!==2){const m=this.stats.ms;m>1e3/32?(this.slowTime+=e,this.fastTime=0):m<1e3/50?(this.fastTime+=e,this.slowTime=0):this.slowTime=this.fastTime=0,this.slowTime>1&&(this.r.renderScale=Math.max(.5,this.r.renderScale-.1),this.slowTime=0),this.fastTime>1.5&&this.r.renderScale<1&&(this.r.renderScale=Math.min(1,this.r.renderScale+.1),this.fastTime=0)}this.r.resize(this.gpu.canvas.clientWidth,this.gpu.canvas.clientHeight,devicePixelRatio);const r=this.state,a=r?r[6]>=0:!1,n=r?r[14]>.5:!1;r&&(this.heliOff=H+r[9]*q+r[10]*Ae),r&&this.trackDoor(r,e),a&&!this.door?(t.hit("KeyQ")&&(this.blinker=this.blinker===-1?0:-1,this.blinkerTurned=!1,this.sfx.click()),t.hit("KeyE")&&(this.blinker=this.blinker===1?0:1,this.blinkerTurned=!1,this.sfx.click())):a||(this.blinker=0);const s=this.heliOff;this.touch?.setMode(n?"heli":a?"car":"foot"),(t.mouseDX||t.mouseDY)&&(this.lastMouse=this.time),this.lockCam||(this.camYaw-=t.mouseDX*.0025),this.lockCam||(this.camPitch=_(this.camPitch-t.mouseDY*.0025,-1.45,1.2)),t.wheel&&(this.camDist=_(this.camDist+t.wheel*.6,2,14));let l=[0,2,0];if(r){const m=[r[0],r[1],r[2]];if(a){const b=H+r[6]*q;if(l=[r[b],r[b+1]+1.6,r[b+2]],this.camMode==="third"&&this.time-this.lastMouse>1.2){const T=r[b+3],g=Math.abs(r[b+10]),S=1-Math.exp(-e*(1+g*.15));let L=T-this.camYaw;L=Math.atan2(Math.sin(L),Math.cos(L)),this.camYaw+=L*S,this.camPitch+=(-.2-this.camPitch)*S}}else if(n){if(l=[r[s],r[s+1]+6.5,r[s+2]],this.camMode==="third"&&this.time-this.lastMouse>1.5){const b=1-Math.exp(-e*1.2);let T=r[s+3]-this.camYaw;T=Math.atan2(Math.sin(T),Math.cos(T)),this.camYaw+=T*b,this.camPitch+=(-.18-this.camPitch)*b}}else l=[m[0],m[1]+1.6,m[2]]}const c=[-Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),-Math.cos(this.camYaw)*Math.cos(this.camPitch)];let o;const i=n?this.camDist+10:a?this.camDist+3:this.camDist;if(this.camMode==="free"){const m=(t.down("ShiftLeft")?60:15)*e,b=[Math.cos(this.camYaw),0,-Math.sin(this.camYaw)];this.freePos=M.add(this.freePos,M.scale(c,t.axis("KeyS","KeyW")*m)),this.freePos=M.add(this.freePos,M.scale(b,t.axis("KeyA","KeyD")*m)),this.freePos[1]+=t.axis("KeyQ","KeyE")*m,o=this.freePos}else if(this.camMode==="first"&&r)if(n){const m=B.trs([r[s],r[s+1],r[s+2]],r[s+3],r[s+4],r[s+5]),b=B.transformPoint(m,[0,2.62,-1.35]);o=[b[0],b[1],b[2]]}else if(a){const m=H+r[6]*q,b=r[m+3];o=[r[m]+Math.cos(b)*-.38+-Math.sin(b)*.05,r[m+1]+1.22,r[m+2]-Math.sin(b)*-.38+-Math.cos(b)*.05]}else o=[r[0]-Math.sin(r[3])*.12,r[1]+1.66,r[2]-Math.cos(r[3])*.12];else{const m=r?r[8]:100,b=Math.min(i,Math.max(.6,m-.25));this.smoothCamDist=b<this.smoothCamDist?b:He(this.smoothCamDist,b,1-Math.exp(-e*3)),o=M.sub(l,M.scale(c,this.smoothCamDist))}this.camPos=o;const u=M.add(o,c),h=B.lookAt(o,u,[0,1,0]),d=this.r.width/this.r.height,p=this.hfov>0?2*Math.atan(Math.tan(this.hfov/2)/d):Ne,v=B.perspectiveRevZ(p,d,.1),x=this.skyState(),y=x.night>.5?x.moon:x.sun,k=[],P=[];for(let m=0;m<3;m++){const{vp:b,tx:T}=this.cascade(o,c,d,pe[m],pe[m+1],y);k.push(b),P.push(T)}if(r&&!this.waiting){const m=new Float32Array(32),b=this.camMode==="free";m[0]=b?0:t.axis("KeyA","KeyD"),m[1]=b?0:t.axis("KeyS","KeyW"),m[2]=this.camMode==="first"&&!a?this.camYaw:this.camYaw,m[3]=!b&&t.down("Space")?1:0,m[4]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,m[5]=!b&&(t.down("KeyF")||t.down("Enter"))?1:0,m[6]=!b&&(t.down("KeyW")||t.down("ArrowUp"))?1:0,m[7]=!b&&(t.down("KeyS")||t.down("ArrowDown"))?1:0,m[8]=b?0:(t.down("KeyA")||t.down("ArrowLeft")?1:0)-(t.down("KeyD")||t.down("ArrowRight")?1:0),m[9]=!b&&t.down("Space")?1:0,m[10]=t.down("KeyR")?1:0,this.door?.kind==="enter"&&(m[6]=m[7]=m[8]=0,m[9]=1),m[30]=!b&&t.down("KeyH")?1:0,m.set(l,11),m.set(M.scale(c,-1),14),m[17]=this.camMode==="third"?i:0,m[18]=b?1:0,m[19]=this.time,n&&!b&&(m[20]=t.down("Space")?1:0,m[21]=t.down("ShiftLeft")||t.down("ShiftRight")?1:0,m[22]=(t.down("KeyQ")?1:0)-(t.down("KeyE")?1:0),m[23]=t.locked&&t.mouseDown||(this.touch?.fire??!1)?1:0,m.set(c,24),m.set(o,27));const T=new Float32Array(64);T.set(B.mul(B.perspectiveRevZ(p*1.25,d*1.1,.1),h),0);for(let g=0;g<3;g++)T.set(k[g],16*(g+1));this.waiting=!0,this.worker.postMessage({type:"tick",dt:e,input:m,views:T,nviews:4,nchunks:this.nchunks})}else if(!r&&!this.waiting){this.waiting=!0;const m=new Float32Array(64);m.set(B.mul(v,h),0),this.worker.postMessage({type:"tick",dt:0,input:new Float32Array(32),views:m,nviews:1,nchunks:this.nchunks})}const I=[];r&&(this.emitDynamic(r,o,x.night,I,e),this.emitHeli(r,o,e,I,n)),this.r.updateDebris(e);const w={view:h,proj:v,projNJ:v,camPos:o,lightVP:k,splits:pe.slice(1),cascTexel:P,sunDir:y,night:x.night,sunColor:x.keyColor.map(m=>m*(1-.8*this.overcast)),sun:[...x.sun,x.sun[1]>-.2?20:0],moon:[...x.moon,.04*x.night],overcast:this.overcast,wetness:this.wet,rain:this.rain?1:0,time:this.time,fogDensity:.0016+this.wet*.004+this.overcast*.0022,vis:this.vis,spots:I};this.r.render(w),this.r.adaptExposure(e),this.hudUpdate(e,r,a),t.endFrame()}skyState(){const e=(this.tod-6)/24*Math.PI*2,t=.55,r=M.norm([Math.cos(e),Math.sin(e)*Math.cos(t),Math.sin(e)*Math.sin(t)*.8+.25]),a=M.norm([-r[0]*.9+.2,Math.max(-r[1],.25),-r[2]+.3]),n=_((.06-r[1])/.16,0,1),s=Math.max(r[1],-.02),l=Math.asin(_(s,-1,1))*180/Math.PI,c=1/(Math.max(s,0)+.50572*Math.pow(Math.max(l,0)+6.07995,-1.6364)),o=[58e-7*8e3,135e-7*8e3,331e-7*8e3],i=21e-6*1.1*1200,u=_((r[1]+.04)/.08,0,1),h=7.5,d=o.map(x=>Math.exp(-(x+i)*c)*h*u),p=[.05,.065,.1],v=n>.5?p.map(x=>x*(n-.5)*2):d;return{sun:r,moon:a,night:n,keyColor:v}}cascade(e,t,r,a,n,s){const l=Math.tan(Ne/2),c=(a+n)/2,o=l*n,i=o*r,u=M.add(e,M.scale(t,c+(i*i+o*o)/(2*(n-a))*0)),h=Math.hypot(n-c,i,o),d=Math.ceil(h*1.04*4)/4,p=Math.abs(s[1])>.98?[0,0,1]:[0,1,0],v=B.lookAt([0,0,0],M.scale(s,-1),p),x=B.transformPoint(v,u),y=2*d/2048,k=Math.floor(x[0]/y)*y,P=Math.floor(x[1]/y)*y,I=B.ortho(k-d,k+d,P-d,P+d,-x[2]-450,-x[2]+d+30);return{vp:B.mul(I,v),tx:y}}emitDynamic(e,t,r,a,n){const s=this.r,l=e[9],c=e[10],o=e[6];for(let u=0;u<l;u++){const h=H+u*q,d=[e[h],e[h+1],e[h+2]],p=e[h+3],v=d[0]-t[0],x=d[2]-t[2],y=Math.hypot(v,x);if(y>260)continue;const k=B.trs(d,p,e[h+4],e[h+5]),P=De[e[h+8]%De.length],I=e[h+11]>0,w=I?Math.max(r,.05):0,m=u===o?this.blinker:e[h+16],b=Math.sin(this.time*Math.PI*2*1.42)>0?1:0;s.add(G.CAR,1e4+u*10,k,[P[0],P[1],P[2],-1],[w>.06?1:0,e[h+9],m<0?b:0,m>0?b:0]),y<70&&this.emitSkids(e,u,k,n),this.door&&this.door.car===u&&this.emitDoor(k,P);for(let T=0;T<4;T++){const g=T<2,S=T%2===0?-.8:.8,L=B.mul(k,B.trs([S,.34,g?-1.35:1.35],g?e[h+6]:0,-e[h+7],0));s.add(G.WHEEL,1e4+u*10+1+T,L,[1,1,1,-1])}if(e[h+11]===2&&y<80){const T=B.mul(k,B.trs([-.38,1.12,.12],0,0,0,[.2,.24,.22])),g=this.looks[u%this.looks.length];s.add(G.SPHERE,1e4+u*10+6,T,[g.skin[0],g.skin[1],g.skin[2],20])}if(r>.2&&I&&a.length<16*8&&(y<70||u===o)){const T=[-Math.sin(p),-.12,-Math.cos(p)];a.push(d[0]+T[0]*2.4,d[1]+.7,d[2]+T[2]*2.4,1100,...M.norm(T),.82)}}for(let u=0;u<c;u++){const h=H+l*q+u*Ae,d=[e[h],e[h+1],e[h+2]];Math.hypot(d[0]-t[0],d[2]-t[2])>150||he(s,2e5+u*20,d,e[h+3],e[h+4],e[h+7],e[h+5],this.looks[(e[h+6]|0)%this.looks.length])}const i=this.door?this.doorPose(e):null;if(i?i.visible&&this.camMode!=="first"&&he(s,9e5,i.pos,i.yaw,i.phase,i.speed,0,Fe):o<0&&e[14]<.5&&this.camMode!=="first"&&he(s,9e5,[e[0],e[1],e[2]],e[3],e[4],e[5],e[7]>0?0:3,Fe),o>=0&&this.blinker!==0){const u=Math.abs(e[H+o*q+6]);u>.22?this.blinkerTurned=!0:this.blinkerTurned&&u<.05&&(this.blinker=0,this.blinkerTurned=!1)}}emitHeli(e,t,r,a,n){const s=this.r,l=this.heliOff,c=[e[l],e[l+1],e[l+2]],o=B.trs(c,e[l+3],e[l+4],e[l+5]),i=[de[0],de[1],de[2],-1];s.add(G.HELI,7e5,o,i),s.add(G.ROTOR,700001,B.mul(o,B.trs([0,3.47,.25],e[l+6],0,0)),i),s.add(G.TROTOR,700002,B.mul(o,B.trs([.36,4.25,9],0,e[l+8],0)),i);const u=B.mul(o,B.trs([0,.72,-3.55],e[l+9],e[l+10],0));s.add(G.GUN,700003,u,i);const h=e[l+11]>.5,d=B.transformPoint(u,[0,-.07,-1.95]);if(h){s.add(G.SPHERE,700004,B.trs([d[0],d[1],d[2]],Math.random()*6,0,0,[.5,.5,.9]),[1,.55,.15,40]);const w=M.norm(M.sub([d[0],d[1],d[2]],[u[12],u[13],u[14]]));a.length<15*8&&a.push(d[0],d[1],d[2],900,w[0],w[1],w[2],-.2)}const p=e[l+20]|0;for(let w=0;w<p;w++){const m=l+21+w*10,b=[e[m],e[m+1],e[m+2]],T=[e[m+3],e[m+4],e[m+5]];this.tracers.push({from:b,to:T,t:0,kind:e[m+6],n:[e[m+7],e[m+8],e[m+9]]}),this.sfx.shot(M.len(M.sub(b,t)))}const v=l+21+p*10,x=e[v]|0;for(let w=0;w<x;w++){const m=v+1+w*4,b=e[m]|0;this.r.knockProp(b,[e[m+1],e[m+2]],e[m+3]);const T=this.r.props[b];T&&this.sfx.impact(Math.hypot(T.base[0]-t[0],T.base[2]-t[2]))}if(n){const w=[e[l+16],e[l+17],e[l+18]],m=e[l+19]===1||e[l+19]===2,T=.008*Math.max(1,M.len(M.sub(w,t)));e[l+19]!==3&&s.add(G.SPHERE,73e4,B.trs(w,0,0,0,[T,T,T]),m?[1,.08,.05,40]:[.25,1,.45,40]);const g=document.getElementById("crosshair");g.classList.toggle("target",m),g.classList.toggle("hit",this.time-this.lastHitTime<.15)}let y=0;this.marks=this.marks.filter(w=>{if(w.t+=r,w.t>10)return!1;const m=Math.acos(Math.max(-1,Math.min(1,w.n[1]))),b=Math.atan2(w.n[0],w.n[2]),T=w.t>9?10-w.t:1,g=(w.kind===0?.55:.3)*T,S=M.add(w.p,M.scale(w.n,.025));if(s.add(G.SBOX,74e4+y++%256,B.trs(S,b,m,0,[g,.03,g]),w.kind===2?[.18,.01,.01,24]:[.015,.013,.012,24]),w.t<.6){const L=.35*(1-w.t/.6);s.add(G.SPHERE,75e4+y++%256,B.trs(M.add(w.p,M.scale(w.n,.08)),0,0,0,[L,L,L]),[1,.45,.1,40])}return!0});const k=320,P=2*Math.tan(62*Math.PI/180/2)/Math.max(1,this.r.height);let I=0;this.tracers=this.tracers.filter(w=>{w.id===void 0&&(w.id=this.tracerSeq++),w.t+=r;const m=M.len(M.sub(w.to,w.from)),b=w.t*k,T=M.scale(M.sub(w.to,w.from),1/Math.max(m,.001)),g=Math.atan2(-T[0],-T[2]),S=Math.asin(Math.max(-1,Math.min(1,T[1]))),L=1e6+w.id%4096*2;if(w.t<.15){const D=M.add(w.from,M.scale(T,m*.5)),E=Math.max(.025,M.len(M.sub(D,t))*P*1.5)*(1-w.t/.15);s.add(G.SBOX,L+1,B.trs(D,g,S,0,[E,E,m]),[.5,.22,.05,40])}if(b<m){const D=Math.min(12,m-b),E=M.add(w.from,M.scale(T,b+D*.5)),Z=Math.max(.09,M.len(M.sub(E,t))*P*3);return s.add(G.SBOX,L,B.trs(E,g,S,0,[Z,Z,D]),[1,.5,.1,40]),!0}const A=(b-m)/k;if(A<.09&&w.kind!==3){w.landed||(w.landed=!0,this.sfx.impact(M.len(M.sub(w.to,t))),this.marks.push({p:w.to,n:w.n,t:0,kind:w.kind}),this.marks.length>200&&this.marks.shift(),(w.kind===1||w.kind===2)&&(this.lastHitTime=this.time));const D=.6+A*8,E=w.kind===1?[1,.75,.35]:w.kind===2?[.6,.05,.03]:[1,.6,.25];return s.add(G.SPHERE,72e4+I++%64,B.trs(w.to,0,0,0,[D,D,D]),[E[0]*.6,E[1]*.6,E[2]*.6,40]),!0}return A<.1}),this.sfx.updateRotor(e[l+7],M.len(M.sub(c,t)),n&&this.camMode==="first")}emitSkids(e,t,r,a){const n=H+t*q,s=e[n+15],l=Math.abs(e[n+10]),c=e[n+9]>.5&&e[n+11]>0&&l>4;for(let o=0;o<4;o++){const i=t*4+o,u=o<2;if(!(s>2.6&&l>.8&&(!u||c||s>6))){this.skidLast.delete(i);continue}const d=o%2===0?-.8:.8,p=B.transformPoint(r,[d,.02,u?-1.35:1.35]),v=[p[0],p[1],p[2]],x=this.skidLast.get(i);if(!x){this.skidLast.set(i,v);continue}const y=M.sub(v,x),k=Math.hypot(y[0],y[2]);if(!(k<.3)){if(k<4){const P=M.scale(M.norm([-y[2],0,y[0]]),.11),I=_((s-2.6)/5,.35,1);this.r.addSkid([M.sub(x,P),M.add(x,P),M.add(v,P),M.sub(v,P)],I,this.isCity)}this.skidLast.set(i,v)}}}trackDoor(e,t){const r=e[6]|0;r<0&&e[14]<.5&&(this.lastFoot=[e[0],e[1],e[2]],this.lastFootYaw=e[3]),r!==this.prevCar&&(r>=0&&this.prevCar<0?this.door={kind:"enter",car:r,t:0,foot:[...this.lastFoot],footYaw:this.lastFootYaw}:r<0&&this.prevCar>=0&&(this.door={kind:"exit",car:this.prevCar,t:0,foot:[e[0],e[1],e[2]],footYaw:e[3]}),this.prevCar=r),this.door&&(this.door.t+=t,this.door.kind==="exit"&&r<0&&Math.hypot(e[0]-this.door.foot[0],e[2]-this.door.foot[2])>.6?this.door=null:this.door.t>=ve&&(this.door=null))}doorPose(e){const t=this.door,r=H+t.car*q,a=B.trs([e[r],e[r+1],e[r+2]],e[r+3],e[r+4],e[r+5]),n=k=>{const P=B.transformPoint(a,k);return[P[0],P[1],P[2]]},s=n([-1.35,0,.05]),l=n([-.4,.1,.15]),c=e[r+3],o=t.t/ve,i=k=>k*k*(3-2*k),u=t.kind==="enter"?o:1-o;if(u>.85)return{pos:l,yaw:c,phase:0,speed:0,visible:!1};if(u>.5){const k=i((u-.5)/.35),P=M.lerp(s,l,k);return P[1]-=.35*k,{pos:P,yaw:c-Math.PI/2*(1-k),phase:0,speed:0,visible:!0}}const h=i(u/.5),d=M.lerp(t.foot,s,h),p=s[0]-t.foot[0],v=s[2]-t.foot[2],x=Math.hypot(p,v)>.2?Math.atan2(-p,-v)*(t.kind==="enter",1)+(t.kind==="enter"?0:Math.PI):c,y=h>.85?c-Math.PI/2:x;return{pos:d,yaw:y,phase:this.time*2.2,speed:Math.hypot(p,v)>.2?1.6:0,visible:!0}}emitDoor(e,t){const r=this.door,a=r.t/ve,n=r.kind==="enter"?a:1-a,s=_((n-.3)/.25,0,1)*(1-_((n-.85)/.15,0,1));if(s<=.001)return;const l=s*1.05,c=B.mul(e,B.trs([-.9,.78,-.62],-l,0,0)),o=B.mul(c,B.trs([0,0,.55],0,0,0,[.06,.62,1.1]));this.r.add(G.SBOX,96e4,o,[t[0],t[1],t[2],16])}hudUpdate(e,t,r){if(this.hudTimer+=e,t&&t[14]>.5){const l=this.heliOff;this.speedEl.textContent=`${(t[l+13]*3.6).toFixed(0)} km/h  ALT ${t[l+14].toFixed(0)} m`,this.promptEl.textContent=t[l+7]<.95?`ローター始動中… ${(t[l+7]*100).toFixed(0)}%`:t[l+12]>.5?"F: 降りる":""}else t&&(r?(this.speedEl.textContent=`${Math.abs(t[12]).toFixed(0)} km/h`,this.promptEl.textContent=Math.abs(t[12])<14?"F: 降りる":""):(this.speedEl.textContent="",this.promptEl.textContent=this.camMode==="free"?"":t[15]>.5?"F: ヘリに乗る":t[11]>=0?"F: 車に乗る":"H: ヘリを呼ぶ"));if(this.hudTimer<.25)return;this.hudTimer=0;const a=Math.floor(this.tod),n=Math.floor((this.tod-a)*60),s=this.stats;if(this.mobile){this.hud.textContent=`FPS ${this.stats.fps.toFixed(0)}  ${this.r.width}x${this.r.height}`;return}this.hud.textContent=[`FPS ${s.fps.toFixed(1)}  frame ${s.ms.toFixed(1)} ms (worst ${s.worst.toFixed(1)})  gpu ${this.r.gpuMs.toFixed(1)} ms  worker ${this.workerMs.toFixed(2)} ms`,`render ${this.r.width}x${this.r.height} (scale ${this.r.renderScale.toFixed(1)}${this.dynRes?" auto":""})  draws ${this.r.stats.draws}  tris ${(this.r.stats.tris/1e3).toFixed(0)}k`,`time ${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}${this.paused?" (paused)":""}  exposure ${this.r.exposure.toFixed(2)}  ${this.rain?"rain":"clear"} wet ${this.wet.toFixed(2)}`,`cam ${this.camMode}  pos ${this.camPos.map(l=>l.toFixed(1)).join(", ")}  ${t&&t[14]>.5?"flying":r?"driving":"on foot"}`,`AO ${this.r.aoEnabled?"on":"off"}  bloom ${this.r.bloomEnabled?"on":"off"}  TAA ${this.r.taaEnabled?"on":"off"}  SSR/SSGI ${this.r.ssfxEnabled?"on":"off"}`,`mode ${xt[this.r.rtMode]} (Y)${this.r.rtMode===2?`  samples ${this.r.rtSamples}  bounces ${this.r.ptBounces}`:""}${this.r.rtStatus?"  "+this.r.rtStatus:""}`,this.worldInfo,this.gpu.adapterName].join(`
`)}}export{Gt as Game};
