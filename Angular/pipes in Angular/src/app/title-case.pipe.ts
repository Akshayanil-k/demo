import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
  transform(name: string, gender: string): string {
    const title = gender === 'male' ? 'Mr.' : 'Miss';
    return `${title} ${name}`;
  }
}
