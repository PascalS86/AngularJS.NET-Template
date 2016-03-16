using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using AngularJS.App.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace AngularJS.App.Hub
{
    /// <summary>
    /// This represents a basic HubImplementation.
    /// It contains a simple Server Method for Broadcasting to all clients 
    /// and a Method to store Users Connections (based on OAuth Authorization).
    /// </summary>
    public class BaseHub : Microsoft.AspNet.SignalR.Hub
    {
        public override Task OnConnected()
        {
            /*
            Uncomment this section to store a users connectionid to a hist identity or anonymous
            */
            //if (!Context.User.Identity.IsAuthenticated)
            //{
            //    Groups.Add(Context.ConnectionId, "anonymous");
            //}
            //else
            //{
            //    Groups.Add(Context.ConnectionId, Context.User.Identity.Name);
            //}
            return base.OnConnected();
        }
        public override Task OnDisconnected(bool stopCalled)
        {
            /*
           Uncomment this section to remove a users connectionid to a hist identity or anonymous
           */
            //if (!Context.User.Identity.IsAuthenticated)
            //{
            //    Groups.Remove(Context.ConnectionId, "anonymous");
            //}
            //else
            //{

            //    Groups.Remove(Context.ConnectionId, Context.User.Identity.Name);
            //}
            return base.OnDisconnected(stopCalled);
        }
        public async Task Send(string message)
        {
            //this is a simple broadcastmessage
            //Use Clients.Group(groupname).broadcastMessage if you want to send the message to specific group.
            Clients.All.broadcastMessage(message);
        }
    }
}