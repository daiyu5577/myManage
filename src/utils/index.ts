interface webpackRequire extends NodeRequire {
  context(directory: String, includeSubdirs: Boolean, filter: RegExp): any;
}

const files = (require as any).context('./', true, /(\.js|\.ts|\.tsx)$/);
let tools: any = {};

files.keys().forEach((key: any) => {
  if (key === './index.js' || !files(key).default) return;
  tools = Object.assign(tools, files(key).default);
});

export default tools;
