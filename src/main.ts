import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//bootstrapModule() : 앵귤러 프로젝트가 실행되었을 때, 가장 먼저 사용할 모듈
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
