# Ka Wa (Darren) Wong — personal academic site

Source for <https://darrenwongkawa.github.io>, the personal academic website of
Ka Wa (Darren) Wong, a physics student at Zhejiang University working on
theoretical and computational condensed matter physics.

The site is built with [Jekyll](https://jekyllrb.com/) on the
[Academic Pages](https://github.com/academicpages/academicpages.github.io)
theme and published by GitHub Pages from the `master` branch.

## Layout

| Path | Content |
| --- | --- |
| `_pages/` | Top-level pages (`about.md` is the home page, `cv.md`, archives) |
| `_posts/` | Blog posts / research notes |
| `_learning/`, `_teaching/`, `_talks/` | Collections shown under Learning, Notes and Talks |
| `_data/navigation.yml` | Header menu |
| `_data/cv.json` | Structured CV data |
| `_config.yml` | Site-wide settings and author sidebar |
| `files/` | PDFs linked from the site (served at `/files/...`) |
| `images/` | Profile picture and favicons |

## Local preview

Requires Ruby 3.x and Bundler.

```bash
bundle config set --local path 'vendor/bundle'   # optional: install gems locally
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>. Changes to `_config.yml` need a server restart.

Or with Docker:

```bash
docker compose up
```

Build output goes to `_site/`, which is ignored by git.

## License

Theme code is MIT-licensed (see `LICENSE`). Site content © Ka Wa Wong.
