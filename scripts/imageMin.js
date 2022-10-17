import compress_images from "compress-images";

compress_images(
  'static/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
  'dist/',
  {
    compress_force: false,
    statistic: true,
    autoupdate: true
  },
  false,
  {
    jpg: {
      engine: "mozjpeg",
      command: ["-quality", "60"]
    }
  },
  {
    png: {
      engine: "pngquant",
      command: ["--quality=20-50", "-o"]
    }
  },
  {
    svg: {
      engine: "svgo",
      command: "--multipass"
    }
  },
  {
    gif: {
      engine: "gifsicle",
      command: ["--colors", "64", "--use-col=web"]
    }
  },
  function (error) {
    if (error) {
      console.log("------ Error ------");
      console.log(error);
      console.log("------ /Error ------");
    }
  }
);
