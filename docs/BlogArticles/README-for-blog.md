# Adding new blog articles
This is a doucmentation on how to add new blog articles on Dotmote Labs' official website.

## Setting up the HTML file and the image folder

- Each new article is stored as a new HTML file under the folder **docs >> BlogArticles**.
- The name of the HTML file is a combination of keywords from the article's headline. Keywords are connected by dashes "-".
- Using the same naming convention, create an image folder to store all images of the article under **docs >> assets >> img >> Blog** 

## Formatting the article in the HTML file
1. Copy the article template named `template.html` in the **BlogArticles** folder.
2. Update `<title>` with article headline and `<meta name="description">` with article description.
3. Adjust texts, images, and author's info in `<body>` accordingly.
4. For Facebook share button at the beginning and the end of the file, change the naming of the `href` address to match the naming of the article.

## Linking the article to the main blog page
In `blog.html`, create a new blog card and update the image, author, date, and link to the blog article. 
