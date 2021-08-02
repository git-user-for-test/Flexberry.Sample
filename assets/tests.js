'use strict';

define('ember-app/tests/acceptance/flexberry/new-platform-sample-author-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | new platform sample author l');

  (0, _qunit.test)('testing new-platform-sample-author-l', function (assert) {
    var _this = this;

    visit('/new-platform-sample-author-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/new-platform-sample-book-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | new platform sample book l');

  (0, _qunit.test)('testing new-platform-sample-book-l', function (assert) {
    var _this = this;

    visit('/new-platform-sample-book-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/new-platform-sample-country-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | new platform sample country l');

  (0, _qunit.test)('testing new-platform-sample-country-l', function (assert) {
    var _this = this;

    visit('/new-platform-sample-country-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/new-platform-sample-language-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | new platform sample language l');

  (0, _qunit.test)('testing new-platform-sample-language-l', function (assert) {
    var _this = this;

    visit('/new-platform-sample-language-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-author-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-author-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-author-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-author-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-author-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-author-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-book-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-book-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-book-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-book-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-book-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-book-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-country-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-country-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-country-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-country-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-country-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-country-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-language-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-language-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-language-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-language-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/new-platform-sample-language-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-sample-language-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-author-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-author-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-author-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-author-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-book-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-book-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-book-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-book-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-country-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-country-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-country-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-country-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-language-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-language-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/new-platform-sample-language-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-sample-language-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-author-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-author-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-author-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-author-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-book-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-book-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-book-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-book-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-country-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-country-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-country-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-country-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-language-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-language-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/new-platform-sample-language-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-sample-language-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-author-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-author-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-book-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-book-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-country-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-country-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-language-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-language-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('models/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('models/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('models/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-author-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-author-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-author-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-author-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-author-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-author-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-book-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-book-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-book-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-book-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-book-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-book-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-country-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-country-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-country-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-country-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-country-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-country-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-language-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-language-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-language-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-language-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/new-platform-sample-language-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-sample-language-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-author-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-author-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-author.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-book-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-book-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-book.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-country-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-country-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-country.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-country.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-language-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-language-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/new-platform-sample-language.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-sample-language.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/new-platform-sample-author-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/new-platform-sample-author-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/new-platform-sample-book-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/new-platform-sample-book-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/new-platform-sample-country-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/new-platform-sample-country-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/new-platform-sample-language-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/new-platform-sample-language-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-author-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-author-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-author-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-author-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-book-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-book-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-book-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-book-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-country-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-country-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-country-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-country-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-language-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-language-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-platform-sample-language-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-sample-language-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/new-platform-sample-author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-platform-sample-author-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/new-platform-sample-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-platform-sample-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/new-platform-sample-country-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-platform-sample-country-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/new-platform-sample-language-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-platform-sample-language-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-author-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-author-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-author-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-author-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-book-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-book-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-book-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-book-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-country-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-country-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-country-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-country-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-language-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-language-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-platform-sample-language-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-sample-language-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/new-platform-sample-author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/new-platform-sample-author-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/new-platform-sample-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/new-platform-sample-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/new-platform-sample-country-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/new-platform-sample-country-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/new-platform-sample-language-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/new-platform-sample-language-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-author-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-author-e', 'Unit | Controller | new-platform-sample-author-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-author-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-author-l', 'Unit | Controller | new-platform-sample-author-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-book-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-book-e', 'Unit | Controller | new-platform-sample-book-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-book-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-book-l', 'Unit | Controller | new-platform-sample-book-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-country-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-country-e', 'Unit | Controller | new-platform-sample-country-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-country-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-country-l', 'Unit | Controller | new-platform-sample-country-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-language-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-language-e', 'Unit | Controller | new-platform-sample-language-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-sample-language-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:new-platform-sample-language-l', 'Unit | Controller | new-platform-sample-language-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/new-platform-sample-author-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-author', 'Unit | Model | new-platform-sample-author', {
    // Specify the other units that are required for this test.
    needs: ['model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/new-platform-sample-book-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-book', 'Unit | Model | new-platform-sample-book', {
    // Specify the other units that are required for this test.
    needs: ['model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/new-platform-sample-country-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-country', 'Unit | Model | new-platform-sample-country', {
    // Specify the other units that are required for this test.
    needs: ['model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/new-platform-sample-language-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-language', 'Unit | Model | new-platform-sample-language', {
    // Specify the other units that are required for this test.
    needs: ['model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-author-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-author-e', 'Unit | Route | new-platform-sample-author-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-author-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-author-l', 'Unit | Route | new-platform-sample-author-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-book-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-book-e', 'Unit | Route | new-platform-sample-book-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-book-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-book-l', 'Unit | Route | new-platform-sample-book-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-country-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-country-e', 'Unit | Route | new-platform-sample-country-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-country-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-country-l', 'Unit | Route | new-platform-sample-country-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-language-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-language-e', 'Unit | Route | new-platform-sample-language-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-sample-language-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:new-platform-sample-language-l', 'Unit | Route | new-platform-sample-language-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/new-platform-sample-author-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-author', 'Unit | Serializer | new-platform-sample-author', {
    // Specify the other units that are required for this test.
    needs: ['serializer:new-platform-sample-author', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/new-platform-sample-book-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-book', 'Unit | Serializer | new-platform-sample-book', {
    // Specify the other units that are required for this test.
    needs: ['serializer:new-platform-sample-book', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/new-platform-sample-country-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-country', 'Unit | Serializer | new-platform-sample-country', {
    // Specify the other units that are required for this test.
    needs: ['serializer:new-platform-sample-country', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/new-platform-sample-language-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('new-platform-sample-language', 'Unit | Serializer | new-platform-sample-language', {
    // Specify the other units that are required for this test.
    needs: ['serializer:new-platform-sample-language', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:new-platform-sample-author', 'model:new-platform-sample-book', 'model:new-platform-sample-country', 'model:new-platform-sample-language', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
