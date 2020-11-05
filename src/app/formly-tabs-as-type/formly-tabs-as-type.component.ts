import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {startWith, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-formly-tabs-as-type',
  templateUrl: './formly-tabs-as-type.component.html',
  styleUrls: ['./formly-tabs-as-type.component.scss']
})
export class FormlyTabsAsTypeComponent implements OnDestroy {
  onDestroy$ = new Subject<void>();
  form = new FormGroup({});
  model: any = {
    team: '',
    player: ''
  };

  public modelToApply = {
    sport: '1',
    investmentName: 'Invest',
    investmentDate: '2019-02-14',
    carBrand: 'Audi'
  };

  fields: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'investmentName',
      templateOptions: {
        label: 'Name of Investment',
        required: true,
      },
    },
    {
      // key: 'formlyTabs',
      type: 'card',
      templateOptions: {
        className: 'border-primary'
      },
      fieldGroup: [
        {
          templateOptions: {
            label: 'First tab'
          },
          fieldGroup: [
            {
              key: 'sport',
              type: 'select',
              templateOptions: {
                label: 'Sport',
                options: [
                  {id: '1', name: 'Soccer'},
                  {id: '2', name: 'Basketball'},
                ],
                valueProp: 'id',
                labelProp: 'name',
              },
            },
            {
              key: 'team',
              type: 'select',
              templateOptions: {
                label: 'Team',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              hooks: {
                onInit: (field) => {
                  const {form, model, options} = field;
                  const teams = [
                    {id: '1', name: 'Bayern Munich', sportId: '1'},
                    {id: '2', name: 'Real Madrid', sportId: '1'},
                    {id: '3', name: 'Cleveland', sportId: '2'},
                    {id: '4', name: 'Miami', sportId: '2'},
                  ];

                  form.get('sport').valueChanges.pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('sport').value),
                    tap(sportId => {
                      field.formControl.setValue('');
                      field.templateOptions.options = teams.filter(team => team.sportId === sportId);
                    }),
                  ).subscribe();
                },
              },
            },
            {
              key: 'player',
              type: 'select',
              templateOptions: {
                label: 'Player',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              hooks: {
                onInit: (field) => {
                  const {form, model, options} = field;
                  const players = [
                    {id: '1', name: 'Bayern Munich (Player 1)', teamId: '1'},
                    {id: '2', name: 'Bayern Munich (Player 2)', teamId: '1'},
                    {id: '3', name: 'Real Madrid (Player 1)', teamId: '2'},
                    {id: '4', name: 'Real Madrid (Player 2)', teamId: '2'},
                    {id: '5', name: 'Cleveland (Player 1)', teamId: '3'},
                    {id: '6', name: 'Cleveland (Player 2)', teamId: '3'},
                    {id: '7', name: 'Miami (Player 1)', teamId: '4'},
                    {id: '8', name: 'Miami (Player 2)', teamId: '4'},
                  ];

                  form.get('team').valueChanges.pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('team').value),
                    tap(sportId => {
                      field.formControl.setValue('');
                      field.templateOptions.options = players.filter(team => team.teamId === sportId);
                    }),
                  ).subscribe();
                },
              },
            },
          ],
        },
        {
          templateOptions: {
            label: 'Second tab'
          },
          fieldGroup: [
            {
              type: 'input',
              key: 'investmentDate',
              templateOptions: {
                type: 'date',
                label: 'Date of Investment:',
              },
            },
          ],
        }
      ],
    },
    {
      type: 'input',
      key: 'carBrand',
      templateOptions: {
        label: 'Car brand',
        required: false,
      },
    }
  ];

  applyModel() {
    this.model = Object.assign({}, this.modelToApply);
  }

  submit(model) {
    console.log(model);
    alert(JSON.stringify(model));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
