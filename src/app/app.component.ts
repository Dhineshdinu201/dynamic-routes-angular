import { Component, NgModule, Compiler } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  constructor(private compiler: Compiler,
              private router: Router) {}

  createDynamic() {
    const template = '<span>generated on the fly</span>';
    const tmpCmp = Component({template: template})(class {});

    const routes = [{path: '', component: tmpCmp}];
    const tmpModule = NgModule({
      imports: [RouterModule.forChild(routes)],
      declarations: [tmpCmp]})(class {});
    
    this.compiler.compileModuleAsync(tmpModule).then((module) => {

      const appRoutes = [...this.router.config];

      const route = {
        path: 'dynamic',
        loadChildren() { return module }
      };

      appRoutes.push(route);

      this.router.resetConfig(appRoutes);
      this.router.navigateByUrl('/dynamic');
    });
  }
}
