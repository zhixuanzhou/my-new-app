
namespace my_new_app.Repositories
{
    public interface IRepository<TAggregate, in TId>
    {
        TAggregate Create(TAggregate model, bool flushSession = true);
    }
}