import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerResponse } from '../Model/registerResponses';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  formTeste !: FormGroup;
  formBuilder = inject(FormBuilder)

  responses !:registerResponse;

  ngOnInit(): void {
    this.formTeste = this.formBuilder.group({
      pergunta1: [''],
      pergunta2: [''],
      pergunta3: [''],
      pergunta4: [''],
      pergunta5: [''],
      pergunta6: [''],
      sugestao: ['']
    });
  }

onSubmit(){
  this.responses = {
    pergunta1: this.formTeste.get('pergunta1')?.value ? this.formTeste.get('pergunta1')?.value as number : 0,
    pergunta2: this.formTeste.get('pergunta2')?.value ? this.formTeste.get('pergunta2')?.value as number : 0,
    pergunta3: this.formTeste.get('pergunta3')?.value ? this.formTeste.get('pergunta3')?.value as number : 0,
    pergunta4: this.formTeste.get('pergunta4')?.value ? this.formTeste.get('pergunta4')?.value as number : 0,
    pergunta5: this.formTeste.get('pergunta5')?.value ? this.formTeste.get('pergunta5')?.value as number : 0,
    pergunta6: this.formTeste.get('pergunta6')?.value ? this.formTeste.get('pergunta6')?.value as number : 0,
    sugestao : this.formTeste.get('sugestao')?.value ?  this.formTeste.get('sugestao')?.value as string : 'nãoRespondeu'
  }
}

}
