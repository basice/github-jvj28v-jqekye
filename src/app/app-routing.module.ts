import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormlyFieldsLayoutComponent} from './formly-fields-layout/formly-fields-layout.component';
import {FormlyTabsAsTypeComponent} from './formly-tabs-as-type/formly-tabs-as-type.component';

const routes: Routes = [
  {path: '', redirectTo: '/formly-fields-layout', pathMatch: 'full'},
  {path: 'formly-fields-layout', component: FormlyFieldsLayoutComponent},
  {path: 'formly-tabs-as-type', component: FormlyTabsAsTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
