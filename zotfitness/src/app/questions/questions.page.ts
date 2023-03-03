import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router'; //added
import { Preferences } from '@capacitor/preferences'; //added

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  goalCategory:string = "";
  muscleCategory:string = "";

  public muscles:string[] = ["Abdominals", "Abductors", "Calves", "Chest", "Forearms",
    "Glutes", "Hamstrings", "Lats", "Lowerback", "Middleback", "Quadriceps",
    "Traps", "Tripceps"];

  constructor(private router:Router) { }

  ngOnInit() {}

  onQuestionsClick() {
    this.setGoal();
    this.setMuscles();

    this.router.navigateByUrl('/search');

    //this.removeGoal();
    //this.removeMuscles();
  }

  // event handler that updates muscleCategory whenever user selects a muscle
  selectionMade(ev: Event){
    this.muscleCategory = (ev.target as HTMLInputElement).value;
  }

  // function that deletes stored username
  removeGoal = async () => {
    await Preferences.remove({ key: 'goal' });
  };

  // function that deletes stored password
  removeMuscles = async () => {
    await Preferences.remove({ key: 'muscles' });
  };

  // function that sets goal with text from input box
  setGoal = async () => {
  await Preferences.set({
    key: 'goal',
    value: this.goalCategory,
  });
  };

  // function that sets password with text from input box
  setMuscles = async () => {
  await Preferences.set({
    key: 'muscles',
    value: this.muscleCategory,
  });
  };
}
