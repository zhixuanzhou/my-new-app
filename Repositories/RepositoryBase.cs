using Microsoft.AspNetCore.Http;

namespace my_new_app.Repositories
{
    public class RepositoryBase<TAggregate, TId> : IRepository<TAggregate, TId>
    {
        private readonly ISession session;

        public RepositoryBase(ISession session)
        {
            this.session = session;
        }

        public TAggregate Create(TAggregate model, bool flushSession = true)
        {
            session.Save(model);
            if (flushSession)
            {
                session.Flush();
            }

            return model;
        }
    }
}