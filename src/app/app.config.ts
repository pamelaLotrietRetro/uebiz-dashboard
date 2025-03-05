import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CustomTranslateLoader } from '@services/translate.loader.service';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from '@app/app.routes';
import { authEffects } from '@store/authState/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthStore } from '@store/authState/auth.store';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'uebiz',
          darkModeSelector: 'none',
          cssLayer: false,
        },
      },
    }),
    provideHttpClient(),
    AuthStore,
    provideStoreDevtools({
      name: 'UEBiz App',
    }),
  ],
};

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomTranslateLoader(http);
}