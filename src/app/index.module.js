/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import runBlock from './index.run';
import MainController from './main/main.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('bpTasks', [])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
