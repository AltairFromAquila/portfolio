// x, y, z, brightness

const tmpRandomStars: number[] = [];
const randomStarsCount: number = Math.random() * 1024;

for (let i = 0; i < randomStarsCount; ++i) {
    tmpRandomStars.push(((Math.random() * 8) - 4));
    tmpRandomStars.push(((Math.random() * 8) - 4));
    tmpRandomStars.push(Math.random() * 0.5);
    tmpRandomStars.push(Math.random() * 4);
}


export const vertices: Float32Array = new Float32Array([
    // Aquila
      0.0,   1.0,   1,  32,
     -0.3,   0.9,   1,  10,
      0.2,   1.1,   1,  16,
      0.2,   0.0,   1,  10,
      0.0,  -1.1,   1,  12,
      0.1,  -1.3,   1,  10,
     -0.6,   0.1,   1,  10,
     -1.0,   0.2,   1,  10,
      1.1,   0.5,   1,  16,
      1.3,   0.5,   1,  10,

      ...tmpRandomStars
]);
