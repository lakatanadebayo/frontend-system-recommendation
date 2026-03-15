import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'languageLabel' })
export class LanguageLabelPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) {
      return 'Inconnu'; // ou ''
    }
    switch (value) {
      case 'fr': return 'Français';
      case 'en': return 'Anglais';
      default: return value;
    }
  }
}
