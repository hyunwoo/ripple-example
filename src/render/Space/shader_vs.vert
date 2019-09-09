
precision mediump float;
precision mediump int;
uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional
uniform float time;
attribute vec3 position;
attribute vec4 color;
attribute vec2 uv;
varying vec3 vPosition;
varying vec4 vColor;
varying vec2 vUv;
varying float vTime;
void main()	{
	vPosition = position;
	vColor = color;
	vTime = time;
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}