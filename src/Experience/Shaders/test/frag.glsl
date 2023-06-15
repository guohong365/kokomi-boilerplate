#pragma glslify:cnoise2=require(glsl-noise/classic/2d)
#pragma glslify:cosPalette=require(glsl-takara/palette/cosPalette)

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

void main(){
    vec2 p=vUv;
    
    vec3 col=vec3(p,0.);
    
    float noise=cnoise2(p*10.);
    col=vec3(noise);
    col=cosPalette(noise,vec3(.5,.5,.5),vec3(.5,.5,.5),vec3(1.,1.,1.),vec3(0.,.10,.20));
    
    gl_FragColor=vec4(col,1.);
}