#pragma glslify:cosPalette=require(glsl-takara/palette/cosPalette)

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

varying float vNoise;

void main(){
    vec2 p=vUv;
    
    float noise=vNoise;
    vec3 col=cosPalette(noise,vec3(.5,.5,.5),vec3(.5,.5,.5),vec3(1.,1.,1.),vec3(0.,.10,.20));
    
    gl_FragColor=vec4(col,1.);
}