exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;


  createRedirect({
  fromPath: `/SkyhogaHome/*`,
  toPath: `/portfolio/SkyhogaHome/*`,
});
}
