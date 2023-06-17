#pragma glslify:cnoise=require(glsl-noise/classic/3d)

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

uniform float uDistort;

varying float vNoise;

vec3 distort(vec3 p){
    float noise=cnoise(p+iTime);
    p+=noise*normal*.25*uDistort;
    vNoise=noise;
    return p;
}

void main(){
    vec3 p=position;
    
    p=distort(p);
    
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    
    vUv=uv;
}