#pragma glslify:cnoise2=require(glsl-noise/classic/2d)

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

void main(){
    vec2 p=vUv;
    
    vec3 col=vec3(p,0.);
    
    float noise=cnoise2(p*10.);
    col=vec3(noise);
    
    gl_FragColor=vec4(col,1.);
}