#pragma glslify:cosPalette=require(glsl-takara/palette/cosPalette)

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

uniform sampler2D iChannel0;

varying float vNoise;

void main(){
    vec2 p=vUv;
    
    vec3 col=texture(iChannel0,p).xyz;
    
    float noise=vNoise;
    col=cosPalette(noise,vec3(.5,.5,.5),vec3(.5,.5,.5),vec3(1.,1.,1.),vec3(0.,.10,.20));
    
    gl_FragColor=vec4(col,1.);
}