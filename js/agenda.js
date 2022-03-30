export class Agenda extends Array
{
    add(node)
    {
        this.push(node)
    }

    getNode()
    {
        return this.sh()
    }

    notEmpty()
    {
        return this.length !== 0
    }
}
