module.exports = {
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
	version: {
	  'type': 'string',
      'required': false,
      'message': 'Project version',
      'default': '1.0.0'
	},
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'a Vue.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: "To get started:\n\n  {{^inPlace}}cd {{destDirName}}/\n  {{/inPlace}}npm install # Or yarn install\n  npm run dev # Or yarn run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack",
  complete: function (data) {
    console.log(0);
  }
};