import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-tab",
    templateUrl:"./tab.component.html",
    styleUrls:["./tab.component.scss"]
})
export class TabComponent implements OnInit{

    selectSkillSet:string="Javascript"
selectSkill: any;

    ngOnInit(): void {
        selectSkill: (skill:string)=>{
            console.log(skill)
            this.selectSkillSet=skill
        }
    }

}