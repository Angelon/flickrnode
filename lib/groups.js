var Groups= function Groups(request) {
    this._request= request;
};

Groups.prototype.getGroupPoolPhotos= function(group_id, page, per_page, callback){
      this._request.executeRequest("flickr.groups.pools.getPhotos",
                                         {"group_id": group_id, "page":page, "per_page":per_page}, false, null, callback);
};

exports.Groups= Groups;
