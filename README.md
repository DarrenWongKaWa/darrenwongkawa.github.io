# Ka Wa (Darren) Wong — personal academic site

Source for <https://darrenwongkawa.github.io>, the personal academic website of
Ka Wa (Darren) Wong, a physics student at Zhejiang University working on
theoretical and computational condensed matter physics.

The site is built with [Jekyll](https://jekyllrb.com/) and published by GitHub Pages
from the `master` branch. It started from the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) template and now
uses its own minimal layout: plain CSS (`assets/css/site.css`), one small script
(`assets/js/site.js`), automatic dark mode, and MathJax / Mermaid loaded only on pages that use them.

## Layout

| Path | Content |
| --- | --- |
| `_pages/about.md` | Home page (bio, news, selected research, education, honors) |
| `_pages/research.md` | Research page, rendered from `_data/research.yml` |
| `_pages/writing.html` | Writing index: posts, learning notes, course notes and talks |
| `_pages/cv.md` | CV |
| `_data/research.yml` | Projects; `featured: true` puts a project on the home page |
| `_data/navigation.yml` | Header menu |
| `_posts/`, `_learning/`, `_teaching/`, `_talks/` | Writing collections |
| `_layouts/`, `_includes/` | Page templates (`home`, `single`, `archive`) and partials |
| `_config.yml` | Site-wide settings (`author:` drives the home-page header) |
| `files/` | PDFs linked from the site (served at `/files/...`) |
| `images/` | Profile picture and favicons |

## Local preview

The `Gemfile` pins the same `github-pages` gem that GitHub uses (Jekyll 3.10), so a local
build matches production. It needs Ruby 3.3 (for example `brew install ruby@3.3`) and Bundler.

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>. Changes to `_config.yml` need a server restart.
`Dockerfile` and `docker-compose.yaml` come from the original template and are not maintained.

Build output goes to `_site/`, which is ignored by git.

## License

Theme code is MIT-licensed (see `LICENSE`). Site content © Ka Wa Wong.
