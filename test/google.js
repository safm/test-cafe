import { Selector } from 'testcafe';

class Google {
    constructor(t) {
        this.t = t;
    }

    static pageSelector() {
        return '#gsr';
    }

    static async create(t) {
        const model = new Google(t);
        await Selector(this.pageSelector(), {
            visibilityCheck: true,
        }).visible;
        await model.createRefs();
        return model;
    }

    async createRefs() {
        this.form = Selector('#tsf');
    }
}

fixture('Google')
  .page(`https://www.google.com`);

test
  .meta({
    id: `Google.Home.Page`,
  })('Verify Google', async (t) => {
    const google = await Google.create(t);
    await t
        .expect(google.form.exists).ok();
  });
