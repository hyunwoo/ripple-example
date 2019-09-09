precision mediump float;
precision mediump int;
uniform float time;
uniform sampler2D tex1;
uniform sampler2D tex2;
uniform sampler2D tex3;

varying vec3 vPosition;
varying vec4 vColor;
varying vec2 vUv;
varying float vTime;
void main()	{
	vec2 uv = vUv;
	vec4 movement = texture2D(tex3, vUv +vec2(0, time));
	movement = movement * vUv.y * sin(time * 4.) * 3.;
	uv.x += movement.x * 0.1;
	uv.y += movement.y * 0.1;
	// uv.x = uv.x + time ; 
	// uv.x *= 2.0;
	// uv.y *= 2.0;
	vec4 tc1 = texture2D(tex1, uv);
	vec4 tc2 = texture2D(tex2, uv);
	gl_FragColor = tc1 * sin(time * 10.0) + tc2 * (1.0 - sin(time * 10.0));
}