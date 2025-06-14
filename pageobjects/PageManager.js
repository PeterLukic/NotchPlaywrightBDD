const { PageQaTask } = require('./PageQaTask');

class PageManager {
    constructor(page) {
        this.page = page;
        this.pageQaTask = new PageQaTask(this.page);

    }

    getPageQaTask() {
        return this.pageQaTask;
    }

}

module.exports = { PageManager };