import { Routes } from '@angular/router';

function loadComponent(folder: string, path: string) {
  const componentName =
    path
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('') + 'Component';

  return () =>
    import(`./pages/${folder}/${path}/${path}.component`).then(
      (m) => m[componentName],
    );
}

export const routes: Routes = [
  {
    path: 'URL',
    loadComponent: loadComponent('folder_name', 'component_name'),
  },
];
