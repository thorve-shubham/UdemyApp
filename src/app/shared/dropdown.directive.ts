import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{

    @HostBinding('class.show')
    show:boolean;

    constructor(private renderer: Renderer2,private elRef: ElementRef){

    }
    ngOnInit(): void {
        this.show = false;
    }


    @HostListener('document:click', ['$event']) 
    toggleOpen(event: Event) {
        this.show = this.elRef.nativeElement.contains(event.target) ? !this.show : false;
        if(this.show){
            this.renderer.addClass(this.elRef.nativeElement.querySelector(".dropdown-menu"),"show");
        }else{
            this.renderer.removeClass(this.elRef.nativeElement.querySelector(".dropdown-menu"),"show");
        }
    }

}