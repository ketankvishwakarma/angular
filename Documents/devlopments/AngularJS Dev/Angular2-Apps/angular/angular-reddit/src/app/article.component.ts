import {
    OnInit,
    Component,
    HostBinding,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Article } from './article/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

    @HostBinding('attr.class') cssClass = 'row';
    @Input() article: Article;
    @Output() deleteArticle: EventEmitter<string> = new EventEmitter();

    constructor() {
    }
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }

    removeArticle(): boolean {
        this.deleteArticle.emit(this.article.title);
        return false;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.article.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
    ngOnInit() { }
}
