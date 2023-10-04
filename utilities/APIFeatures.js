export default class APIFeatures
{
    constructor(query, queryString)
    {
        this.query = query 
        this.queryString = queryString 
    }

    filter()
    {
        const query = {...this.queryString}
        const exclude = ['page','sort','limit','fields']
        exclude.forEach(ele => delete query[ele])
        let queryStr = JSON.stringify(query)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
        this.query.find(JSON.parse(queryStr))
        return this;
    }

    sort()
    {
        if(this.queryString.sort)
        {
            const SortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(SortBy)
        }
        return this;
    }

    limit()
    {
        if(this.queryString.fields)
        {
            const fields = this.queryString.fields.split(',').join(' ')
            this.query = this.query.select(fields)
        } else {this.query.select("-__v")}
        return this;
    }
    
    paginate()
    {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 50;
        const skip = (page - 1) * limit;
        this.query.skip(skip).limit(limit);
        return this;
    }
}
