import {bootstrap}    from 'angular2/platform/browser' // import bootstrap
import {AppComponent} from './app.component' // import the component we just created
import { HTTP_PROVIDERS } from 'angular2/http';

// import 'jquery';

bootstrap(AppComponent, [HTTP_PROVIDERS]); // finally bootstrap it.
