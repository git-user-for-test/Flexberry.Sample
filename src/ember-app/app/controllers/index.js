import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books.caption'),
          title: i18n.t('forms.application.sitemap.books.title'),
          children: [{
            link: 'new-platform-sample-country-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-sample-country-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-sample-country-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'new-platform-sample-book-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-sample-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-sample-book-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'new-platform-sample-author-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-sample-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-sample-author-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'new-platform-sample-language-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-sample-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-sample-language-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})