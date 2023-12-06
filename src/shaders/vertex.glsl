#version 300 es

in vec3 in_pos;
in float brightness;

layout (std140) uniform Shared {
    mat4 projection;

    float time;
    float brightness_mult;
};

void main() {
    gl_Position = projection * vec4(in_pos, 1.0);
}
