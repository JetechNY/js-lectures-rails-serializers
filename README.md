# Rails Serializers

## SWBATs
- [ ] Create a new serializer
- [ ] Use serializers with associations

## Setup

- Add the `active_model_serializers` gem: `bundle add active_model_serializers`
- Create a new serializer: `rails g serializer animal name image description donations`
- Add associations and other methods to serializers

## Resources

- [Active Model Serializers](https://github.com/rails-api/active_model_serializers/blob/v0.10.6/docs/README.md)
- [N+1 Problem](https://semaphoreci.com/blog/2017/08/09/faster-rails-eliminating-n-plus-one-queries.html)

## Notes
Animal >- Species

```json
  {
    "id": 1,
    "name": "Jimmy",
    "description": "not actually a panda",
    "image_url": "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    "donations": 140,
    "species_name": "Red Panda",
    "diet": "omnivore"
  },
```