# Simple Course Blog
A basic blog for managing your courses. You can add, view, edit, and delete courses. 
Each course includes a title, description, and a Youtube video link that can be watched directly from the blog.
## Folder Structure
```bash
coursio/
├── node_modules/ # Node.js dependencies
├── src/
│ ├── app/
│ │ ├── controllers/ # Application controllers
│ │ │ ├── CourseController.js
│ │ │ ├── MeController.js
│ │ │ └── SiteController.js
│ │ ├── middlewares/ # Custom middlewares
│ │ │ └── SortMiddleware.js
│ │ ├── models/ # Mongoose models
│ │ │ └── Course.js
│ │ └── config/
│ │ └── db/
│ │ └── index.js # MongoDB connection setup
│ ├── public/
│ │ ├── css/ # Compiled CSS
│ │ │ ├── app.css
│ │ │ └── app.css.map
│ │ └── vendor/ # Vendor assets (optional — empty here)
│ ├── resources/
│ │ ├── scss/ # SCSS stylesheets
│ │ │ ├── _variables.scss
│ │ │ └── app.scss
│ │ └── views/
│ │ ├── courses/ # Course-related views
│ │ │ ├── create.hbs
│ │ │ ├── edit.hbs
│ │ │ └── show.hbs
│ │ ├── layouts/ # Layout templates
│ │ │ └── main.hbs
│ │ ├── me/ # User's courses views
│ │ │ ├── stored-courses.hbs
│ │ │ └── trash-courses.hbs
│ │ └── partials/ # Header, footer, reusable partials
│ │ ├── footer.hbs
│ │ ├── header.hbs
│ │ └── home.hbs
│ ├── routes/
│ │ ├── courses.js # Course routes
│ │ ├── index.js # Main routes entry
│ │ ├── me.js # User routes
│ │ ├── site.js # Site routes
│ │ └── util/ # Utilities
│ │ ├── mongoose.js
│ │ └── index.js
├── .gitignore
├── nodemon.json
├── package-lock.json
├── package.json
└── README.md
```