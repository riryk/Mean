import { Component } from '@angular/core';

@Component({
    template: `<div class="builder-profile-wrapper">
        <builder-profile></builder-profile>
    </div>`,
    styles: [`.builder-profile-wrapper {
    	position: relative;
        width: 500px;	
        margin: 0 auto;
    }`]
})
export class BuilderProfileWrapComponent {     
}
