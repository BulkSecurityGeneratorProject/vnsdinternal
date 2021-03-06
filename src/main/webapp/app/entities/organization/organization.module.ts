import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { VnsdinternalSharedModule } from 'app/shared';
import {
  OrganizationComponent,
  OrganizationDetailComponent,
  OrganizationUpdateComponent,
  OrganizationDeletePopupComponent,
  OrganizationDeleteDialogComponent,
  organizationRoute,
  organizationPopupRoute
} from './';

const ENTITY_STATES = [...organizationRoute, ...organizationPopupRoute];

@NgModule({
  imports: [VnsdinternalSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OrganizationComponent,
    OrganizationDetailComponent,
    OrganizationUpdateComponent,
    OrganizationDeleteDialogComponent,
    OrganizationDeletePopupComponent
  ],
  entryComponents: [
    OrganizationComponent,
    OrganizationUpdateComponent,
    OrganizationDeleteDialogComponent,
    OrganizationDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VnsdinternalOrganizationModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
