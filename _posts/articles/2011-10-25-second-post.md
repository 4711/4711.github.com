---
layout: default
title: Second Post
---

Introduction to Pages
=====================

The GitHub Pages feature allows you to publish content to the web by simply pushing content to one of your GitHub hosted repositories. There are two different kinds of Pages that you can create: User Pages and Project Pages.

User & Organization Pages
-------------------------

Let's say your GitHub username is "alice". If you create a GitHub repository named `alice.github.com`, commit a file named `index.html` into the `master` branch, and push it to GitHub, then this file will be automatically published to [http://alice.github.com/](http://alice.github.com/).

On the first push, it can take up to ten minutes before the content is available.

The same works for organizations.  If your org account is named "PlanEx", creating the repo `planex.github.com` under the org will publish pages to <http://planex.github.com/>.

Real World Example: [github.com/defunkt/defunkt.github.com](http://github.com/defunkt/defunkt.github.com/) &rarr; [http://defunkt.github.com/](http://defunkt.github.com/).

Project Pages
-------------

Let's say your GitHub username is "bob" and you have an existing repository named `fancypants`. If you create a new root branch named `gh-pages` in your repository, any content pushed there will be published to [http://bob.github.com/fancypants/](http://bob.github.com/fancypants/).

In order to create a new root branch, first ensure that your working directory is clean by committing or stashing any changes. <span style="color: #a00;">The following operation will lose any uncommitted files!  You might want to run this in a fresh clone of your repo.</span>

    $ cd /path/to/fancypants
    $ git symbolic-ref HEAD refs/heads/gh-pages
    $ rm .git/index
    $ git clean -fdx

After running this you'll have an empty working directory (don't worry, your main repo is still on the `master` branch). Now you can create some content in this branch and push it to GitHub. For example:

    $ echo "My GitHub Page" > index.html
    $ git add .
    $ git commit -a -m "First pages commit"
    $ git push origin gh-pages

On the first push, it can take up to ten minutes before the content is available.

Real World Example: [github.com/defunkt/ambition@gh-pages](http://github.com/defunkt/ambition/tree/gh-pages) &rarr; [http://defunkt.github.com/ambition](http://defunkt.github.com/ambition).

### Project Page Generator

If you don't want to go through the steps above to generate your branch, or you simply would like a generic page, you can use our page generator to create your gh-pages branch for you and fill it with a default page.

First navigate to your project and click the 'Admin' button on the top right

> ![Admin button](admin_button.png)

Then check the 'GitHub Pages' check box.

> ![github pages checkbox](ghpages_checkbox.png)

A pop-up will appear. Click on the 'Automatic GitHub Page Generator'

> ![github pages popup generator](ghpages_popup.png)

After your page is generated, you can check out the new branch:

    $ cd Repos/ampere
    $ git fetch origin
    remote: Counting objects: 92, done.
    remote: Compressing objects: 100% (63/63), done.
    remote: Total 68 (delta 41), reused 0 (delta 0)
    Unpacking objects: 100% (68/68), done.
    From git@github.com:tekkub/ampere
     * [new branch]      gh-pages     -> origin/gh-pages
    $ git checkout -b gh-pages origin/gh-pages
    Branch gh-pages set up to track remote branch refs/remotes/origin/gh-pages.
    Switched to a new branch "gh-pages"
