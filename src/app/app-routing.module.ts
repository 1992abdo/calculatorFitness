import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './component/test-one/test-one.component';
import { TestTwoComponent } from './component/test-two/test-two.component';

const routes: Routes = [
  { path: "", component: TestOneComponent },
  { path: "test-two", component: TestTwoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
